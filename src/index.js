import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return <p>{props.part}: {props.exercises}</p>
}

const Content = (props) => {
  return <div>
      <Part part={props.data.part1} exercises={props.data.exercises1} />
      <Part part={props.data.part2} exercises={props.data.exercises2} />
      <Part part={props.data.part3} exercises={props.data.exercises3} />
  </div>
}

const Total = (props) => {
  return <p>Number of exercises: {props.total}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const total = exercises1 + exercises2 + exercises3

  const data = {
    part1: part1,
    exercises1: exercises1,
    part2: part2,
    exercises2: exercises2,
    part3: part3,
    exercises3: exercises3
  };

  return (
    <div>
      <Header course={course}/>
      <Content data={data} />
      <Total total={total}/>
    </div>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);