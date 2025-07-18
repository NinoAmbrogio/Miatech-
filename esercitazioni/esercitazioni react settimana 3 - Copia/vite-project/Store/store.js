import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../src/Slices/todoSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store