import React from 'react';
import { TodoProvider } from './Components/TodoContext';
import TodoComponent from './Components/TodoComponent';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

function App() {
  return (
    <TodoProvider url={API_URL}>
      <TodoComponent />
    </TodoProvider>
  );
}

export default App;