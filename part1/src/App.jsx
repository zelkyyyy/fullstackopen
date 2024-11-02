const Header = (props) => {
  console.log(props)
  return (
      <h1>{props.course}</h1>
  );
}

const Part = (props) => {
  return (
      <p>{props.part.name}{props.part.exercises}</p>
  );
}
const Content = (props) => {
  return (
    <div>
      <Part part={props.parts} exercise={props.parts}/>
      <Part part={props.parts} exercise={props.parts}/>
      <Part part={props.parts} exercise={props.parts}/>
    </div>
  );
}

const Total = (props) => {
  return (
      <p>{}</p>
  );
}


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
      <Content parts={course.parts} />
      <Total total={course.parts} />
    </div>
  )
}

export default App