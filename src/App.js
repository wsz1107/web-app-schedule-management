import './App.css';
import React, { useState } from 'react';
import { Title } from './components/Title';
import { InputForm } from './components/InputForm';
import { TodoList } from './components/TodoList';

function App() {

  const [taskList, setTaskList] = useState([]);

  return (
    <div className="body">
      <Title />
      <InputForm taskList={taskList} setTaskList={setTaskList}/>
      <TodoList taskList={taskList} setTaskList={setTaskList}/>
    </div>
  );
}

export default App;
