import React, { useState } from 'react';

const CalcularIMC = () => {
    const [dados, setDados] = useState({ peso: '', altura: '' });
    const [imc, setImc] = useState(null);

    const calcular = () => {
        const { peso, altura } = dados;
        const resultado = parseFloat(peso) / Math.pow(parseFloat(altura), 2);
        setImc(resultado.toFixed(2));
    };

    const handleChange = (e) => {
        setDados({ ...dados, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h2>Calcular IMC</h2>
            <input type="number" name="peso" placeholder="Peso (kg)" onChange={handleChange} />
            <input type="number" name="altura" placeholder="Altura (m)" onChange={handleChange} />
            <button onClick={calcular}>Calcular</button>
            {imc && <p>Seu IMC é: {imc}</p>}
        </div>
    );
};

export default CalcularIMC;