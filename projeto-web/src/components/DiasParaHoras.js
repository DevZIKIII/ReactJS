import React, { useState } from 'react';

const DiasParaHoras = () => {
    const [dias, setDias] = useState('');
    const [resultado, setResultado] = useState(null);

    const converter = () => {
        const horas = parseInt(dias) * 24;
        const minutos = horas * 60;
        const segundos = minutos * 60;
        setResultado({ horas, minutos, segundos });
    };

    return (
        <div>
            <h2>Converter Dias para Horas, Minutos e Segundos</h2>
            <input type="number" placeholder="Dias" onChange={(e) => setDias(e.target.value)} />
            <button onClick={converter}>Converter</button>
            {resultado && (
                <p>
                    {dias} dias equivalem a {resultado.horas} horas, {resultado.minutos} minutos e {resultado.segundos} segundos.
                </p>
            )}
        </div>
    );
};

export default DiasParaHoras;