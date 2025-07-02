import React, { useState, useCallback , useMemo, useRef, useEffect , useContext } from 'react';
import useFetch from './useFetch';
import useFilteredTodos from './UseFilteredTodos'; 
import { TodoContext } from './TodoContext';


const TodoComponent = () => {
  const { todos, loading, error } = useContext(TodoContext);
  const [search, setSearch] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (!loading && inputRef.current) {
      inputRef.current.focus();
    }
  }, [loading]);

  const handleSearchChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

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
            {todo.title} — {todo.completed ? 'completato' : 'non completato'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoComponent;