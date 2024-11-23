import React, { useState, useEffect } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { FaTrash } from "react-icons/fa";
import * as client from "./client";

export default function WorkingWithArraysAsynchronously() {
  const [todos, setTodos] = useState<any[]>([]);
  const [todo, setTodo] = useState<any>({ title: "", completed: false });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const data = await client.fetchTodos();
      setTodos(data);
    } catch (error: any) {
      console.error(error);
      setErrorMessage("Unable to fetch todos.");
    }
  };

  const createTodo = async () => {
    try {
      const newTodo = await client.createTodo(todo);
      setTodos([...todos, newTodo]);
      setTodo({ title: "", completed: false });
    } catch (error: any) {
      console.error(error);
      setErrorMessage(error.response?.data?.message || "Error creating todo.");
    }
  };

  const updateTodo = async (todo: any) => {
    try {
      const updatedTodo = await client.updateTodo(todo);
      setTodos(todos.map((t) => (t.id === updatedTodo.id ? updatedTodo : t)));
    } catch (error: any) {
      console.error(error);
      setErrorMessage(error.response?.data?.message || "Error updating todo.");
    }
  };

  const deleteTodo = async (todo: any) => {
    try {
      await client.deleteTodo(todo.id);
      setTodos(todos.filter((t) => t.id !== todo.id));
    } catch (error: any) {
      console.error(error);
      setErrorMessage(error.response?.data?.message || "Error deleting todo.");
    }
  };

  return (
    <div id="wd-asynchronous-arrays">
      <h3>Working with Arrays Asynchronously</h3>

      {errorMessage && (
        <div
          id="wd-todo-error-message"
          className="alert alert-danger mb-2 mt-2"
        >
          {errorMessage}
        </div>
      )}

      {/* List of Todos */}
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={(e) =>
                updateTodo({ ...todo, completed: e.target.checked })
              }
            />
            {todo.title}
            <FaPencilAlt
              className="ms-2 text-primary"
              onClick={() => setTodo(todo)}
            />
            <FaTrash
              className="ms-2 text-danger"
              onClick={() => deleteTodo(todo)}
            />
          </li>
        ))}
      </ul>

      {/* Form to Add/Update Todos */}
      <div>
        <input
          className="form-control mt-2"
          placeholder="Todo Title"
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        />
        <button className="btn btn-primary mt-2" onClick={createTodo}>
          <FaPlusCircle className="me-2" />
          Add Todo
        </button>
      </div>
    </div>
  );
}