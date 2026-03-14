import React from 'react';
import styles from './WeatherCard.module.css';

const WeatherCard = ({ data }) => {
  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  const temp = Math.round(data.main.temp);

  return (
    <div className={styles.card}>
      <div className={styles.main}>
        <img src={iconUrl} alt={data.weather[0].description} className={styles.icon} />
        <div>
          <p className={styles.temp}>{temp}°C</p>
          <p className={styles.desc}>{data.weather[0].description}</p>
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.detail}>
          <span>Humidity</span>
          <span>{data.main.humidity}%</span>
        </div>
        <div className={styles.detail}>
          <span>Wind</span>
          <span>{data.wind.speed} m/s</span>
        </div>
        <div className={styles.detail}>
          <span>Feels like</span>
          <span>{Math.round(data.main.feels_like)}°C</span>
        </div>
      </div>
      <div className={styles.location}>
        {data.name}, {data.sys.country}
      </div>
    </div>
  );
};

export default WeatherCard;
