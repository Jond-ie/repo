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
| [**Begonecia**](https://jond-ie.github.io/repo/depictions/com.johndie.begonecia.html) | 0.2.0-rootless3 | Control Center toggle that silences camera, microphone and location system-wide. Rootless port of Nepeta's BegoneCIA. |
| [**Slaplock**](https://jond-ie.github.io/repo/depictions/com.johndie.slaplock.html) | 0.2.0~beta1-2 | Lock chosen apps behind Face ID / Touch ID, with passcode fallback. |
| [**Triggr**](https://jond-ie.github.io/repo/depictions/com.johndie.triggr.html) <sup>beta</sup> | 1.0.0~beta6 | Activator-lite: assign actions to buttons, Touch ID, status bar taps, icon flicks, shaking and events. Source & feedback: [triggr-beta](https://github.com/Jond-ie/triggr-beta). |
| [**Pinstant**](https://jond-ie.github.io/repo/depictions/com.johndie.pinstant.html) | 1.0.0 | Wake straight to the passcode: no Lock Screen, no swipe. No settings. Concept from UnlockOrElse by ETHN. |
| [**Density**](https://jond-ie.github.io/repo/depictions/com.johndie.density.html) <sup>beta</sup> | 1.0.0~beta7 | More on screen in the apps you pick, like Android's display density. Status bar and keyboard stay stock. |
| [**BlankPass**](https://jond-ie.github.io/repo/depictions/com.johndie.blankpass.html) | 1.0.0 | A blank Lock Screen passcode keypad: the numbers are hidden. No settings. Concept from BlankPass by VladGeek. |
| [**Podified**](https://jond-ie.github.io/repo/depictions/com.johndie.podified.html) | 1.0.0-2 | Makes a SIM-less iPhone present itself as an iPod: Settings naming, no Cellular, "iPod" status bar, optional hidden Phone app. |
| [**Crossfade**](https://jond-ie.github.io/repo/depictions/com.crossfade.music.html) | 0.4.0-2 | True crossfade between local-library songs in the stock Music app. |
| [**Scrub**](https://jond-ie.github.io/repo/depictions/com.scrub.exif.html) | 1.0.0-2 | Strips GPS and identifying metadata from photos before apps send them. |

Tap a name for the full details, notes and known limitations.

## Requirements

- **Dopamine** (rootless jailbreak), iOS 15–16.
- **A12 and newer: supported again.** Earlier builds put A12+ devices into safe mode (a wrong build format). The current
  versions are built with a new toolchain and pass the format check. **Density is confirmed working on A12+**: an
  iPhone 15 Pro Max on iOS 17.3 and an iPhone SE (2nd gen) on iOS 18.2. The other tweaks aren't confirmed on A12+ yet:
  please [report back](https://github.com/Jond-ie/repo/issues). If one puts you into safe mode, uninstall it in Sileo.
- **Density 1.0.0~beta6** is confirmed by testers to fix the issues reported on earlier betas (Google Maps search bar,
  WhatsApp/Narwhal drawing past the screen, Strava's tab bar).
- **Triggr** includes arm64e (A12+) since 1.0.0~beta6; it isn't confirmed on an A12+ device yet. Triggr is open source
  (GPL-3.0); report issues on the [Triggr GitHub](https://github.com/Jond-ie/triggr-beta/issues).
- Tested on an **iPhone 8 Plus (A11, arm64)** with iOS 16.7 and an **iPhone 7 (A10)** with iOS 15.8.6.
- Some tweaks need packages from other repos. Sileo installs them automatically when you have
  those repos added:
  - **Begonecia:** CCSupport, Cephei (Chariz)
  - **Slaplock, Scrub, Triggr, Density:** AltList (BigBoss)

## Support

Found a bug or have a request? [Open an issue](https://github.com/Jond-ie/repo/issues) and include
your device, iOS version, jailbreak, and the tweak's version.

## Credits &amp; licensing

- **Begonecia** is a rootless port of [BegoneCIA](https://github.com/larygwil/BegoneCIA) by Eva (Nepeta),
  MIT licensed. (Nepeta's own repo is no longer online; the link is an unofficial mirror.) The original license and copyright ship inside the package.
  The port's source code is at [Jond-ie/begonecia](https://github.com/Jond-ie/begonecia).
- **Slaplock**, **Podified**, **Crossfade**, **Scrub**, **Triggr**, **Pinstant**, **Density** and **BlankPass** are original works by John d_ie. Triggr is inspired by
  Activator (Ryan Petrich).

This repository hosts the installable packages only.
- **Pinstant** is written from scratch; the idea comes from UnlockOrElse by Ethan Whited (ETHN).
- **BlankPass** is written from scratch; the idea comes from the original BlankPass by VladGeek (Packix).
