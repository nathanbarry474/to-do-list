import React, { useState, useEffect } from 'react';

import Form from '../form/form.component'

import './task-set.styles.scss'
import { FaPlus } from 'react-icons/fa'
import { RiCloseLine } from 'react-icons/ri'
import { FiCircle } from 'react-icons/fi'
import { BsCircleFill } from 'react-icons/bs'


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
        <h1 className='title'>{title}</h1>
        <div>
          {todos.map(({ text, complete }, i) => (
            <div className='class-block'>
                {
                    complete ?
                    <BsCircleFill className='bullet' />
                    : <FiCircle className='bullet' />
                    

                }
                <div
                className='task'
                key={text}
                onClick={() => toggleComplete(i)}
                style={{
                    textDecoration: complete ? "line-through" : ""
                }}
                >
                    {text}
                </div>
                <button className='close-btn' onClick={() =>
                    setTodos(todos.filter( item => item.text !== text))}
                >
                    <RiCloseLine/>
                </button>
            </div>
          ))}
        </div>
        <div className='add-new'>
            <button className='add-btn' onClick={() => setAddNew(!addNew)}><FaPlus/></button>
            { addNew ? 
                <Form
                className='form'
                onSubmit={text => {
                    setTodos([...todos, { text: text, complete: false }])
                    setAddNew(!addNew)
                }}
                />
                : null
            }
        </div>
      </div>
    );
  };