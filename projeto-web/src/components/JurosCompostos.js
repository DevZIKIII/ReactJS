import React, { useState } from 'react';

const JurosCompostos = () => {
    const [dados, setDados] = useState({ capital: '', taxa: '', periodo: '' });
    const [montante, setMontante] = useState(null);

    const calcular = () => {
        const { capital, taxa, periodo } = dados;
        const resultado = parseFloat(capital) * Math.pow((1 + parseFloat(taxa)), parseFloat(periodo));
        setMontante(resultado.toFixed(2));
    };

    const handleChange = (e) => {
        setDados({ ...dados, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h2>Calcular Juros Compostos</h2>
            <input type="number" name="capital" placeholder="Capital" onChange={handleChange} />
            <input type="number" name="taxa" placeholder="Taxa (decimal)" onChange={handleChange} />
            <input type="number" name="periodo" placeholder="Período" onChange={handleChange} />
            <button onClick={calcular}>Calcular</button>
            {montante && <p>O montante com juros compostos é: {montante}</p>}
        </div>
    );
};

export default JurosCompostos;