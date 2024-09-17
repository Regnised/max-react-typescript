import React, { useRef, useEffect } from "react";

import './NewTodo.css';

type NewTodoProps = {
  onAddTodo: (text: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = props => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandle = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = textInputRef.current!.value;
    console.log(enteredText)
    props.onAddTodo(enteredText);
  }

  return <form onSubmit={todoSubmitHandle}>
    <div className="form-control">
      <label htmlFor="todo-text">Todo text</label>
      <input type="text" id="todo-text" ref={textInputRef} />
    </div>
    <button type="submit">Add todo</button>
  </form>
};

export default NewTodo;