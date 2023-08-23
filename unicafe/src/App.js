import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  

  return (
    <div>
      <Header text="Give Feedback" />
      <Button handleClick={handleGood} text="Good" />
      <Button handleClick={handleNeutral} text="Neutral" />
      <Button handleClick={handleBad} text="Bad" />
      <Header text="Statistics" />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

const Header = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td> 
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const { good, bad, neutral } = props;
  const total = good + bad + neutral;

  if (total === 0) {
    return (
      <table>
        <tbody>
          <tr>
            <td>No feedback given</td>
          </tr>
        </tbody>
      </table>
      
      
    )
  }

  return (
    <table>
      <tbody>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text="All" value={total} />
        <StatisticLine text="Average" value={(good - bad) / total} />
        <StatisticLine text="Positive" value={String(good/total*100) + " %"} />
      </tbody>
    </table>
  )
}

export default App