const Person = ({person}) => <div>{person.name} {person.number}</div>

const Persons = ({persons}) => {
    return (
        <>
            {persons.map(person => <Person key={person.id} person={person} />)}
        </>
    )
}

export default Persons
