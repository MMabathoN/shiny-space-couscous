import React, { useState } from "react";

import WeatherSearch from "./WeatherSearch";
import LocationInput from "./LocationInput";
import ErrorHandling from "./ErrorHandling";
import LoadingIndicator from "./LoadingIndicator";
import Results from "./Results";
import ForecastItem from "./ForecastItem";
import UnitSelector from "./UnitSelector";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [unit, setUnit] = useState("metric");

  const handleSearch = async (city) => {
    try {
      setLoading(true);
      // Fetch weather data
      const response = await fetchWeather(city);
      setWeatherData(response);
      // Fetch forecast data
      const forecast = await fetchForecast(city);
      setForecastData(forecast.slice(0, 5)); // Limit to 5 days
      setLoading(false);
      setError(null);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleUnitChange = (selectedUnit) => {
    setUnit(selectedUnit);
    // You can perform additional actions here if needed
  };

  return (
    <div className="App">
      <Header />
      <main>
        <WeatherSearch onSearch={handleSearch} />
        {loading && <LoadingIndicator />}
        {error && <ErrorHandling message={error} />}
        {weatherData && <Results weatherData={weatherData} />}
        <UnitSelector unit={unit} onUnitChange={handleUnitChange} />
        <div id="forecast-container">
          {forecastData.map((day, index) => (
            <ForecastItem key={index} forecast={day} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
