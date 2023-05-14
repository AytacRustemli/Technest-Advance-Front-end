import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../api/config";
import { CircularProgress, Grid } from "@mui/material";


const Weather = () => {
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}&days=1&aqi=no&alerts=no`)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data.forecast.forecastday[0].hour);
        
      })
      .catch((error) => {
        console.error("Error fetching weather data: ", error);
      })
      .finally(() =>{
        setLoading(false);
      })
  }, []);

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <div style={{ backgroundColor: "#59BCFF" }}>
          <Grid container spacing={3}>
            {weatherData.map((hour) => (
              <Grid item xs={12} md={4} lg={3} key={hour.time_epoch}>
                <h3 style={{ marginLeft: "20px" }}>{hour.time.slice(-5)}</h3>
                <img style={{ marginLeft: "20px" }} src={`https:${hour.condition.icon}`} alt="weather icon" />
                <p style={{ marginLeft: "20px" }}>{hour.condition.text}</p>
                <p style={{ marginLeft: "20px" }}>Temperature: {hour.temp_c}°C</p>
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </>
  );
};

export default Weather;
