import { useState } from 'react'
const Title = ({text}) => <h1>{text}</h1>
const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>
const StatisticLine = ({text, value}) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}
const Statistic = ({good, neutral, bad}) => {
    const all = good + neutral + bad
    if (all === 0) {
        return <div>No feedback given</div>
    } else {
        const average = (good - bad) / all
        const positive = `${(good / all) * 100}%`
        return (
            <table>
                <tbody>
                    <StatisticLine text='good' value={good}/>
                    <StatisticLine text='neutral' value={neutral}/>
                    <StatisticLine text='bad' value={bad}/>
                    <StatisticLine text='all' value={all}/>
                    <StatisticLine text='average' value={average}/>
                    <StatisticLine text='positive' value={positive}/>
                    <StatisticLine text='good' value={good}/>
                </tbody>
            </table>
        )
    }
}
const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    return (
        <div>
            <Title text='Give feedback'/> 
            <Button handleClick={() => setGood(good+1)} text='good' />
            <Button handleClick={() => setNeutral(neutral+1)} text='netural' />
            <Button handleClick={() => setBad(bad+1)} text='bad' />
            <Title text='Statistics'/> 
            <Statistic good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}

export default App
