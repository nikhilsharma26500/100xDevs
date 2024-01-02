import "./App.css";
import React from "react";

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
  const [todo, setTodos] = React.useState(
    {
      title: "go to the gym",
      description: "go to gym at 11 am",
      id: 1,
    },
    {
      title: "go to the class",
      description: "go to class at 1 pm",
      id: 1,
    }
  );

  React.useEffect(() => {
    fetch("http://localhost:3000/todos", {
      method: "GET",
    }).then((response) => {
      response.json().then((data) => {
        console.log(data);
      });
    });
  }, []);

  return (
    <>
      {todo.title}
      <br />
      {todo.description}
      {/* {JSON.stringify(todo)} */}
    </>
  );
}

function Todo(props) {
  return (
    <>
      {props.title}
      <br />
      {props.description}
      <br />
    </>
  );
}

export default App;
