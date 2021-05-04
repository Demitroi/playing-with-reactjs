// Esta es el componente pricipal
// Se importan los svg como un componente
import logo from './logo.svg';

// Los css se importan directamente sin asignarlos a una variable.
// Con eso se cargan los estilos del mismo.
import './App.css';

// He hecho dos componentes para probar.
// El primero un cuadrito que lo hice con función
import Cuadrito from './Componentes/Cuadrito.js';
// El segundo un botoncito, en este use clases
import Botoncito from './Componentes/Botoncito.js'

// Esta es la función App
function App() {
  // Se retorna el html
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* Aquí agregue mis componentes */}
        <Cuadrito></Cuadrito>
        <Botoncito></Botoncito>
      </header>
    </div>
  );
}

export default App;
