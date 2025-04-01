import React, { useState } from 'react';

const Potencia = () => {
    const [valores, setValores] = useState({ base: '', expoente: '' });
    const [resultado, setResultado] = useState(null);

    const calcularPotencia = () => {
        const { base, expoente } = valores;
        const resultadoCalculado = Math.pow(parseFloat(base), parseFloat(expoente));
        setResultado(resultadoCalculado.toFixed(2));
    };

    const handleChange = (e) => {
        setValores({ ...valores, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h2>Calcular Potência</h2>
            <input type="number" name="base" placeholder="Base" onChange={handleChange} />
            <input type="number" name="expoente" placeholder="Expoente" onChange={handleChange} />
            <button onClick={calcularPotencia}>Calcular</button>
            {resultado && <p>O resultado é: {resultado}</p>}
        </div>
    );
};

export default Potencia;