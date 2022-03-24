import Header from "./Header";
import './ComponenteCitas.css'

function ComponentesCitas (props) {
    const data= props.data;

    function FormatearObjeto (object) {
        return (
            <div className="mostrarCitas">
                {Object.keys(object).map(
                    (key) => { return (
                        <div className="info">
                            <span>{key}: </span>
                            <span>{object[key]}</span>
                        </div>
                        )
                    }
                )}
            </div>
        );
    }

    return(
        <>
            <Header/>
            <div>
                {FormatearObjeto(data[0])}
            </div>
        </>
    );
}

export default ComponentesCitas;