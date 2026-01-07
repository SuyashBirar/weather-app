const SearchBar = ({ city, setCity, getWeather }) => {
    return (
        <div className="flex gap-2">
            <input
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="px-4 py-2 w-full rounded-lg border outline-none"
            />
            <button
                onClick={getWeather}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;
