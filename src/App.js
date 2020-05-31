import React from 'react';
import TaskSet from './components/task-set/task-set.component'
import './App.css'

export default () => {

  let newDate = new Date()

  return (
    <div>
      <TaskSet title={`${newDate.toLocaleString('default', { month: 'long' })} ${newDate.getDate()}, ${newDate.getFullYear()}`}/>
      <TaskSet title="Miscellaneous"/>
    </div>
  )
}