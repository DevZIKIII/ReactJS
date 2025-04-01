import React, { useState } from 'react';

const PerimetroRetangulo = () => {
    const [dimensoes, setDimensoes] = useState({ largura: '', altura: '' });
    const [perimetro, setPerimetro] = useState(null);

    const calcularPerimetro = () => {
        const { largura, altura } = dimensoes;
        const resultado = 2 * (parseFloat(largura) + parseFloat(altura));
        setPerimetro(resultado.toFixed(2));
    };

    const handleChange = (e) => {
        setDimensoes({ ...dimensoes, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h2>Calcular Perímetro do Retângulo</h2>
            <input type="number" name="largura" placeholder="Largura" onChange={handleChange} />
            <input type="number" name="altura" placeholder="Altura" onChange={handleChange} />
            <button onClick={calcularPerimetro}>Calcular Perímetro</button>
            {perimetro && <p>O perímetro do retângulo é: {perimetro}</p>}
        </div>
    );
};

export default PerimetroRetangulo;