import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { TodoContext } from '../Components/TodoContext';

const TodoDetails = () => {
  const { id } = useParams();
  const { todos } = useContext(TodoContext);

 if (!todos || todos.length === 0) {
  console.log("Controllo - Todos è vuoto:", todos);
  return <p>Caricamento in corso...</p>;
}

const todo = todos.find((t) => t.id.toString() === id);

if (!todo) {
  return <p>To-do non trovato</p>;
}

  return (
    <div>
      <h1>Dettagli To-Do</h1>
      <h2>{todo.title}</h2>
      <p>ID: {todo.id}</p>
      <p>Completato: {todo.completed ? 'Sì' : 'No'}</p>
    </div>
  );
};

export default TodoDetails;