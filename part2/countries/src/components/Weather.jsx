const Weather = ({cityName, weatherData}) => {
    return (
        <div>
            <h3>{`Weather in ${cityName}`}</h3>
            <div>{`Temperature: ${weatherData.main.temp} Celcius`}</div>
            <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} />
            <div>{`Wind: ${weatherData.wind.speed} m/s`}</div>
        </div>
    )
}

export default Weather
