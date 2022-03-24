import './Inicio.css';

function Inicio () {
    return (
        <div className="menuInicio">
            <div className="divImagen">
                <img className="Imagen" src="https://static.vecteezy.com/system/resources/thumbnails/000/580/411/small/sarmi2-09.jpg" alt="" />
            </div>
            <ul className="menu">
                <li><a href="/Hospital">Consultar Hospital</a></li>
                <li><a href="/Pacientes">Consultar Pacientes</a></li>
                <li><a href="/Doctores">Consultar Doctores</a></li>
                <li><a href="/Citas">Consultar Citas</a></li>
                <li><a href="/Agregar-citas">Agregar citas</a></li>
            </ul>
        </div>
    );
}

export default Inicio