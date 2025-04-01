import './App.css';
import React from 'react';
import MediaNotas from './components/MediaNotas';
import CelsiusParaFahrenheit from './components/CelsiusParaFahrenheit';
import FahrenheitParaCelsius from './components/FahrenheitParaCelsius';
import AreaRetangulo from './components/AreaRetangulo';
import AreaCirculo from './components/AreaCirculo';
import PerimetroRetangulo from './components/PerimetroRetangulo';
import PerimetroCirculo from './components/PerimetroCirculo';
import Potencia from './components/Potencia';
import MetrosParaCentimetros from './components/MetrosParaCentimetros';
import QuilometrosParaMilhas from './components/QuilometrosParaMilhas';
import CalcularIMC from './components/CalcularIMC';
import PrecoComDesconto from './components/PrecoComDesconto';
import JurosSimples from './components/JurosSimples';
import JurosCompostos from './components/JurosCompostos';
import DiasParaHoras from './components/DiasParaHoras';

function App() {
    return (
        <div>
            <h1>ReactJS - Projeto Web</h1>
            <MediaNotas />
            <CelsiusParaFahrenheit />
            <FahrenheitParaCelsius />
            <AreaRetangulo />
            <AreaCirculo />
            <PerimetroRetangulo />
            <PerimetroCirculo />
            <Potencia />
            <MetrosParaCentimetros />
            <QuilometrosParaMilhas />
            <CalcularIMC />
            <PrecoComDesconto />
            <JurosSimples />
            <JurosCompostos />
            <DiasParaHoras />
        </div>
    );
}

export default App;
