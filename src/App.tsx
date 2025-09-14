import React, { useState } from 'react';
import './App.scss';

import type { Todo } from './types/Todo';
import todosFromServer from './api/todos';

import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

import { getUserById } from './functions/user';

function getNewTodoId(todos: Todo[]) {
  const maxTodoId = Math.max(...todos.map(todo => todo.id));

  return maxTodoId + 1;
}

const initialTodos: Todo[] = todosFromServer.map(todo => ({
  ...todo,
  user: getUserById(todo.userId),
}));

export const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const onAdd = (todoInfo: Todo) => {
    const newTodo = { ...todoInfo };

    newTodo.id = getNewTodoId(todos);

    setTodos((currentTodos: Todo[]) => [...currentTodos, newTodo]);
  };

  return (
    <div className="App">
      <h1>Add todo form</h1>
      <TodoForm onAdd={onAdd} />
      <TodoList todos={todos} />
    </div>
  );
};
