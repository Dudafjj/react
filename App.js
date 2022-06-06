import Header from './Components/Header';
import Tasks from './Components/Tasks';
import './App.css';
import {useState } from "react";


function App(){
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Consulta médica',
      day: '5 de Fev as 14:30',
      reminder: true,
    },
    {
      id: 2,
      text: 'Consulta médica',
      day: '5 de Fev as 14:30',
      reminder: true,
    },
    {
      id: 3,
      text: 'Consulta médica',
      day: '5 de Fev as 14:30',
      reminder: true,
    },
  ]);

  const deletaTarefa = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return(
    <div className="container">
      <Header title="Tarefas" /> 
      <Tasks tasks={tasks} onDelete={deletaTarefa} />
      
    </div>
  );
};

export default App; 
