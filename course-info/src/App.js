const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content name1={course.parts[0].name} name2={course.parts[1].name} name3={course.parts[2].name} exercise1={course.parts[0].exercises} exercise2={course.parts[1].exercises} exercise3={course.parts[2].exercises} />
      <Total exercise1={course.parts[0].exercises} exercise2={course.parts[1].exercises} exercise3={course.parts[2].exercises} />
    </div>
  )
}

const Header = (props) => {
  console.log(props);
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.part} {props.exercise}</p>
  )
}

const Content = (props) => {
  console.log(props);
  // const parts = props.parts;
  return (
    <div>
      <Part part={props.name1} exercise={props.exercise1} />
      <Part part={props.name2} exercise={props.exercise2} />
      <Part part={props.name3} exercise={props.exercise3} />
    </div>
  )
}

const Total = (props) => {
  console.log(props);
  return (
    <p>Number of exercises {props.exercise1 + props.exercise2 + props.exercise3}</p>
  )
}

export default App