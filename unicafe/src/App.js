import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  const total = good + bad + neutral;

  return (
    <div>
      <Header text="Give Feedback" />
      <Button handleClick={handleGood} text="Good" />
      <Button handleClick={handleNeutral} text="Neutral" />
      <Button handleClick={handleBad} text="Bad" />
      <Header text="Statistics" />
      <Count text="Good" value={good} />
      <Count text="Neutral" value={neutral} />
      <Count text="Bad" value={bad} />
      <Count text="All" value={total} />
      <Count text="Average" value={(good - bad) / total} />
      <Count text="Positive" value={String(good/total*100) + "%"} />
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

const Count = (props) => {
  return (
    <p>{props.text} {props.value}</p>
  )
}

export default App