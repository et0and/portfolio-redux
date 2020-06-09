---
layout: project
title: Mahara
dateEnd: 2020-06-09
media:
  - type: image
    filename: mahara1.png
    size: sm
    alt: Loading screen of Mahara app
    caption: "Loading screen upon opening app"
  - type: image
    filename: mahara2.png
    size: sm
    alt: Sign up screen for Mahara
    caption: "Sign up screen upon first opening app"
  - type: image
    filename: mahara3.png
    size: sm
    alt: NFC popup prompt for app
    caption: "NFC prompt"
  - type: image
    filename: mahara4.png
    size: sm
    alt: QR camera popup prompt for app
    caption: "QR prompt"
  - type: image
    filename: mahara5.png
    size: sm
    alt: Calendar view showing places the user has checked in
    caption: "Calendar/location view showing visited places"
  - type: image
    filename: mahara6.png
    size: sm
    alt: A menu screen showing the different options of the app
    caption: "Menu screen"
  - type: image
    filename: mahara7.png
    size: sm
    alt: An about screen showing the development information of the app
    caption: "About screen"
---

Mahara is an open source Covid-19 tracing app made with usability and accessibility in mind. The official New Zealand tracing app is (from what I can see) completely closed source, and does not specify where and how user information is stored.

I designed Mahara to work completely offline, with no need for third-party servers and have everything stored locally on the device itself. Utilising the NFC reader and/or camera to scan QR codes, the usre has the option to check-in to different locations for their own personal records much like a diary. User information never leaves the device, and is encrypted using bcrypt for security.

The Figma design files for the app are available [here](https://www.figma.com/file/8m96vxIvYGm64HggWPLauK/Mahara-concept-tracing-app?node-id=0%3A1) for anyone to use freely under the GPLv3. I plan on making the underlying code GPLv3 as well and publishing it on my [Sourcehut](https://git.sr.ht/%7Etomupom/).

