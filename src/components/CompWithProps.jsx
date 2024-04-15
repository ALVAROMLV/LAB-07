import React, { useState } from 'react';

const CompWithProps = ({ placeholder }) => {
    const [texto, setTexto] = useState('');

    const handleChange = (event) => {
        setTexto(event.target.value);
    };
    return (

        <div>
            <h2>HOLA DESDE VITE</h2>
            <input
                type="text"
                placeholder={placeholder}
                value={texto}
                onChange={handleChange}
            />
            <p>USER: {texto}</p>
        </div>
    );
};

export default CompWithProps;
