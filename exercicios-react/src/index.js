import ReactDOM from 'react-dom';
import React from 'react';
// import { ComponenteA, ComponenteB } from './components/DoisComponentes';
/* import MultiElementos from './components/MultiElementos'; */
import FamiliaSilva from './components/FamiliaSilva';

const elemento = document.getElementById('root');

ReactDOM.render(
    <div>
        <FamiliaSilva/>
        {/* <ComponenteA valor="e aí"/>
        <ComponenteB valor="olá"/> */}
        {/* <MultiElementos/> */}
    </div>, elemento);