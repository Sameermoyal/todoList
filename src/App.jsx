import React from 'react';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';
import Filter from './components/Filter/Filter';
import "./App.css"

function App() {
  return (
    <div>
      <h1>To-Do List</h1>
      <TodoInput />
      <Filter />
      <TodoList />
    </div>
  );
}

export default App;
