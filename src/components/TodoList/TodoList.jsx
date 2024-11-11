import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from '../TodoItem/TodoItem';

function TodoList() {
  const todos = useSelector((state) => {
    switch (state.todos.filter) {
      case 'completed':
        return state.todos.todos.filter((todo) => todo.completed);
      case 'incomplete':
        return state.todos.todos.filter((todo) => !todo.completed);
      default:
        return state.todos.todos;
    }
  });

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
