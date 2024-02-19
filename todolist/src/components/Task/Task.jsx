/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Task.css";
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";


const Task =  (props) => {
  async function handleClick(event) {
    event.preventDefault();
    await axios.delete(`http://localhost:3000/api/tasks/${props.title}`)
    props.onDelete(props.id);
  }

  return (
     
      
        <div className="info">
          <div className="title">
            <p>{props.title}</p>
          </div>
          <div className="description">
            <p>{props.description}</p>
          </div>
          <div className="buttonDiv">
            <button className="deleteBtn" onClick={handleClick}>
              <DeleteIcon />
            </button>
          </div>
        </div>
     
    
  );
};

export default Task;
