import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

import { TaskContext } from "../context/TaskContext";

function Dashboard() {

    const { authState } = useContext(AuthContext);

    const { tasks } = useContext(TaskContext);

    const completed = tasks.filter(
        task => task.completed
    ).length;

    const pending = tasks.length - completed;

    return (

        <div>

            <h1>Dashboard</h1>

            <h2>
                Bienvenido, {authState.user.name}
            </h2>

            <p>Total de tareas: {tasks.length}</p>

            <p>Tareas completadas: {completed}</p>

            <p>Tareas pendientes: {pending}</p>

        </div>
    );
}

export default Dashboard;