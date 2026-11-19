import { Link } from "react-router-dom";

function Home() {

    return(
        <div>
            <h1>Bienvenido a TaskManager</h1>

            <p>Organiza tus actividades y administra tus pendientes.</p>

            <Link to="/login">
                Iniciar sesión
            </Link>
        </div>
    );
}

export default Home;