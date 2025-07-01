import TodoComponent from './Components/TodoComponent';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

function App() {
  return <TodoComponent url={API_URL} />;
}

export default App;