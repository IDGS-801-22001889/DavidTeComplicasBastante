import { useContext, useState } from "react";

import { TaskContext } from "../context/TaskContext";

function TaskForm(){

    const { dispatch } = useContext(TaskContext);

    const [title, setTitle] = useState("");

    function addTask(e){

        e.preventDefault();

        if (!title.trim()) return;

        dispatch({

            type: "ADD_TASK",

            payload: {
                id: crypto.randomUUID(),
                title: title.trim(),
                completed: false
            }

        });

        setTitle("");
    }

    return(
        
        <form on Submit={addTask}>

            <input
                type="text"
                placeholder="Escribe una tarea..."
                value={title}
                onChange={e => setTitle(e.target.value)}
            />

            <button type="submit">
                Agregar tarea
            </button>

        </form>

    )

}

export default TaskForm;