import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import { fetchWeather } from "./services/weatherApi";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const getWeather = async () => {
    if (!city) {
      setError("Please enter a city name");
      return;
    }

    const data = await fetchWeather(city);

    if (data.cod !== 200) {
      setError("City not found");
      setWeather(null);
    } else {
      setWeather(data);
      setError("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center px-4">
      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">
          🌦 Weather App
        </h1>

        <SearchBar
          city={city}
          setCity={setCity}
          getWeather={getWeather}
        />

        {error && (
          <p className="text-red-500 text-center mt-4">{error}</p>
        )}

        {weather && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
};

export default App;
