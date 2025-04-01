import React, { useState } from 'react';

const MediaNotas = () => {
    const [notas, setNotas] = useState({ nota1: '', nota2: '', nota3: '' });
    const [media, setMedia] = useState(null);

    const calcularMedia = () => {
        const { nota1, nota2, nota3 } = notas;
        const mediaCalculada = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;
        setMedia(mediaCalculada.toFixed(2));
    };

    const handleChange = (e) => {
        setNotas({ ...notas, [e.target.name]: e.target.value });
    };

    return (
        <div className="media-notas">
            <h2>Calcular Média de Três Notas</h2>
            <input type="number" name="nota1" placeholder="Nota 1" onChange={handleChange} />
            <input type="number" name="nota2" placeholder="Nota 2" onChange={handleChange} />
            <input type="number" name="nota3" placeholder="Nota 3" onChange={handleChange} />
            <button onClick={calcularMedia}>Calcular Média</button>
            {media && <p>A média é: {media}</p>}
        </div>
    );
};

export default MediaNotas;