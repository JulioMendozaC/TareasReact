import React, { useState, useContext } from "react";
import {TaskContext} from '../contex/TaskContex'

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
const {createTask} =useContext(TaskContext)


  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description
    });

    setTitle('');
    setdescription('');
  };


  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-4xl font-bold text-white mb-3 text-center hover:text-indigo-500">Crea tarea</h1>
        <input
          placeholder="Ecribe una tarea"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="pg-slate-300 p-3 w-full mb-2  hover:bg-indigo-200"
        autoFocus
        />
        <textarea
          placeholder="Escribe una description"
          onChange={(e) => setdescription(e.target.value)}
          value={description}
          className="pg-slate-300 p-3 w-full mb-2 hover:bg-indigo-200"

        ></textarea>

        <button
         className="bg-indigo-500 px-3 py-1 text-white  hover:bg-indigo-300"
         >Guardar</button>
      </form> 
    </div>
  );
}

export default TaskForm;
