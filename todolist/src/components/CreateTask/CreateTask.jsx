/* eslint-disable react/prop-types */
import React from "react";
import "./CreateTask.css";
import AddIcon from '@mui/icons-material/Add';
import axios from "axios";

const CreateTask = (props) => {
  const [task,setTask] = React.useState({
    title:"",
    description : "",
  })

  const handleSubmit = async(event) => {
    event.preventDefault();
    const response = await axios.post("http://localhost:3000/api/tasks" , {task});
    console.log(response)
    props.onSubmit(task);
}

  

  return (
    <form method="POST" className="createtask" onSubmit={handleSubmit}>
        <div className="input">
            <input type="text" spellCheck="false" placeholder="Task" name="title" maxLength="20" value={task.title} onChange={event=>{setTask({...task ,[event.target.name]:event.target.value })}}/>
        </div>
        <div className="input">
            <textarea name="description" spellCheck="false"  id=""  rows="4" placeholder="Description"  maxLength="50" value={task.description} onChange={event=>{setTask({...task ,[event.target.name]:event.target.value })}} />
        </div>
        <div className="addDiv">
            <button type="submit" className="addTask"><svg className="addicon"><AddIcon /></svg></button>
          </div>
        
    </form>
  );
};

export default CreateTask;
