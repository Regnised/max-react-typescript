import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo'

import Todo from './todo.model'

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAppHandler = (text: string) => {
    setTodos(prevTodos =>
      [...prevTodos,
      {
        id: Math.random().toString(),
        text
      }]
    );
  }

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId)
    })
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAppHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  )
}

export default App;
