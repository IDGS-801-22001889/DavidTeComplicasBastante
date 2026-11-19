import {
    createContext,
    useReducer,
    useEffect
} from "react";

import {
    taskReducer,
    initialTasks
} from "../reducers/taskReducer";

export const TaskContext = createContext();

export function TaskProvider({ children }){

    const [tasks, dispatch] = useReducer(
        taskReducer,
        initialTasks,
        () => {
            try {
                const saved = localStorage.getItem("tasks");

                return saved
                    ? JSON.parse(saved)
                    : initialTasks;

            } catch {
                return initialTasks;
            }
        }
    );

    useEffect(()  => {

        localStorage.setItem(
            "tasks",
            JSON.stringify(tasks)
        );

    }, [tasks]);

    return (
        <TaskContext.Provider
            value={{tasks, dispatch}}
        >
            {children}
        </TaskContext.Provider>
    );
}