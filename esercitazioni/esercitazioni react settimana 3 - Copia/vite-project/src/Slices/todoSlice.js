import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
  return response.data;
});


export const completeTodoAsync = createAsyncThunk(
  'todos/completeTodoAsync',
  async (todoId) => {
    const response = await axios.patch(`/api/todos/${todoId}`, {
      completed: true,
    });
    return response.data; 
  }
);

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    loading: false,
    error: null,
  },
  reducers: {
    toggleTodo(state, action) {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    
    completeTodo(state, action) {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = true;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
    
      .addCase(completeTodoAsync.fulfilled, (state, action) => {
        const updated = action.payload;
        const todo = state.todos.find((t) => t.id === updated.id);
        if (todo) {
          todo.completed = updated.completed;
        }
      });
  },
});


export const { toggleTodo, addTodo, completeTodo } = todoSlice.actions;

export default todoSlice.reducer;