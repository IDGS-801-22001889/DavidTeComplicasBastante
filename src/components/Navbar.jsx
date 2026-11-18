import { useContext } from "react";

import {
    Link,
    useNavigate
} from "react-router-dom";

import {AuthContext} from "./context/AuthContext";

function Navbar(){

    const { authState, dispatch} =
        useContext(AuthContext);

    const navigate = useNavigate();

    function logout() {
        dispatch({type: "LOGOUT"});

        navigate("/login", {replace: true});
    }

    return (
        
        <nav>

            <Link to="/">Inicio</Link>

            {authState.logged && (

                <>
                
                <Link to="/dashboard">
                    Dashboard
                </Link>

                <Link to="/tasks">
                    Tareas
                </Link>

                <span>
                    Hola, {authState.user.name}
                </span>

                <button onClick={logout}>
                    Cerrar sesión
                </button>
                
                </>

            )}

        </nav>
    )
}

export default Navbar;