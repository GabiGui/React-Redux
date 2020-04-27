import ReactDOM from 'react-dom';
import React from 'react';
// import { ComponenteA, ComponenteB } from './components/DoisComponentes';
/* import MultiElementos from './components/MultiElementos'; */
//import FamiliaSilva from './components/FamiliaSilva';
/* import Familia from './components/Familia';
import Membro from './components/Membro'; */
//import ComponenteComFuncao from './components/ComponenteComFuncao';
import Pai from './components/Pai';
import ComponenteClasse from './components/ComponenteClasse';

const elemento = document.getElementById('root');

ReactDOM.render(
    <div>
        <ComponenteClasse />
         <Pai />
        {/* <ComponenteComFuncao/> */}
        {/*  <Familia sobrenome="Silva" saudacao="oi">
            <Membro nome="André"/>
        </Familia> */}
        {/* <FamiliaSilva/> */}
        {/* <ComponenteA valor="e aí"/>
        <ComponenteB valor="olá"/> */}
        {/* <MultiElementos/> */}
    </div>, elemento);