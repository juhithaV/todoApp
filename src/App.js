// import './App.css';
import { useState } from 'react';
import ListForm from './ListForm';
import ViewTasks from './ViewTasks';

function App() {

  const [tasks, setTasks] = useState([]);

  function addTask(name){
    setTasks((prev) =>{
      return [...prev,{name:name, done:false}]
    })
  }

  return (
    <main>
      <ListForm onAdd = {addTask} />
      {tasks.map(task =>(
        <ViewTasks {...task}/>
      ))}
    </main>
  );
}

export default App;
