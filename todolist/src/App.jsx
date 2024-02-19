/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CreateTask from "./components/CreateTask/CreateTask";
import Task from "./components/Task/Task";
import axios from "axios";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [tasks, setTasks] = React.useState([{title : "" , description : ""}])
  useEffect(()=>{
    async function fetchData(){ 
      const response = await axios.get("http://localhost:3000/api/tasks");
      setTasks(response.data);
    }
    fetchData(); 
  },[])
  const addTask = async (task) => {
    setTasks((prev) => {
      return [...prev, task];
    });
    console.log(tasks);

    
  };

  const deleteTask = (id) => {
    setTasks(() => {
      return tasks.filter((task, index) => index !== id);
    });
  };
  return (
    <div className="App">
      <Header />
      <CreateTask onSubmit={addTask} />
      <h1 className="tasksheader">Tasks</h1>
      <div className="tasksDiv">
        {tasks.map((task, index) => {
          return (
            <Task
              title={task.title}
              description={task.description}
              key={index}
              id={index}
              onDelete={deleteTask}
            />
          );
        })}
      </div>
      <div className="footerDiv">
        <Footer />
      </div>
    </div>
  );
}

export default App;
