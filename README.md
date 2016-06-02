# Archer [![Build Status](https://travis-ci.org/willricketts/archer.svg?branch=master)](https://travis-ci.org/willricketts/archer)

Voice-controller home automation system built on Node.js with help from the Google Speech API, and various third-party web services.

While an Archer server can run on pretty much any *nix system, an Archer worker requires both a microphone and speaker to operate.

Ideally, workers run on a Raspberry Pi with audio i/o in order to feed commands to an archer server.

=======
### Server

#### Quick Start
```
npm install
```

### Worker
#### Quick Start
```
npm install
```

### Environment Variables
* `OPENWEATHERMAP_KEY` - Open Weather Map API key

### TODO
* Add Archer nmap node discovery mechanism
