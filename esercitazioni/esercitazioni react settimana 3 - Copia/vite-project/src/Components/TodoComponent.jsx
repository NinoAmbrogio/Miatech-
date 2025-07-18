import React, { useRef, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams, Link } from 'react-router-dom';
import { fetchTodos, completeTodo } from '../Slices/todoSlice';

const TodoComponent = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') || '';

  
  const { todos: todoList = [], loading, error } = useSelector(
    (state) => state.todos || {}
  );

  
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  
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
    return Array.isArray(todoList)
      ? todoList.filter((todo) =>
          todo.title.toLowerCase().includes(search.toLowerCase())
        )
      : [];
  }, [todoList, search]);


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
      {filteredTodos.length === 0 ? (
        <p>Nessun risultato trovato.</p>
      ) : (
        <ul>
          {filteredTodos.map((todo) => (
            <li key={todo.id}>
              {todo.title} — {todo.completed ? 'completato' : 'non completato'}{' '}
              <Link to={`/todo/${todo.id}`}>Dettagli</Link>{' '}
              {!todo.completed && (
                <button
                  onClick={() => dispatch(completeTodo(todo.id))}
                  disabled={loading}
                >
                  Completa
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoComponent;