import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../api/config';


const Home = () => {
  const [weather, setWeather] = useState({});
  const [currentDate] = useState(new Date());

  const getWeather = async () => {
    await fetch(BASE_URL)
      .then((a) => a.json())
      .then((data) => setWeather(data));
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div style={{ background: "#81BCFF" }}>
      <div className="title" style={{ fontSize: "30px", fontWeight: "bold", color: "white", padding: "20px" }}>
        Home
      </div>
      <h2 style={{ marginRight: "20px", textAlign: "right", color:"white" }}>
        Today : {currentDate.toLocaleDateString()}
      </h2>
      <div className="center" style={{ textAlign: "center" }}>
        {weather.current && <img style={{ width: "100px" }} src={weather.current.condition.icon} alt="" />}
        {weather.current && <p style={{ fontSize: "40px", fontWeight: "bolder", color: "white", padding: "20px" }}>{weather.current.temp_c}°C</p>}
      </div>
    </div>
  )
}

export default Home