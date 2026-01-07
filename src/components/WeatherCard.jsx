const WeatherCard = ({ weather }) => {
    return (
        <div className="mt-6 bg-white shadow-lg rounded-xl p-6 text-center">
            <h2 className="text-2xl font-semibold">{weather.name}</h2>
            <p className="text-4xl font-bold mt-2">{weather.main.temp}°C</p>
            <p className="capitalize text-gray-600">
                {weather.weather[0].description}
            </p>

            <div className="flex justify-between mt-4 text-sm text-gray-700">
                <p>💧 Humidity: {weather.main.humidity}%</p>
                <p>🌬 Wind: {weather.wind.speed} m/s</p>
            </div>
        </div>
    );
};

export default WeatherCard;
