// Importar las clases de react para extenderlas
import React, { Component } from 'react';

// Clases que hice para pintar el botón
import './Botoncito.css';

// Declarar clase
class Botoncito extends Component {
    // En el método render ponemos el html
    render() {
        return (
            <button className="Botoncito">Este es un Botoncito</button>
        );
    }
}

export default Botoncito;