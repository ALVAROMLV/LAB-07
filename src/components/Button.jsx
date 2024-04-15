import { useState } from "react";

export const Button = props => {

    const { text } = props;

    //const[count, setCount] = useState(0);
    const [count, setValorAleatorio] = useState("Valor Aleatorio");

    function handlerButton(){
       // setCount(count + 5);
        const nuevoValorAleatorio = Math.floor(Math.random() * 100) + 1;
        setValorAleatorio(nuevoValorAleatorio);
        alert(`¡Valor aleatorio generado: ${nuevoValorAleatorio}!`);
    }

    return(
        <button onClick={ handlerButton }>
            { text } { "Valor Aleatorio" }
        </button>
    )
};