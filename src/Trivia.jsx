import React, { useState } from 'react';
import { HashRouter as Router } from 'react-router-dom'; // Importa HashRouter en lugar de BrowserRouter
import './Trivia.css';
import logo from './images/logo.png';

function Trivia() {
  // Array de preguntas con sus opciones y respuesta correcta
  const preguntas = [
    {
      pregunta: '¿Qué activo, clave por su efectividad, forma parte de la línea de desinfectantes de alto nivel?',
      opciones: ['O-ftalaldehido', 'Peróxido de Hidrogeno', 'Amonios cuaternarios'],
      respuestaCorrecta: 'O-ftalaldehido'
    },
    {
      pregunta: '¿Cuál es el rango de temperatura óptimo recomendado para la máxima eficiencia de nuestros detergentes enzimáticos?',
      opciones: ['60°C-70°C', '15°C -25°C', '30°C-40°C'],
      respuestaCorrecta: '30°C-40°C'
    },
    {
      pregunta: '¿Cuál de los siguientes productos esta diseñado  para el lavado de manos en seco?',
      opciones: ['JC4', 'JN6', 'LH1'],
      respuestaCorrecta: 'LH1'
    },
    {
      pregunta: '¿Qué producto se utiliza para el prelavado instrumental y, además, posee una acción desinfectante?',
      opciones: ['Pentadex Control', 'Tridex Main', 'Tridex'],
      respuestaCorrecta: 'Tridex Main'
    },
    {
      pregunta: '¿Qué producto incluye una característica que permite identificar visualmente el área que ha sido tratada?',
      opciones: ['ST2 color', 'ST2', 'STa2'],
      respuestaCorrecta: 'ST2 color'
    }
  ];

  // Estados para controlar la pregunta actual, respuestas seleccionadas y mensaje de resultado
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [mensaje, setMensaje] = useState('');

  // Función para manejar la selección de una respuesta
  const handleSeleccionarRespuesta = (respuesta) => {
    const respuestaCorrecta = preguntas[preguntaActual].respuestaCorrecta;
    if (respuesta === respuestaCorrecta) {
      if (preguntaActual === preguntas.length - 1) {
        setMensaje('¡FELICIDADES, GANASTE!');
      } else {
        setPreguntaActual(preguntaActual + 1);
        setMensaje('');
      }
    } else {
      setMensaje('QUIZÁS LA PRÓXIMA');
    }
  };

  // Función para manejar el evento de regresar
  const handleRegresar = () => {
    window.location.href = './index.html'; // Usa una ruta relativa para regresar
  };

  return (
    <div className="TriviaContainer">
      <p className='Titulo-principal'>Covidex</p>
      <p className='Titulos'>RESPONDÉ Y GANÁ!</p>
      {/*<img src={logo} className="App-logo" alt="logo" />*/}
      {/* Renderiza el mensaje de resultado o la pregunta actual */}
      {mensaje ? (
        <p className='Mensaje'>{mensaje}</p>
      ) : (
        <div className="Tarjeta">
          
          {/* Muestra la pregunta actual y las opciones */}
          <p className='Pregunta'>{preguntas[preguntaActual].pregunta}</p>
          <div className="Opciones">
            {preguntas[preguntaActual].opciones.map((opcion, index) => (
              <button key={index} className="Opcion" onClick={() => handleSeleccionarRespuesta(opcion)}>
                {opcion}
              </button>
            ))}
          </div>
        </div>
      )}
      {/* Botón para regresar */}
      <button className="BotonRegresar" onClick={handleRegresar}>Regresar</button>
    </div>
  );
}

function App() {
  return (
    <Router> {/* Utiliza el componente HashRouter para envolver tu aplicación */}
      <Trivia />
    </Router>
  );
}

export default App;
