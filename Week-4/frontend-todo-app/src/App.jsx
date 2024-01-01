import "./App.css";
import { useState } from "react";

// var todos = [
//   {
//     title: "go to the gym",
//     description: "go to gym at 11am",
//     id: 1,
//   },
//   {
//     title: "go eat food",
//     description: "go to eat food at 12pm",
//     id: 2,
//   },
// ];

// let todo = {
//   title: "go to the gym",
//   description: "go to gym at 11am",
//   id: 1,
// };

// setInterval(() => {
//   todo.title = "skjbivdf";
// }, 1000);

function App() {
  const [todo, tryTodo] = useState({
    title: "go to the gym",
    description: "go to gym at 11am",
    id: 1,
  });

  setInterval(() => {
    tryTodo({
      title: "skjbivdf",
      description: "go to gym at 11am",
      id: 1,
    });
  }, 2000);

  return (
    <>
      <h5>Hello World!</h5>
      {todo.title}
      {todo.description}
      {todo.id}
      <br />
      <PersonName name={todo.title} />
    </>
  );
}

function PersonName(props) {
  return <>My name is {props.name}</>;
}

export default App;
