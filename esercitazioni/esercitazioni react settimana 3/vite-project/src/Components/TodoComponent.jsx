import React, { useState, useCallback , useMemo } from 'react';
import useFetch from './useFetch';
import useFilteredTodos from './UseFilteredTodos'; 

const TodoComponent = ({ url }) => {
  const { data, loading, error } = useFetch(url);
  const [search, setSearch] = useState('');

   const handleSearchChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  

   const filteredTodos = useMemo(() => {
    const todos = data || [];
    return todos.filter(todo =>
      todo.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [data, search]);

  if (loading) return <p>Caricamento...</p>;
  if (error) return <p>Errore: {error}</p>;

  return (
    <div>
      <h2>Lista TODO</h2>

      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Cerca per titolo..."
      />

      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}>
            {todo.title} — {todo.completed ? 'completato' : ' non completato'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoComponent;