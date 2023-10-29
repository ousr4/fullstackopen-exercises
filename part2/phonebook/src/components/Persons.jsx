import personService from '../services/person'
const Person = ({person, removePerson}) => {
    return (
        <div>
            {person.name} {person.number} <button onClick={removePerson}>delete</button>
        </div>
    )
}

const Persons = ({persons, setPersons, setMessage}) => {
    const removePerson = (id) => {
        const person = persons.find(p => p.id === id)
        if(confirm(`Delete ${person.name}`)) {
            personService
                .remove(id)
                .then(() => {
                    setPersons(persons.filter(p => p.id !== id))
                })
                .catch(error => {
                    setMessage({text: `Information of ${person.name} has already been removed from server`, type: 'error'})
                    setTimeout(() => {
                        setMessage(null)
                    }, 2000)
                })
        }
    }
    return (
        <>
            {persons.map(person => <Person key={person.id} person={person} removePerson={() => removePerson(person.id)}/>)}
        </>
    )
}

export default Persons
