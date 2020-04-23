import React from 'react';

var ComponenteA = props => (
    <h1>Primeiro diz: {props.valor}</h1>
);

var ComponenteB = props => (
    <h1>Segundo diz: {props.valor}</h1>
);

export { ComponenteA, ComponenteB };