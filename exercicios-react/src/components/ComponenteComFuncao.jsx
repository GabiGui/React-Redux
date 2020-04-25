import React from 'react';

const aprovados = ['Paula','Roberta', 'Gustavo', 'Julia'];

export default props => {
   
   //componentes diretas entre dois componentes
    /*  const gerarItens = itens => {
        return itens.map(item => <li>{item}</li>);
    } */

    function gerarItens(itens){
        return itens.map(item => <li>{item}</li>);
    }

    return gerarItens(aprovados);
}