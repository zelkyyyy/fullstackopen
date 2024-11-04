/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

const Header = (props) => {
  console.log(props)
  return (
      <h1>{props.course}</h1>
  );
}

const Part = (props) => {
  let part=props.parts
  let exercises = props.ex
  return (
      <p>{part}{exercises}</p>
  );
}
const Content = (props) => {
  return (
    <div>
      <Part part={props.parts} />
    </div>
  );
}

const Total = (props) => {
  return (
      <p>{props.exercises}</p>
  );
}


const App = () => {

  const course = {
    name: 'Half Stack application development',
    part: [
      {
        text: 'Fundamentals of React',
        exercises: 10
      },
      {
        text: 'Using props to pass data',
        exercises: 7
      },
      {
        text: 'State of a component',
        exercises: 14
      }
    ],
    ex: function() {
      let sum = 0;
      sum+=this.part[this.exercises]
      return sum
    }
  }
  console.log(course.part)
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.part.text}/>
      <Total exercises={course.ex} />
    </div>
  )
}

export default App