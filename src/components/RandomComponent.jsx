import { useState } from 'react';
import imagenEjemplo from '../assets/react.svg';

export const ImagenComponente = () => {
    const [mostrarImagen, setMostrarImagen] = useState(false);
  
    const toggleImagen = () => {
        setMostrarImagen(!mostrarImagen);
    };
    return (
        <div>
            <h2>Imagen de Ejemplo</h2>
            <button onClick={toggleImagen}>
                {mostrarImagen ? 'Ocultar Imagen' : 'Mostrar Imagen'}
            </button>
            {mostrarImagen && <img src={imagenEjemplo} alt="Ejemplo" />}
        </div>
    );
  };

export default ImagenComponente;
