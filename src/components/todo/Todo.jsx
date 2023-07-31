import React from 'react';

export const Todo = ({ todos, onDeleteTodo, ontoggleCompleted }) => {
  return <ul>
    {todos.map(({ id, text, completed}) => (
      <li key={id}>
        <input type="checkbox" checked={completed} onChange={()=>ontoggleCompleted(id)}/>
        <p>{text}</p>
        <button type="button" onClick={()=>onDeleteTodo(id)}>delete</button>
      </li>
    ))}
  </ul>;
};

 