import Header from "./Header";
import './AgregarCitas.css'

function AgregarCitas () {
    return (
        <div className="AgregarCitas">
            <Header/>
            <center>
                <form className="formAgregar" action="/" method="post">
                    <table>
                        <tr className="divLabel">
                            <td>
                                <label className="labelAgregar" for="Id">Id:</label>
                            </td>
                            <td>
                                <input type="text" id="Id" name="Id"/><br/>
                            </td>
                        </tr>
                        
                        <tr className="divLabel">
                            <td>
                                <label for="Paciente">Paciente:</label>
                            </td>
                            <td>
                                <input type="text" id="Paciente" name="Paciente"/><br/>
                            </td>
                        </tr>
                        <tr className="divLabel">
                            <td>
                                <label for="Medico">Medico:</label>
                            </td>
                            <td>
                                <input type="text" id="Medico" name="Medico"/><br/>
                            </td>
                        </tr>
                        <tr className="divLabel">
                            <td>
                                <label for="Hospital">Hospital:</label>
                            </td>
                            <td>
                                <input type="text" id="Hospital" name="Hospital"/><br/>
                            </td>
                        </tr>
                        <tr className="divLabel">
                            <td>
                                <label for="Estado">Estado:</label>
                            </td>
                            <td>
                                <input type="number" id="Estado" name="Estado"/><br/>
                            </td>
                        </tr>
                        <tr className="divLabel">
                            <td>
                                <label for="Fecha">Fecha:</label>
                            </td>
                            <td>
                                <input type="date" id="Fecha" name="Fecha"/><br/>
                            </td>
                        </tr>
                        <tr className="divLabel">
                            <td>
                                <label for="Hora">Hora:</label>
                            </td>
                            <td>
                                <input type="time" id="Hora" name="Hora"/>
                            </td>
                        </tr>
                    </table>
        
                    <input type="submit" />
                </form>
            </center>
        </div>
    );
}

export default AgregarCitas;