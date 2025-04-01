import React, { useState } from 'react';

const CelsiusParaFahrenheit = () => {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState(null);

    const converter = () => {
        const resultado = (parseFloat(celsius) * 9/5) + 32;
        setFahrenheit(resultado.toFixed(2));
    };

    return (
        <div>
            <h2>Converter Celsius para Fahrenheit</h2>
            <input type="number" placeholder="Temperatura em Celsius" onChange={(e) => setCelsius(e.target.value)} />
            <button onClick={converter}>Converter</button>
            {fahrenheit && <p>A temperatura em Fahrenheit é: {fahrenheit}</p>}
        </div>
    );
};

export default CelsiusParaFahrenheit;