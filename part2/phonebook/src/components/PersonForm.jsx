import personService from '../services/person'

const PersonForm = ({persons, setPersons, newName, setNewName, newNumber, setNewNumber, setMessage}) => {
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
                        setMessage({text: `Updated ${person.name}'s number`, type: 'info'})
                        setTimeout(() => {
                            setMessage(null)
                        }, 2000)
                    })
            }
        } else {
            personService
                .create(personObj)
                .then(returnedObj => {
                    setPersons(persons.concat(returnedObj))
                    setNewName('')
                    setNewNumber('')
                    setMessage({text: `Added ${returnedObj.name}`, type: 'info'})
                    setTimeout(() => {
                        setMessage(null)
                    }, 2000)
                })
        }
    }
    return (
        <form onSubmit={addPerson} className='personForm'>
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
