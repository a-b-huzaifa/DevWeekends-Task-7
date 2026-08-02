# 07 — Weather App

Search any city and see live current weather (temperature, conditions,
humidity, wind speed).

## Features
- **Live Weather Lookup**: Fetches dynamic weather forecasts and details from Open-Meteo.
- **Light/Dark Theme**: Brutalist-styled toggle button with dynamic variables and `localStorage` persistence.

## Hooks used
- `useState` — `city` input value, resolved `weather` object, `status` (idle/loading/ready/error), and `theme` (light/dark).
- `useEffect` — fetches weather on mount, focuses input, and registers/saves theme changes to `document.body.classList` and `localStorage`.
- `useRef` — reference to focus the search input on mount.

## API (live data, acceptance criterion)
Two calls to [Open-Meteo](https://open-meteo.com/) — free, no API key:
1. Geocoding: city name → latitude/longitude
2. Forecast: latitude/longitude → current temperature, humidity, wind,
   weather code (mapped to a readable description in `app.js`)

## Run it
```bash
npm install
npm start
``` Requires internet access.

## Files
- `src/App.js`, `src/index.css`, `src/index.js`
