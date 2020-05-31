import React, { useState } from 'react';
import Form from '../form/form.component'

export default () => {
    const [todos, setTodos] = useState([]);
    const [addNew, setAddNew] = useState(false);

    let newDate = new Date()


    const toggleComplete = i =>
      setTodos(
        todos.map(
          (todo, k) =>
            k === i
              ? {
                  ...todo,
                  complete: !todo.complete
                }
              : todo
        )
      );
    
    

    return (
      <div>
        <h1>{`${newDate.toLocaleString('default', { month: 'long' })} ${newDate.getDate()}, ${newDate.getFullYear()}`}</h1>
        <button onClick={() => setAddNew(!addNew)}>Add Task</button>
        <div>
          {todos.map(({ text, complete }, i) => (
            <div>
                <div
                key={text}
                onClick={() => toggleComplete(i)}
                style={{
                    textDecoration: complete ? "line-through" : ""
                }}
                >
                {text}
                </div>
                <button onClick={() =>
                    setTodos(todos.filter( item => item.text !== text))}
                >
                    x
                </button>
            </div>
          ))}
        </div>
        { addNew ? 
            <Form
            onSubmit={text => {
                setTodos([...todos, { text: text, complete: false }])
                setAddNew(!addNew)
            }}
            />
            : null
        }
      </div>
    );
  };