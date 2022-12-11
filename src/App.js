import './App.css';
import React, { useState, useEffect } from 'react';
import { Title } from './components/Title';
import { InputForm } from './components/InputForm';
import { TodoList } from './components/TodoList';
import { db } from './firebase';
import { query, collection, onSnapshot } from 'firebase/firestore';

function App() {

  const [taskList, setTaskList] = useState([]);



  useEffect(() => {
    const q = query(collection(db, 'schedules'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach(doc => {
        todosArr.push({ ...doc.data(), id: doc.id })
      });
      setTaskList(todosArr);
    });
    return () => unsubscribe;
  }, []);

  return (
    <div className="body">
      <Title />
      <InputForm taskList={taskList} setTaskList={setTaskList} />
      <TodoList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default App;
