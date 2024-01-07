import "./App.css";
import React from "react";

function useTodos() {
  const [todo, setTodos] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3000/todos", {
      method: "GET",
    }).then((response) => {
      response.json().then((data) => {
        console.log(data);
        setTodos(data);
      });
    });

    setInterval(() => {
      fetch("http://localhost:3000/todos", {
        method: "GET",
      }).then((response) => {
        response.json().then((data) => {
          console.log(data);
          setTodos(data);
        });
      });
    }, 1000);
  }, []);

  return todo;
}

function App() {
  const todos = useTodos();

  return (
    <>
      {todos.map((todos) => {
        return (
          <>
            {todos.title}
            <br />
            {todos.description}
            <br />
            <br />
          </>
        );
      })}
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
