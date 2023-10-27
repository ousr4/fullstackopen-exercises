import personService from '../services/person'

const PersonForm = ({persons, setPersons, newName, setNewName, newNumber, setNewNumber}) => {
    const addPerson = (e) => {
        e.preventDefault()
        const personObj = {
            name: newName,
            number: newNumber,
        }
        const person = persons.find(person => person.name === newName)
        if (person) {
            if (confirm(`${person.name} is already added to phonebook, repalce the old number with a new one?`)) {
                personService
                    .update(person.id, personObj)
                    .then(returnedObj => {
                        setPersons(persons.map(p => p.id !== person.id ? p : returnedObj))
                        setNewName('')
                        setNewNumber('')
                    })
            }
        } else {
            personService
                .create(personObj)
                .then(returnedObj => {
                    setPersons(persons.concat(returnedObj))
                    setNewName('')
                    setNewNumber('')
                })
        }
    }
    return (
        <form onSubmit={addPerson}>
            <div>
                name: <input value={newName} onChange={ e => setNewName(e.target.value)} />
            </div>
            <div>
                number: <input value={newNumber} onChange={ e => setNewNumber(e.target.value)} />
            </div>
            <div>
                <button type="submit" >add</button>
            </div>
        </form>
    )
}

export default PersonForm
