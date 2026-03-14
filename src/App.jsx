import Header from './components/Header';
import Search from './components/Search';
import WeatherCard from './components/WeatherCard';
import { useState } from 'react';
// NO: import styles from './App.module.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError('');
    try {
       const apiKey = "b1b15e88fa797225412429c1c50c122a1";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();
      
      if (data.cod !== 200) {
        setError(data.message || 'City not found');
        return;
      }
      setWeatherData(data);
    } catch (err) {
      setError('Network error.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">  {/* Plain className="app" */}
      <Header />
      <Search onSearch={fetchWeather} loading={loading} error={error} />
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
}

export default App;
