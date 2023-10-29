import axios from 'axios'
import Country from "./Country"

const getOne = ({countryName}) => {
    axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${countryName}`)
        .then(response => {
        })
        .catch(error => {
            console.log(error)
        })
}
const Countries = ({countries, setCountryName}) => {
    if (countries.length > 10) {
        return(
            <div>
                Too many matches, specify another filter
            </div>
        )
    } else if (countries.length === 1) {
        return <Country country={countries[0]} />
    }   else {
        return (
            countries.map(country => {
                return (
                    <div key={country.name.common}>
                        {country.name.common} <button onClick={() => setCountryName(country.name.common)}>show</button>
                    </div>
                )
            })
        )
    }
}

export default  Countries
