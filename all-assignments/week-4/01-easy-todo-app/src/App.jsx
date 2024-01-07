import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [todos, setTodos] = React.useState([]);
  // fetch all todos from server

  React.useEffect(() => {
    fetch("http://localhost:5173/todos", { method: "GET" }).then((response) => {
      response.json.then((data) => {
        setTodos(data);
      });
    });
  }, []);

  return (
    <>
      <div>
        <h1>Easy Todo App</h1>
        <input type="text" />
        <button>Create TODO</button>
      </div>
      <button>Delete TODO</button>
    </>
  );
}

function Todo(props) {
  // Add a delete button here so user can delete a TODO.
  return <div>{props.title}</div>;
}

export default App;
