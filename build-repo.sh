#!/usr/bin/env bash
# build-repo.sh — regenerate the apt repo index from every .deb in ./debs
#
# Run this after dropping new .deb files into debs/. It rebuilds Packages,
# Packages.bz2 (Sileo prefers the compressed one) and Release. Then commit +
# push; GitHub Pages serves the repo and users add the URL in Sileo.
#
# Requires: dpkg-scanpackages (from dpkg) and apt-utils (apt-ftparchive) OR
# just dpkg-dev. On Ubuntu/WSL: sudo apt install dpkg-dev bzip2

set -euo pipefail
cd "$(dirname "$0")"

if [ ! -d debs ] || [ -z "$(ls -A debs/*.deb 2>/dev/null || true)" ]; then
    echo "No .deb files in debs/. Put your packages there first." >&2
    exit 1
fi

echo "==> Scanning debs/ for packages"
# Paths in Packages are relative to the repo root, so scan from here.
dpkg-scanpackages --multiversion debs /dev/null > Packages 2>/dev/null
# dpkg-scanpackages normalizes field names ("SileoDepiction" -> "Sileodepiction");
# restore Sileo's canonical spelling.
sed -i 's/^Sileodepiction:/SileoDepiction:/' Packages
bzip2 -kf Packages
echo "    $(grep -c '^Package:' Packages) package version(s) indexed"

echo "==> Writing Release"
# Edit the values in repo.conf to change repo name/description.
# shellcheck disable=SC1091
source ./repo.conf

cat > Release <<EOF
Origin: ${REPO_ORIGIN}
Label: ${REPO_LABEL}
Suite: stable
Version: 1.0
Codename: ios
Architectures: iphoneos-arm64
Components: main
Description: ${REPO_DESCRIPTION}
EOF

echo "==> Done. Files updated: Packages, Packages.bz2, Release"
echo "    Next: git add -A && git commit -m 'update repo' && git push"
