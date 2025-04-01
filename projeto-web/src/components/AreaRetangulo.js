import React, { useState } from 'react';

const AreaRetangulo = () => {
    const [dimensoes, setDimensoes] = useState({ largura: '', altura: '' });
    const [area, setArea] = useState(null);

    const calcularArea = () => {
        const { largura, altura } = dimensoes;
        const resultado = parseFloat(largura) * parseFloat(altura);
        setArea(resultado.toFixed(2));
    };

    const handleChange = (e) => {
        setDimensoes({ ...dimensoes, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h2>Calcular Área do Retângulo</h2>
            <input type="number" name="largura" placeholder="Largura" onChange={handleChange} />
            <input type="number" name="altura" placeholder="Altura" onChange={handleChange} />
            <button onClick={calcularArea}>Calcular Área</button>
            {area && <p>A área do retângulo é: {area}</p>}
        </div>
    );
};

export default AreaRetangulo;