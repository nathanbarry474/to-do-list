import React, { useState, useEffect } from 'react';
import Form from '../form/form.component'
import './task-set.styles.scss'

export default ({title}) => {
    const [todos, setTodos] = useState([]);
    const [addNew, setAddNew] = useState(false);


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
    
    useEffect(() => {
        const data = localStorage.getItem(`${title}`)
        if (data) {
            setTodos(JSON.parse(data))
        }
    }, [])

    useEffect(() => {
      localStorage.setItem(`${title}`, JSON.stringify(todos))
    })
    

    return (
      <div className='taskset'>
        <h1>{title}</h1>
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