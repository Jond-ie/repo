<p align="center">
  <img src="CydiaIcon.png" width="112" alt="">
</p>

<h1 align="center">John's Repo</h1>

<p align="center">
  Rootless privacy &amp; utility tweaks for Dopamine · iOS 15–16
  <br>
  <a href="https://jond-ie.github.io/repo/"><strong>jond-ie.github.io/repo</strong></a>
</p>

---

## Add the repo

In **Sileo** or **Zebra**: Sources → **+** → enter

```
https://jond-ie.github.io/repo/
```

Or open [jond-ie.github.io/repo](https://jond-ie.github.io/repo/) on your device and tap **Add to Sileo**.

## Packages

| Tweak | Version | What it does |
|---|---|---|
| [**Begonecia**](https://jond-ie.github.io/repo/depictions/com.johndie.begonecia.html) | 0.2.0-rootless2 | Control Center toggle that silences camera, microphone and location system-wide. Rootless port of Nepeta's BegoneCIA. |
| [**Slaplock**](https://jond-ie.github.io/repo/depictions/com.johndie.slaplock.html) | 0.2.0~beta1-1 | Lock chosen apps behind Face ID / Touch ID, with passcode fallback. |
| [**Podified**](https://jond-ie.github.io/repo/depictions/com.johndie.podified.html) | 1.0.0-1 | Makes a SIM-less iPhone present itself as an iPod: Settings naming, no Cellular, "iPod" status bar, optional hidden Phone app. |
| [**Crossfade**](https://jond-ie.github.io/repo/depictions/com.crossfade.music.html) | 0.4.0-1 | True crossfade between local-library songs in the stock Music app. |
| [**Scrub**](https://jond-ie.github.io/repo/depictions/com.scrub.exif.html) | 1.0.0-1 | Strips GPS and identifying metadata from photos before apps send them. |

Tap a name for the full details, notes and known limitations.

## Requirements

- **Dopamine** (rootless jailbreak), iOS 15–16.
- **A11 and older only for now.** Earlier builds put **A12 and newer devices** (iPhone XS / XR and later) into safe mode.
  The current versions are arm64-only and refuse to install on A12+. If you have one installed on an A12+ device, update or
  uninstall it (safe mode still lets you open Sileo). A12+ support needs a new build toolchain and a tester; [help here](https://github.com/Jond-ie/repo/issues).
- Tested on an **iPhone 8 Plus (A11, arm64)** with iOS 16.7.
- Some tweaks need packages from other repos. Sileo installs them automatically when you have
  those repos added:
  - **Begonecia:** CCSupport, Cephei (Chariz)
  - **Slaplock, Scrub:** AltList (BigBoss)

## Support

Found a bug or have a request? [Open an issue](https://github.com/Jond-ie/repo/issues) and include
your device, iOS version, jailbreak, and the tweak's version.

## Credits &amp; licensing

- **Begonecia** is a rootless port of [BegoneCIA](https://github.com/larygwil/BegoneCIA) by Eva (Nepeta),
  MIT licensed. (Nepeta's own repo is no longer online; the link is an unofficial mirror.) The original license and copyright ship inside the package.
  The port's source code is at [Jond-ie/begonecia](https://github.com/Jond-ie/begonecia).
- **Slaplock**, **Crossfade** and **Scrub** are original works by John d_ie.

This repository hosts the installable packages only.
