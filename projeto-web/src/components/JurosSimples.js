import React, { useState } from 'react';

const JurosSimples = () => {
    const [dados, setDados] = useState({ capital: '', taxa: '', periodo: '' });
    const [juros, setJuros] = useState(null);

    const calcular = () => {
        const { capital, taxa, periodo } = dados;
        const resultado = parseFloat(capital) * parseFloat(taxa) * parseFloat(periodo);
        setJuros(resultado.toFixed(2));
    };

    const handleChange = (e) => {
        setDados({ ...dados, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h2>Calcular Juros Simples</h2>
            <input type="number" name="capital" placeholder="Capital" onChange={handleChange} />
            <input type="number" name="taxa" placeholder="Taxa (decimal)" onChange={handleChange} />
            <input type="number" name="periodo" placeholder="Período" onChange={handleChange} />
            <button onClick={calcular}>Calcular</button>
            {juros && <p>Os juros simples são: {juros}</p>}
        </div>
    );
};

export default JurosSimples;