import React, { useState, useCallback , useMemo, useRef, useEffect , useContext } from 'react';
import useFetch from './useFetch';
import useFilteredTodos from './UseFilteredTodos'; 
import { TodoContext } from './TodoContext';
import { useSearchParams, Link } from 'react-router-dom';




const TodoComponent = () => {
  const { todos, loading, error } = useContext(TodoContext);
  const inputRef = useRef(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') || ''; 

  useEffect(() => {
    if (!loading && inputRef.current) {
      inputRef.current.focus();
    }
  }, [loading]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchParams(value ? { search: value } : {}); 
  };

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) =>
      todo.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [todos, search]);

  if (loading) return <p>Caricamento...</p>;
  if (error) return <p>Errore: {error}</p>;

  return (
    <div>
      <h2>Lista TODO</h2>
      <input
        ref={inputRef}
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Cerca per titolo..."
      />
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            {todo.title} — {todo.completed ? 'completato' : 'non completato'}{' '}
            <Link to={`/todo/${todo.id}`}>Dettagli</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoComponent;