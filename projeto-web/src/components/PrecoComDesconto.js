import React, { useState } from 'react';

const PrecoComDesconto = () => {
    const [dados, setDados] = useState({ preco: '', desconto: '' });
    const [precoFinal, setPrecoFinal] = useState(null);

    const calcular = () => {
        const { preco, desconto } = dados;
        const resultado = parseFloat(preco) - (parseFloat(preco) * (parseFloat(desconto) / 100));
        setPrecoFinal(resultado.toFixed(2));
    };

    const handleChange = (e) => {
        setDados({ ...dados, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h2>Calcular Preço com Desconto</h2>
            <input type="number" name="preco" placeholder="Preço" onChange={handleChange} />
            <input type="number" name="desconto" placeholder="Desconto (%)" onChange={handleChange} />
            <button onClick={calcular}>Calcular</button>
            {precoFinal && <p>O preço com desconto é: {precoFinal}</p>}
        </div>
    );
};

export default PrecoComDesconto;