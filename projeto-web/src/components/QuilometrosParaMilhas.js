import React, { useState } from 'react';

const QuilometrosParaMilhas = () => {
    const [quilometros, setQuilometros] = useState('');
    const [milhas, setMilhas] = useState(null);

    const converter = () => {
        const resultado = parseFloat(quilometros) * 0.621371;
        setMilhas(resultado.toFixed(2));
    };

    return (
        <div>
            <h2>Converter Quilômetros para Milhas</h2>
            <input type="number" placeholder="Valor em quilômetros" onChange={(e) => setQuilometros(e.target.value)} />
            <button onClick={converter}>Converter</button>
            {milhas && <p>{quilometros} quilômetros equivalem a {milhas} milhas.</p>}
        </div>
    );
};

export default QuilometrosParaMilhas;