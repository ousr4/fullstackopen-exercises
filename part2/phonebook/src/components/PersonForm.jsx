const PersonForm = ({persons, setPersons, newName, setNewName, newNumber, setNewNumber}) => {
    const addPerson = (e) => {
        e.preventDefault()
        const personObj = {
            name: newName,
            number: newNumber,
            id: persons.length + 1
        }
        if (persons.some(person => person.name === newName)) {
            alert(`${newName} is already added to phonebook`)
        } else {
            setPersons(persons.concat(personObj))
            setNewName('')
            setNewNumber('')
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
