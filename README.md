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
| [**Begonecia**](https://jond-ie.github.io/repo/depictions/com.johndie.begonecia.html) | 0.2.0-rootless1 | Control Center toggle that silences camera, microphone and location system-wide. Rootless port of Nepeta's BegoneCIA. |
| [**Slaplock**](https://jond-ie.github.io/repo/depictions/com.johndie.slaplock.html) | 0.2.0~beta1 | Lock chosen apps behind Face ID / Touch ID, with passcode fallback. |
| [**Podified**](https://jond-ie.github.io/repo/depictions/com.johndie.podified.html) | 1.0.0 | Makes a SIM-less iPhone present itself as an iPod: Settings naming, no Cellular, "iPod" status bar, optional hidden Phone app. |
| [**Crossfade**](https://jond-ie.github.io/repo/depictions/com.crossfade.music.html) | 0.4.0 | True crossfade between local-library songs in the stock Music app. |
| [**Scrub**](https://jond-ie.github.io/repo/depictions/com.scrub.exif.html) | 1.0.0 | Strips GPS and identifying metadata from photos before apps send them. |

Tap a name for the full details, notes and known limitations.

## Requirements

- **Dopamine** (rootless jailbreak), iOS 15–16.
- Tested on an **iPhone 8 Plus (A11, arm64)** with iOS 16.7 only. **A12 and newer devices are untested**;
  if you try one, please [report](https://github.com/Jond-ie/repo/issues) whether it works.
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
