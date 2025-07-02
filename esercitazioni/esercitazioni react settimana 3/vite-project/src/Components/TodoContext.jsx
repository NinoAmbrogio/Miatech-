import React, { createContext, useState, useEffect } from 'react';
import useFetch from './useFetch';

export const TodoContext = createContext();

export const TodoProvider = ({ url, children }) => {
  const { data, loading, error } = useFetch(url);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (data) {
      setTodos(data);
    }
  }, [data]);

  return (
    <TodoContext.Provider value={{ todos, setTodos, loading, error }}>
      {children}
    </TodoContext.Provider>
  );
};