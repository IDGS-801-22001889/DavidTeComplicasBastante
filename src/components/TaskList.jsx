import { useContext, useState } from "react";

import { TaskContext } from "../context/TaskContext";

function TaskList(){

    const { tasks, dispatch } =
        useContext(TaskContext);

    const [editing, setEditing] = useState(null);

    const [title, setTitle] = useState("");

    function editTask(task){

        setEditing(task.id);
        setTitle(task.title);
    }

    function saveTask(id){

        if (!title.trim()) return;

        dispatch({
            type: "EDIT_TASK",
            payload: {
                id,
                title: title.trim()
            }
        });

        setEditing(null);
    }

    return (

        <div>

            <h2>Mis tareas</h2>

            {task.map(task => (

                <div key={task.id}>

                    {editing === task.id ? (

                        <>
                            <input
                                value={title}
                                onChange={e =>
                                    setTitle(e.target.value)
                                }
                            />

                            <button onClick={() =>
                                saveTask(task.id)
                            }>
                                Guardar
                            </button>
                        </>
                        
                    ): (

                        <>
                            <span
                                style={{
                                    textDecoration:
                                    task.completed
                                        ?"line-through"
                                        :"none"
                                }}
                            >
                                {task.title}
                            </span>

                            <button onClick={() =>
                                dispatch({
                                    type: "TOGGLE_TASK",
                                    payload: task.id
                                })
                            }>
                                {task.completed
                                    ?"Reabrir"
                                    :"Completar"}
                            </button>

                            <button onClick={() =>
                                editTask(task)
                            }>
                                Editar
                            </button>

                            <button onClick={() =>
                                dispatch({
                                    type: "DELETE_TASK",
                                    payload: task.id``
                                })
                            }>
                                Eliminar
                            </button>

                        </>
                    )}

                </div>
            ))}

            {tasks.length === 0 && (
                <p>No tienes tareas registradas</p>
            )}

        </div>
    );
}

export default TaskList;