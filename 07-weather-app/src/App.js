import { useState, useEffect, useRef } from 'react';

const weatherCodeMap = {
  0: 'Clear sky',
  1: 'Mainly clear',
  2: 'Partly cloudy',
  3: 'Overcast',
  45: 'Fog',
  48: 'Depositing rime fog',
  51: 'Light drizzle',
  61: 'Slight rain',
  63: 'Moderate rain',
  65: 'Heavy rain',
  71: 'Slight snow',
  80: 'Rain showers',
  95: 'Thunderstorm',
};

function describeCode(code) {
  return weatherCodeMap[code] || 'Unknown conditions';
}

function App() {
  const [city, setCity] = useState('Karachi');
  const [weather, setWeather] = useState(null);
  const [status, setStatus] = useState('idle');
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  const inputRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }

  async function fetchWeather(query) {
    setStatus('loading');
    try {
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=1`
      );
      const geoData = await geoRes.json();
      const place = geoData.results && geoData.results[0];
      if (!place) {
        setStatus('error');
        setWeather(null);
        return;
      }

      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${place.latitude}&longitude=${place.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`
      );
      const weatherData = await weatherRes.json();

      setWeather({
        placeName: `${place.name}${place.country ? ', ' + place.country : ''}`,
        temp: weatherData.current.temperature_2m,
        humidity: weatherData.current.relative_humidity_2m,
        wind: weatherData.current.wind_speed_10m,
        code: weatherData.current.weather_code,
      });
      setStatus('ready');
    } catch (err) {
      setStatus('error');
    }
  }

  useEffect(() => {
    fetchWeather(city);
    inputRef.current?.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (city.trim() === '') return;
    fetchWeather(city.trim());
  }

  return (
    <div className="wrap">
      <div className="header-row">
        <h1>Weather App</h1>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? 'Dark' : 'Light'}
        </button>
      </div>

      <form className="search-row" onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search a city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {status === 'loading' && <p className="status">Fetching live weather…</p>}
      {status === 'error' && <p className="status">City not found or request failed. Try again.</p>}

      {status === 'ready' && weather && (
        <div className="weather-card">
          <div className="place">{weather.placeName}</div>
          <div className="temp">{Math.round(weather.temp)}°C</div>
          <div className="desc">{describeCode(weather.code)}</div>
          <div className="weather-meta">
            <span>Humidity: {weather.humidity}%</span>
            <span>Wind: {weather.wind} km/h</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
