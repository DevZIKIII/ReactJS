import React, { useState } from 'react';

const MetrosParaCentimetros = () => {
    const [metros, setMetros] = useState('');
    const [centimetros, setCentimetros] = useState(null);

    const converter = () => {
        const resultado = parseFloat(metros) * 100;
        setCentimetros(resultado.toFixed(2));
    };

    return (
        <div>
            <h2>Converter Metros para Centímetros</h2>
            <input type="number" placeholder="Valor em metros" onChange={(e) => setMetros(e.target.value)} />
            <button onClick={converter}>Converter</button>
            {centimetros && <p>{metros} metros equivalem a {centimetros} centímetros.</p>}
        </div>
    );
};

export default MetrosParaCentimetros;