import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { useState } from "react";
import ReactDOM from 'react-dom';
import { CardChecklist, Trash } from 'react-bootstrap-icons';
import Container from "react-bootstrap/Container";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";


function fetchTodos() {
  return [
    {
      id: 1,
      title: "eat dinner",
      completed: false,
    },
    {
      id: 2,
      title: "brush teeth",
      completed: false,
    },
    {
      id: 3,
      title: "drink water",
      completed: true,
    },
    {
      id: 4,
      title: "take bath",
      completed: true,
    },
    {
      id: 5,
      title: "sleep",
      completed: false,
    },
  ];
}

function TodoItem(props) {
  return (
    <InputGroup key={props.id}>
      <InputGroup.Checkbox
        checked={props.completed}
        onChange={props.onToggle}
      />
      <FormControl
        value={props.title}
        style={{
          textDecoration: props.completed ? "line-through 4px" : "none",
        }}
      />
      <Button variant="outline-danger" onClick={props.onDelete}>
        <Trash />
      </Button>
    </InputGroup>
  )
}

function App() {
  const [todos, setTodos] = useState(fetchTodos());
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <CardChecklist />Todo List
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Container>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            title={todo.title}
            completed={todo.completed}
            onDelete={() => {
              setTodos(todos.filter((x) => x.id !== todo.id));
            }}
            onToggle={() => {
              setTodos(
                todos.map((x) =>
                  x.id === todo.id ? { ...x, completed: !x.completed } : x
                )
              );
            }}
          />
        ))}
      </Container>
    </>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);

