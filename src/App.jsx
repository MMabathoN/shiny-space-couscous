import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import WeatherSearch from "./WeatherSearch";
import LocationInput from "./LocationInput";
import ErrorHandling from "./ErrorHandling";
import LoadingIndicator from "./LoadingIndicator";
import Results from "./Results";
import ForecastItem from "./ForecastItem";
import UnitSelector from "./UnitSelector";
import { Helmet } from 'react-helmet';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [unit, setUnit] = useState("metric");

  const handleSearch = async (city) => {
    try {
      setLoading(true);
      // Placeholder: Implement fetchWeather and fetchForecast functions
      const response = await fetchWeather(city);
      setWeatherData(response);
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
    // Placeholder: Additional actions if needed
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
        <LocationInput/>
        <div id="forecast-container">
          {forecastData.map((day, index) => (
            <ForecastItem key={index} forecast={day} />
          ))}
        </div>
      </main>
      <Footer />
      <a href="https://www.github.com/MMabathoN/shiny-space-couscous/tree/codespace-shiny-space-couscous-5gvv774wqxjq2v4qv">GitHub Repo</a>
    </div>
  );
}

export default App;
