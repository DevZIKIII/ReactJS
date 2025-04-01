import React, { useState } from 'react';

const AreaCirculo = () => {
    const [raio, setRaio] = useState('');
    const [area, setArea] = useState(null);

    const calcularArea = () => {
        const resultado = Math.PI * Math.pow(parseFloat(raio), 2);
        setArea(resultado.toFixed(2));
    };

    return (
        <div>
            <h2>Calcular Área do Círculo</h2>
            <input type="number" placeholder="Raio" onChange={(e) => setRaio(e.target.value)} />
            <button onClick={calcularArea}>Calcular Área</button>
            {area && <p>A área do círculo é: {area}</p>}
        </div>
    );
};

export default AreaCirculo;