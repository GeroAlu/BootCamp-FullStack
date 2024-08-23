import React from 'react'

const Header = ({course}) => {
  return <h1>{course}</h1>
}

const Content = (props) => {
  return <div>  
  <p style={{ display: 'inline' }}>{props.parts}</p>
  <p style={{ display: 'inline' }}>{props.exercises}</p>
  </div>
}

const Total = (props) => {
  return (props.exercises1 + props.exercises2 + props.exercises3)
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React '
  const exercises1 = 10
  const part2 = 'Using props to pass data '
  const exercises2 = 7
  const part3 = 'State of a component '
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content parts={part1} exercises={exercises1}/>
      <br/>
      <Content parts={part2} exercises={exercises2}/>
      <br/>
      <Content parts={part3} exercises={exercises3}/>
      <br/>
      <p style={{ display: 'inline' }}>Number of exercises</p> <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

export default App
