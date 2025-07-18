import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const TodoDetails = () => {
  const { id } = useParams();

  const { todos = [], loading, error } = useSelector((state) => state.todos || {});

  if (loading) return <p>Caricamento in corso...</p>;
  if (error) return <p>Errore: {error}</p>;

  const todo = todos.find((t) => String(t.id) === id);

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