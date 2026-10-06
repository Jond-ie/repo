<p align="center">
  <img src="CydiaIcon.png" width="112" alt="">
</p>

<h1 align="center">John's Repo</h1>

<p align="center">
  Rootless privacy &amp; utility tweaks for Dopamine · iOS 15–17 · A12+ supported
  <br>
  <a href="https://jond-ie.github.io/repo/"><strong>jond-ie.github.io/repo</strong></a>
</p>

---

## Add the repo

In **Sileo** or **Zebra**: Sources → **+** → enter

```
https://jond-ie.github.io/repo/
```

Or open [jond-ie.github.io/repo](https://jond-ie.github.io/repo/) on your device and tap **Add to Sileo** or **Add to Zebra**.

## Packages

| Tweak | Version | What it does |
|---|---|---|
| [**LiteFace**](https://jond-ie.github.io/repo/depictions/com.johndie.liteface.html) <sup>new</sup> | 1.0.0 | iOS 18, Face ID iPhones: every Face ID prompt uses the small top animation that hidden apps use, instead of the box in the middle. Source: [Jond-ie/liteface](https://github.com/Jond-ie/liteface). |
| [**Begonecia**](https://jond-ie.github.io/repo/depictions/com.johndie.begonecia.html) | 1.0.0 | Control Center toggle that silences camera, microphone and location system-wide. Rootless port of Nepeta's BegoneCIA. |
| [**CCSupport (iOS 18 fix)**](https://jond-ie.github.io/repo/depictions/com.opa334.ccsupport.html) | 1.3.13-3~ios18fix1 | opa334's CCSupport with a fix that keeps tweak modules in Control Center on iOS 18 after safe mode and reboots. iOS 18+ only, not tested on iOS 26. |
| [**Slaplock**](https://jond-ie.github.io/repo/depictions/com.johndie.slaplock.html) | 0.2.0~beta1-2 | Lock chosen apps behind Face ID / Touch ID, with passcode fallback. |
| [**Triggr**](https://jond-ie.github.io/repo/depictions/com.johndie.triggr.html) | 1.0.4 | Activator-style triggers for buttons, the status bar, Home Screen gestures, sensors and events, with its own app. Source: [Jond-ie/triggr](https://github.com/Jond-ie/triggr). |
| [**EQELinker**](https://jond-ie.github.io/repo/depictions/com.johndie.eqelinker.html) | 1.0.0 | Load EQE presets from Triggr (e.g. per Bluetooth device). Needs Triggr and EQE. |
| [**Pinstant**](https://jond-ie.github.io/repo/depictions/com.johndie.pinstant.html) | 1.0.1 | Wake straight to the passcode: no Lock Screen, no swipe. No settings. Concept from UnlockOrElse by ETHN. |
| [**Density**](https://jond-ie.github.io/repo/depictions/com.johndie.density.html) | 1.0.0 | More on screen in the apps you pick, like Android's display density. Status bar and keyboard stay stock. |
| [**BlankPass**](https://jond-ie.github.io/repo/depictions/com.johndie.blankpass.html) | 1.0.0 | A blank Lock Screen passcode keypad: the numbers are hidden. No settings. Concept from BlankPass by VladGeek. |
| [**BinaryPass**](https://jond-ie.github.io/repo/depictions/com.johndie.binarypass.html) | 1.0.0 | Binary Lock Screen passcode keypad: each number shown as four dots (8 4 2 1). No settings. Concept from BinaryPasscode by eskimo. |
| [**Glide**](https://jond-ie.github.io/repo/depictions/com.johndie.glide.html) <sup>beta</sup> | 1.0.0~beta2 | iOS 6's slide to unlock on the Lock Screen. No settings. Concept from SlideToUnlock by Nepeta. |
| [**Shelf**](https://jond-ie.github.io/repo/depictions/com.johndie.shelf.html) <sup>beta</sup> | 1.0.0~beta2 | The iOS 6 glass dock with icon reflections, drawn in code. No settings. Concept from ClassicDock by CoolStar. |
| [**Podified**](https://jond-ie.github.io/repo/depictions/com.johndie.podified.html) | 1.0.1 | Makes a SIM-less iPhone present itself as an iPod: Settings naming, no Cellular, "iPod" status bar, optional hidden Phone app. |
| [**Crossfade**](https://jond-ie.github.io/repo/depictions/com.crossfade.music.html) | 0.4.0-2 | True crossfade between local-library songs in the stock Music app. |
| [**Scrub**](https://jond-ie.github.io/repo/depictions/com.scrub.exif.html) | 1.0.0-2 | Strips GPS and identifying metadata from photos before apps send them. |

Tap a name for the full details, notes and known limitations.

## Requirements

- **Dopamine** (rootless jailbreak), iOS 15–17.
- **A12 and newer: supported and confirmed.** Every tweak is now tested on an **iPhone SE (2nd gen, A13)** with
  **iOS 17.5.1**, as well as an **iPhone 8 Plus (A11)** with iOS 16.7 and an **iPhone 7 (A10)** with iOS 15.8.6.
  The iOS 17 fixes are in Podified 1.0.1, Triggr 1.0.2, Density beta10 and Begonecia rootless5.
  (Crossfade and Scrub install and load fine there, but their features weren't re-checked on iOS 17.)
  (Earlier builds put A12+ devices into safe mode; if anything ever does, uninstall it in Sileo and
  [report back](https://github.com/Jond-ie/repo/issues).)
- **Density** is also reported working by testers on an iPhone 15 Pro Max (iOS 17.3) and an iPhone SE (2nd gen, iOS 18.2).
- **Triggr** is open source (GPL-3.0); report issues on the [Triggr GitHub](https://github.com/Jond-ie/triggr/issues). Betas live in [triggr-beta](https://github.com/Jond-ie/triggr-beta).
- **Glide** and **Pinstant** can't be installed together (Pinstant skips the Lock Screen Glide lives on).
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
- **Slaplock**, **Podified**, **Crossfade**, **Scrub**, **Triggr**, **Pinstant**, **Density**, **BlankPass**, **BinaryPass**, **LiteFace**, **EQELinker**, **Glide** and **Shelf** are original works by John d_ie. Triggr is inspired by
  Activator (Ryan Petrich).

This repository hosts the installable packages only.
- **Pinstant** is written from scratch; the idea comes from UnlockOrElse by Ethan Whited (ETHN).
- **BlankPass** is written from scratch; the idea comes from the original BlankPass by VladGeek (Packix).
- **BinaryPass** is written from scratch; the idea comes from the original BinaryPasscode by eskimo (Jordan Koch).
- **Glide** is written from scratch; the idea comes from SlideToUnlock by Nepeta and its port Slyd by s8ngyu.
- **Shelf** is written from scratch and draws everything in code; the idea comes from ClassicDock by CoolStar.
