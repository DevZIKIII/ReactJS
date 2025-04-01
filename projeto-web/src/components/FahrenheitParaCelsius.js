import React, { useState } from 'react';

const FahrenheitParaCelsius = () => {
    const [fahrenheit, setFahrenheit] = useState('');
    const [celsius, setCelsius] = useState(null);

    const converter = () => {
        const resultado = (parseFloat(fahrenheit) - 32) * 5/9;
        setCelsius(resultado.toFixed(2));
    };

    return (
        <div>
            <h2>Converter Fahrenheit para Celsius</h2>
            <input type="number" placeholder="Temperatura em Fahrenheit" onChange={(e) => setFahrenheit(e.target.value)} />
            <button onClick={converter}>Converter</button>
            {celsius && <p>A temperatura em Celsius é: {celsius}</p>}
        </div>
    );
};

export default FahrenheitParaCelsius;