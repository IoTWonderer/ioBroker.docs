---
translatedFrom: en
translatedWarning: Wenn Sie dieses Dokument bearbeiten möchten, löschen Sie bitte das Feld "translationsFrom". Andernfalls wird dieses Dokument automatisch erneut übersetzt
editLink: https://github.com/ioBroker/ioBroker.docs/edit/master/docs/de/adapterref/iobroker.meross/README.md
title: ioBroker.meross
hash: IZzDVhySIYj4MFKy7j4fG3/jRnl/U0Nb1tlmfVb40so=
---
![Logo](../../../en/adapterref/iobroker.meross/admin/meross-logo.png)

![Greenkeeper-Abzeichen](https://badges.greenkeeper.io/Apollon77/ioBroker.meross.svg)
![Anzahl der Installationen](http://iobroker.live/badges/meross-stable.svg)
![NPM-Version](http://img.shields.io/npm/v/iobroker.meross.svg)
![Downloads](https://img.shields.io/npm/dm/iobroker.meross.svg)
![Travis-CI](http://img.shields.io/travis/Apollon77/ioBroker.meross/master.svg)
![AppVeyor](https://ci.appveyor.com/api/projects/status/github/Apollon77/ioBroker.meross?branch=master&svg=true)
![NPM](https://nodei.co/npm/iobroker.meross.png?downloads=true)

# IoBroker.meross
## Beschreibung
Dieser Adapter ermöglicht die Steuerung von Meross-Geräten durch Verbindung mit den Meross-Cloud-Servern.

Sie müssen Ihre Cloud-Anmeldeinformationen angeben. Der Adapter stellt eine Verbindung zu Ihrem Cloud-Konto her und abonniert alle Gerätedaten über MQTT. Aus diesem Grund müssen die Geräte mit ihrer Cloud verbunden sein. Derzeit ist keine Möglichkeit bekannt, die Geräte lokal zu steuern.

Eine Adapterinstanz zeigt alle Geräte eines Meross Cloud-Kontos an und ermöglicht deren Steuerung.

## Bekannte Arbeitsgeräte
* mss425e
* mss310

Wenn mehrere Geräte funktionieren (oder auch nicht), melden Sie sie bitte, indem Sie ein GitHub-Problem öffnen.

## Changelog

### 1.0.0 (2018.12.16)
* (Apollon77) finalize and move to 1.0.0

### 0.4.1 (2018.11.26)
* (Apollon77) finalize version and allow electricity polling interval to be configured

### 0.3.0 (2018.11.16)
* (Apollon77) add support for mss310 devices

### 0.1.0 (2018.11.14)
* (Apollon77) First release to support ToggleX devices

## License
The MIT License (MIT)

Copyright (c) 2018 Apollon77 <iobroker@fischer-ka.de>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.