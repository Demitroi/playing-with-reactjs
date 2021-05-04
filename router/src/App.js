import React from 'react';

// Importar las cositas del router dom
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Estas funciones son los componentes que queremos renderizar
function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        {/* Aquí vamos a definir el menú */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        {/* Solo un separador por estética */}
        <hr></hr>

        {/* Aquí se van a visualizar las rutas */}
        <Switch>
          {/* El exact indica que solo se muestra si es exactamente la ruta,
          De lo contrario no se mostrarían las demas rutas */}
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
