import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Notification from './components/Notification'
import personService from './services/person'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')
    const [message, setMessage] = useState(null)

    const hook = () => {
        personService.getAll()
            .then(initialPersons => {
                setPersons(initialPersons)
            })
    }
    useEffect(hook, [])

    //Currently case sensitive can be improved
    const personsToShow = persons.filter(person => person.name.includes(filter))

    return (
        <div>
            <h2>Phonebook</h2>
            <Notification message={message} />
            <Filter filter={filter} setFilter={setFilter} />
            <h3>Add a new</h3>
            <PersonForm 
                persons={persons} setPersons={setPersons} 
                newName={newName} setNewName={setNewName}
                newNumber={newNumber} setNewNumber={setNewNumber}
                setMessage={setMessage}
            />
            <h3>Numbers</h3>
            <Persons persons={personsToShow} setPersons={setPersons} setMessage={setMessage}/>
        </div>
    )
}

export default App
