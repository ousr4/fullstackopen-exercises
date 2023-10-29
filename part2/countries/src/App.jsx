import { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'


function App() {
    const [countries, setCountries] = useState(null)
    const [countryName, setCountryName] = useState('')
    const hook = () => {
        axios
            .get('https://studies.cs.helsinki.fi/restcountries/api/all')
            .then(response => {
                setCountries(response.data)
            })
            .catch(error => {
                console.error(error)
            })
    }
    useEffect(hook, [])

    if (!countries) {
        return null
    }
    
    const countriesToShow = countries.filter((country) => {
        return (
            country.name.common.toLowerCase().includes(countryName.toLowerCase()) ||
            country.name.official.toLowerCase().includes(countryName.toLowerCase())
        )
    })
    return (
        <div>
            <form>
                <div>
                    Find countries <input value={countryName} onChange={ e => setCountryName(e.target.value)} />
                </div>
            </form>
            <div>
                <Countries countries={countriesToShow} setCountryName={setCountryName}/>
            </div>
        </div>
    )
}

export default App
