const Course = ({course}) => {
    return (
        <div>
            <Header name={course.name} />
            <Content course={course} />
            <Total sumOfExercises={course.parts.reduce((sum, current) => sum + current.exercises, 0)} />
        </div>
    )
}

const Header = ({name}) => {
    return <h1>{name}</h1>
}

const Total = ({sumOfExercises}) => {
    return <p><b>Number of exercises {sumOfExercises}</b></p>
}

const Part = ({name, exercises}) => {
    return (
        <p>
            {name} {exercises}
        </p>
    )
}

const Content = ({course}) => {
    return (
        <>
            {course.parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)}
        </>
    )
}

export default Course
