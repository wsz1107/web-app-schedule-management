import React from 'react';

import { db } from '.././firebase';
import { deleteDoc, doc} from 'firebase/firestore';

export const TodoList = ({ taskList, setTaskList }) => {

  const handleDelete = async (id) => {
    await deleteDoc(doc(db,'schedules',id));
  }

  const handleComplete = (id) => {
    setTaskList(taskList.map((task) => {
      if (id === task.id) {
        return {
          ...task,
          completed: !task.completed
        };
      }
      return task;
    }))
  }


  return (
    <div className='todoList'>
      <tr className='todoListHead'>
        <td>日付</td>
        <td>開始時間</td>
        <td>終了時間</td>
        <td>件名</td>
      </tr>
      <div className='todos'>
        {taskList.map((task, index) => (
          <div className={`todo ${task.completed ? "completed" : ""}`} key={index}>
            <div className="todoText">
              <tr>
                <td>{task.scheduleDate}</td>
                <td>{task.scheduleStartTime}</td>
                <td>{task.scheduleEndTime}</td>
                <td>{task.scheduleTitle}</td>
              </tr>
            </div>
            <div className="icons">
              <button>
                <i className="fa-solid fa-check" onClick={() => handleComplete(task.id)}></i>
              </button>
              <button onClick={() => handleDelete(task.id)}>
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}
