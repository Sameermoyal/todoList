// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todosSlice/todosSlice';

export default configureStore({
  reducer: {
    todos: todosReducer,
  },
});
