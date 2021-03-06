---
translatedFrom: en
translatedWarning: Wenn Sie dieses Dokument bearbeiten möchten, löschen Sie bitte das Feld "translationsFrom". Andernfalls wird dieses Dokument automatisch erneut übersetzt
editLink: https://github.com/ioBroker/ioBroker.docs/edit/master/docs/de/adapterref/iobroker.nuki2/README.md
title: ioBroker.nuki2
hash: XBXVY+wfWKABrFqeMRcKeCCcNX+aXq4Dyd1syG5eGmk=
---
![Logo](../../../en/adapterref/iobroker.nuki2/admin/nuki-logo.png)

![Anzahl der Installationen](http://iobroker.live/badges/nuki2-installed.svg)
![Stabile Version](http://iobroker.live/badges/nuki2-stable.svg)
![NPM-Version](http://img.shields.io/npm/v/iobroker.nuki2.svg)
![Travis CI](https://travis-ci.org/Zefau/ioBroker.nuki2.svg?branch=master)
![Downloads](https://img.shields.io/npm/dm/iobroker.nuki2.svg)
![NPM](https://nodei.co/npm/iobroker.nuki2.png?downloads=true)

# IoBroker.nuki2 Mit diesem ioBroker-Adapter können Sie die [Nuki Smart Lock] (https://nuki.io/de/) mithilfe der [Nuki Bridge API] (https://developer.nuki.io/page/nuki-bridge-http-api-170/4/ # Überschrift - Einführung) und die [Nuki Web API](https://developer.nuki.io/page/nuki-web-api-111/3/) steuern und überwachen.
**Inhaltsverzeichnis**

1. [Installation] (# Installation)
   1. [API-Token abrufen] (# get-a-api-token)
   2. [Callback-Funktion] (# Callback-Funktion)
   3. [Staaten] (# Staaten)
2. [Smart Home / Alexa-Integration mit ioBroker.javascript] (# smart-home - alexa-integration-using-iobrokerjavascript)
3. [Changelog] (# changelog)
4. [Credits] (# credits)
5. [Lizenz] (# Lizenz)

## Installation
### Holen Sie sich ein API-Token
So erhalten Sie Ihre Brückenmarkierung:

1. Rufen Sie von einem beliebigen Browser in Ihrem Netzwerk `` http:// <bridge_ip>: <bridge_port> / auth``` an
2. Die Brücke leuchtet auf
2. Drücken Sie innerhalb von 30 Sekunden die Taste der Brücke
3. Das Ergebnis des Browseraufrufs sollte folgendermaßen aussehen: `` `

{"token": "token123", "success": true} `` `

### Rückruffunktion
Wenn die Callback-Funktion verwendet wird, versucht der Adapter, den Callback auf der Nuki-Bridge automatisch festzulegen, wenn die Instanz gespeichert wird. Alle Nuki-Staaten werden von der Nuki-Brücke auf dem neuesten Stand gehalten, wenn der Rückruf aktiviert ist.
Rückrufe können auch manuell mit den folgenden URLs in jedem Browser festgelegt und entfernt werden:

* Rückruf einstellen: `` http:// <bridge_ip>: <bridge_port> / callback / add? url = http% 3A% 2F% 2F <host_ip>% 3A <hostport>% 2Fapi% 2Fnuki & token = <bridgeToken> `` `
* Callback entfernen: `` http:// <bridge_ip>: <bridge_port> / callback / remove? id = <callback_id> & token = <bridgeToken> ``
* Alle Callbacks auflisten: `` http:// <bridge_ip>: <bridge_port> / callback / list? token = <bridgeToken> `` `

### Zustände
Wenn Sie ioBroker.nuki2 erfolgreich eingerichtet haben, werden die folgenden Kanäle und Status erstellt:

#### Bridges (mit Nuki Bridge API)
Als Gerät wird eine Brücke mit dem Namensmuster ```bridge__<name of bridge>``` erstellt. Die folgenden Kanäle / Zustände werden in jeder Brücke erstellt:

| Kanal | Zustand | Beschreibung |
|:------- |:----- |:----------- |
| - | \ _connected | Flag, das angibt, ob die Bridge mit dem Nuki-Server verbunden ist oder nicht
| - | bridgeId | ID der Brücke / des Servers |
| - | bridgeIp | IP-Adresse der Brücke |
| - | bridgePort | Hafen der Brücke |
| - | bridgeType | Art der Brücke |
| - | hardwareId | ID der Hardware-Bridge (nur Hardware-Bridge) |
| - | aktualisiert | Zeitstempel der letzten Aktualisierung |
| - | Betriebszeit | Uptime der Brücke in Sekunden |
| - | versFirmware | Version der Bridges-Firmware (nur Hardware-Bridge) |
| - | versWifi | Version der Firmware der WiFi-Module (nur Hardware-Bridge) |
| - | versApp | Version der Bridge-App (nur Software-Bridge) |

#### Sperren (mit Nuki Bridge API)
Als Gerät wird eine Sperre mit dem Namensmuster ```door__<name of door>``` angelegt. Die folgenden Kanäle / Status werden in jeder Sperre erstellt (bei Verwendung der Nuki Bridge-API):

| Kanal | Zustand | Beschreibung |
|:------- |:----- |:----------- |
| - | Aktion | Löst eine Aktion auf die Sperre aus
| - | Brücke | Brücke des Nuki |
| - | id | ID des Nuki |
| - | name | Name des Nuki |
| Status | - | Aktueller Status der Sperre |
| Status | batterieKritisch | Gibt den kritischen Batteriestand an
| Status | lockState | Aktueller Sperrzustand des Nuki |
| Status | gesperrt | Anzeige wenn die Tür verriegelt ist |
| Status | aktualisiert | Zeitstempel der letzten Aktualisierung |

#### Sperren (mit Nuki Web API)
Als Gerät wird eine Sperre mit dem Namensmuster ```door__<name of door>``` angelegt. Die folgenden Kanäle / Status werden in jeder Sperre erstellt (bei Verwendung der Nuki Web API):

| Kanal | Zustand | Beschreibung (mögliche Werte) |
|:------- |:----- |:----------------------------- |
| - | Aktion | Löst eine Aktion auf die Sperre aus
| - | id | ID des Nuki |
| - | name | Name des Nuki |
| Status | - | Aktueller Status der Sperre |
| Status | batterieKritisch | Gibt den kritischen Batteriestand an
| Status | geschlossen | Anzeige, ob die Tür geschlossen ist (boolean von doorState) |
| Status | doorState | Aktueller Türzustand des Nuki |
| Status | letzteAktion | Letzte ausgelöste Aktion |
| Status | lockState | Aktueller Sperrzustand des Nuki |
| Status | gesperrt | Anzeige wenn die Tür verriegelt ist |
| Status | Modus | Der Smartlock-Modus <br> `{"0": 'UNINITIALIZED', "1": 'PAIRING', "2": 'NORMAL', "3": 'UNKNOWN', "4": 'MAINTENANCE'}` |
| Status | auslösen | Der Staatsauslöser <br> `{"0": 'SYSTEM', "1": 'MANUAL', "2": 'BUTTON', "3": 'AUTOMATIC', "4": 'WEB', "5": 'APP'}` |
| Status | auslösen | Der Staatsauslöser <br> `{&quot; 0 &quot;:&quot; SYSTEM &quot;,&quot; 1 &quot;:&quot; MANUAL &quot;,&quot; 2 &quot;:&quot; KNOPF &quot;,&quot; 3 &quot;:&quot; AUTOMATIC &quot;,&quot; 4 &quot;:&quot; WEB &quot;,&quot; 5 &quot;:&quot; APP &quot;} `|
| config | - | Konfiguration des Schlosses |
| config | gpsLatitude | Latitude |
| config | gpsLongitude | Längengrad |
| config | autoUnlatch | Trifft zu, wenn die Tür beim Entriegeln (Knopf) entriegelt werden soll
| config | pairingEnabled | True, wenn das Pairing über die Smartlock-Schaltfläche | erlaubt ist
| config | buttonEnabled | True, wenn die Schaltfläche auf dem Smartlock aktiviert ist
| config | ledEnabled | True, wenn die LED am Smartlock aktiviert ist
| config | ledBrightness | Die Helligkeit der LED: 0 (aus) bis 5 (max) |
| config | fobAction1 | Die Fob-Aktion, wenn die Taste einmal gedrückt wird <br> `{"0": 'NONE', "1": 'UNLOCK', "2": 'LOCK', "3": 'LOCK_N_GO', "4": 'INTELLIGENT'}` |
| config | fobAction2 | Die Fob-Aktion, wenn die Taste zweimal gedrückt wird <br> `{"0": 'NONE', "1": 'UNLOCK', "2": 'LOCK', "3": 'LOCK_N_GO', "4": 'INTELLIGENT'}` |
| config | fobAction3 | Die Fob-Aktion, wenn die Taste dreimal gedrückt wird <br> `{"0": 'NONE', "1": 'UNLOCK', "2": 'LOCK', "3": 'LOCK_N_GO', "4": 'INTELLIGENT'}` |
| config | fobAction3 | Die Fob-Aktion, wenn die Taste dreimal gedrückt wird <br> `{&quot; 0 &quot;: &#39;NONE&#39;,&quot; 1 &quot;: &#39;UNLOCK&#39;, &#39;2&#39;: &#39;LOCK&#39;, &#39;3&#39;: &#39;LOCK_N_GO&#39;, &#39;4&#39;: &#39;INTELLIGENT&#39;}` |
| config | Werbemodus | Der Werbemodus (Batterie sparen) <br> `{"0": 'AUTOMATIC', "1": 'NORMAL', "2": 'SLOW', "3": 'SLOWEST'}` |
| config | Werbemodus | Der Werbemodus (Batterie sparen) <br> `{&quot; 0 &quot;: &#39;AUTOMATIC&#39;,&quot; 1 &quot;: &#39;NORMAL&#39;,&quot; 2 &quot;: &#39;SLOW&#39;,&quot; 3 &quot;: &#39;SLOWEST&#39;}` |
| config | homekitState | Der Heimatkit-Staat <br> `{"0": 'UNAVAILABLE', "1": 'DISABLED', "2": 'ENABLED', "3": 'ENABLED & PAIRED'}` |
| config | homekitState | Der Heimatkit-Staat <br> `{&quot; 0 &quot;: &#39;UNAVAILABLE&#39;, &#39;1&#39;: &#39;DEAKTIVIERT&#39;, &#39;2&#39;: &#39;ENABLED&#39;, &#39;3&#39;: &#39;ENABLED &amp; PAIRED&#39;}` |
| config | timezoneId | Die Zeitzonen-ID |
| config.advanced | - | Erweiterte Konfiguration der Sperre |
| config.advanced | totalDegrees | Die absolute Gesamtposition in Grad, die während der Kalibrierung erreicht wurde
| config.advanced | unlockedPositionOffsetDegrees | Offset, der die entriegelte Position verändert
| config.advanced | lockedPositionOffsetDegrees | Offset, der die gesperrte Position verändert
| config.advanced | singleLockedPositionOffsetDegrees | Offset, der die einzelne gesperrte Position verändert
| config.advanced | unlockedToLockedTransitionOffsetDegrees | Offset, der die Position ändert, an der der Übergang von nicht gesperrt zu gesperrt erfolgt
| config.advanced | singleButtonPressAction | Die gewünschte Aktion, wenn die Taste einmal gedrückt wird <br> `{"0": "NO_ACTION", "1": "INTELLIGENT", "2": "UNLOCK", "3": "LOCK", "4": "UNLATCH", "5": "LOCK_N_GO", "6": "SHOW_STATUS"}` |
| config.advanced | doubleButtonPressAction | Die gewünschte Aktion, wenn die Taste zweimal gedrückt wird <br> `{"0": "NO_ACTION", "1": "INTELLIGENT", "2": "UNLOCK", "3": "LOCK", "4": "UNLATCH", "5": "LOCK_N_GO", "6": "SHOW_STATUS"}` |
| config.advanced | doubleButtonPressAction | Die gewünschte Aktion, wenn die Taste zweimal gedrückt wird <br> `{&quot; 0 &quot;:&quot; NO_ACTION &quot;,&quot; 1 &quot;:&quot; INTELLIGENT &quot;,&quot; 2 &quot;:&quot; UNLOCK &quot;,&quot; 3 &quot;:&quot; LOCK &quot;,&quot; 4 &quot;:&quot; UNLATCH &quot;,&quot; 5 &quot;:&quot; LOCK_N_GO &quot;, &quot;6&quot;: &quot;SHOW_STATUS&quot;} `|
| config.advanced | batteryType | Der Typ der im Smart Lock vorhandenen Batterien <br> `{"0": 'ALKALI', "1": 'ACCUMULATOR', "2": 'LITHIUM'}` |
| config.advanced | batteryType | Der Typ der im Smart Lock vorhandenen Batterien <br> `{&quot; 0 &quot;: &#39;ALKALI&#39;, &#39;1&#39;: &#39;AKKUMULATOR&#39;, &#39;2&#39;: &#39;LITHIUM&#39;}` |
| config.advanced | automaticBatteryTypeDetection | Flag, das anzeigt, ob die automatische Erkennung des Batterietyps aktiviert ist
| config.advanced | UnlatchDuration | Dauer in Sekunden, um den Riegel in unverriegelter Position zu halten
| config.advanced | autoLockTimeout | Sekunden, bis das Smart Lock sich nach dem Entsperren wieder öffnet. Kein automatisches Sperren, wenn der Wert 0 ist. |
| Benutzer | - | Benutzer der Sperre |
| users._userName_ | - | Benutzer _userName_ |
| users._userName_ | Typ | Die Art der Genehmigung <br> `{"0": 'APP', "1": 'BRIDGE', "2": 'FOB', "3": 'KEYPAD', "13": 'KEYPAD CODE', "14": 'Z-KEY', "15": 'VIRTUAL'}` |
| users._userName_ | Typ | Die Art der Genehmigung <br> &quot;{&quot; 0 &quot;:&quot; APP &quot;,&quot; 1 &quot;:&quot; BRIDGE &quot;,&quot; 2 &quot;:&quot; FOB &quot;,&quot; 3 &quot;:&quot; KEYPAD &quot;,&quot; 13 &quot;:&quot; KEYPAD CODE &quot;,&quot; 14 &quot;:&quot; Z- KEY &#39;, &quot;15&quot;:&#39; VIRTUAL &#39;} `|
| users._userName_ | id | Die eindeutige ID des Benutzers |
| users._userName_ | authId | Die Smartlock-Berechtigungs-ID |
| users._userName_ | aktiviert | True, wenn der Benutzer | aktiviert ist
| users._userName_ | remoteAllowed | Wahr, wenn der auth Zugriff über Fernzugriff hat
| users._userName_ | lockCount | Die Sperrzählung |
| users._userName_ | dateLastActive | Das letzte aktive Datum |
| users._userName_ | dateCreated | Das Erstellungsdatum |
| users._userName_ | dateUpdated | Datum der Aktualisierung |
| users._userName_ | allowedFromDate | Die erlaubten ab Datum |
| users._userName_ | ErlaubteWeekDays | Die erlaubten Wochentage <br> `{64: 'Monday', 32: 'Tuesday', 16: 'Wednesday', 8: 'Thursday', 4: 'Friday', 2: 'Saturday', 1: 'Sunday'}` |
| users._userName_ | ErlaubteWeekDays | Die erlaubten Wochentage <br> {64: &#39;Montag&#39;, 32: &#39;Dienstag&#39;, 16: &#39;Mittwoch&#39;, 8: &#39;Donnerstag&#39;, 4: &#39;Freitag&#39;, 2: &#39;Samstag&#39;, 1: &#39;Sonntag&#39;} `|
| users._userName_ | allowedFromTime | Die erlaubte Zeit (in Minuten ab Mitternacht) |
| users._userName_ | allowedUntilTime | Die erlaubte Zeit (in Minuten ab Mitternacht) |

## Smart Home / Alexa-Integration mit ioBroker.javascript
Einige Beispiele für eine mögliche Integration in Ihr Smart Home.

### Tür um 22 Uhr abends abschließen
```javascript
var states = {
    "0": "uncalibrated",
    "1": "locked",
    "2": "unlocking",
    "3": "unlocked",
    "4": "locking",
    "5": "unlatched",
    "6": "unlocked (lock n go)",
    "7": "unlatching",
    "254": "motor blocked",
    "255": "undefined"
};

schedule('0 22 * * *', function()
{
    var status = (getState('nuki2.0.door__home_door.status.lockState').val);
    var msg = 'Main Door door is ' + (states[status]) + '. ';

    if (status == '3')
    {
        setState('nuki2.0.door__home_door.action', 2);
        msg += 'Locking door..'
    }
    else
        msg += 'No action taken.'

    log(msg, {m: 'Nuki', o: ['msg']});
});
```

__Ersetzen Sie `nuki2.0.door__home_door.status.lockState` mit dem lockState Ihres Schlosses! __ Sie können die Nachricht auch über `msg` anpassen.

## Credits
Danke an [@ Mik13] (https://github.com/Mik13) für die [Nuki Bridge API-Implementierung](https://github.com/Mik13/nuki-bridge-api#nuki-bridge-api).

Die von <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> ([Essential Set] (https://www.flaticon.com/packs/essential-set-2)) und <a href="https://www.freepik.com/" title="Freepik">Freepik</a> ([Doors](https://www.flaticon.com/packs/doors)) von <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com erstellten Icons</a> sind von <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons VON 3.0" target="_blank">CC 3.0 BY</a> lizenziert

## Changelog

### 0.9.4 / 0.9.5 (2019-03-22)
* (zefau) Useless versions to fix incorrect configuration in `io-package.json`

### 0.9.3 (2019-03-22)
* (zefau) Limited log retrieval to 1000 entries

### 0.9.2 (2019-02-11)
* (zefau) Updated dependency

### 0.9.1 (2019-02-10)
* (zefau) Added Web Interface to view logs

### 0.9.0 (2019-02-09)
* (zefau) Using both Bridge API and Web API
* (zefau) Support for multiple bridges
* (zefau) Support for discovery within admin panel
* (zefau) Additional states for bridges and better separation between software / hardware bridge
  * retrieve the basic and advanced configuration from your lock
  * retrieve all users having access to your lock

## License
The MIT License (MIT)

Copyright (c) 2019 Zefau <zefau@mailbox.org>

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