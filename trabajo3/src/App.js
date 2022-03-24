import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import './App.css';
import AgregarCitas from "./components/AgregarCitas";
import Citas from "./components/data/Citas";
import ComponentCitas from "./components/ComponentCitas"

function App() {
  return (
    <Router>
      <Routes className="rutas">
        <Route path = "/" element = {<Inicio/>}/> 
        <Route path = "/Agregar-citas" element = {<AgregarCitas/>}/>
        <Route path = "/Citas" element = {<ComponentCitas data={Citas} />}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

/*
<Router >
      <Routes>
        <Route path = "/" element = {<Inicio/>}/>
        <Route path = "/ingreso-manual" element = {<Ingreso/>}/>
        <Route path = "/carga-archivos" element = {<Carga/>}/>  
      </Routes>
      <br/>
      <Footer/>
    </Router>

    */
