import React from 'react';
import TaskSet from './components/task-set/task-set.component'

export default () => {

  let newDate = new Date()

  return (
    <div>
      <TaskSet title={`${newDate.toLocaleString('default', { month: 'long' })} ${newDate.getDate()}, ${newDate.getFullYear()}`}/>
      <TaskSet title="miscellaneous"/>
    </div>
  )
}