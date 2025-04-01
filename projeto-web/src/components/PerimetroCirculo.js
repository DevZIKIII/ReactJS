import React, { useState } from 'react';

const PerimetroCirculo = () => {
    const [raio, setRaio] = useState('');
    const [perimetro, setPerimetro] = useState(null);

    const calcularPerimetro = () => {
        const resultado = 2 * Math.PI * parseFloat(raio);
        setPerimetro(resultado.toFixed(2));
    };

    return (
        <div>
            <h2>Calcular Perímetro do Círculo</h2>
            <input type="number" placeholder="Raio" onChange={(e) => setRaio(e.target.value)} />
            <button onClick={calcularPerimetro}>Calcular Perímetro</button>
            {perimetro && <p>O perímetro do círculo é: {perimetro}</p>}
        </div>
    );
};

export default PerimetroCirculo;