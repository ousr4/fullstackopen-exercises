import { useState, useEffect } from 'react' 
import axios from 'axios'
import Languages from './Languages'
import Weather from './Weather'

const api_key = import.meta.env.VITE_SOME_KEY
const Country = ({country}) => {
    const [weatherData, setWeatherData] = useState(null)
    const getWeatherData = (latlon) => {
        useEffect( () => {
            const lat = latlon[0]
            const lon = latlon[1]
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`)
            .then(response => {
                console.log(response.data)
                setWeatherData(response.data)
            })
            .catch(error => console.error(error))
        }, [latlon])
    }
    getWeatherData(country.capitalInfo.latlng)
    if (!weatherData) {
        console.log('No weather data')
        return null
    }
    return (
        <div>
            <h1>{country.name.common}</h1>
            <div>Capital: {country.capital}</div>
            <div>Area: {country.area}</div>
            <h2>Languages:</h2>
            <Languages languages={country.languages} />
            <img src={country.flags.png} alt={country.flags.alt}/>
            <Weather cityName={country.capital} weatherData={weatherData} />
        </div>
    )
}

export default Country
