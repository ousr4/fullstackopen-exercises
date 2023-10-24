import { useState } from 'react'

const Title = ({text}) => <h1>{text}</h1>
const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]

    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState(new Uint8Array(anecdotes.length))
    const generateRandomNum = (max) => Math.floor(Math.random() * max)
    const addPoint = () => {
        const copy = [...points]
        copy[selected] += 1
        setPoints(copy)
    }
    const indexOfMaxValue = points.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
    return (
        <div>
            <Title text='Anecdocte of  the day'/> 
            {anecdotes[selected]}
            <div>has {points[selected]} votes</div>
            <div>
                <Button handleClick={addPoint} text='Vote' />
                <Button handleClick={() => setSelected(generateRandomNum(anecdotes.length))} text='Next anecdocte' />
            </div>
            <Title text='Anecdocte with the most votes'/> 
            {anecdotes[indexOfMaxValue]}
            <div>has {points[indexOfMaxValue]} votes</div>
        </div>
    )
}

export default App
