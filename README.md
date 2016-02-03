# Archer

Voice-controller home automation system built on Node.js with help from the Google Speech API, and various third-party web services.

Archer contains a server and worker, and requires access to both a microphone and speakers to operate.

Ideally, workers run on a Raspberry Pi with audio i/o in order to feed commands to an archer server.


### Quick Start
```
npm install
```

### Environment Variables
* `OPENWEATHERMAP_KEY` - Open Weather Map API key
