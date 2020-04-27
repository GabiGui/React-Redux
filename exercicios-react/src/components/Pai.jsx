import React from 'react';
import Filho from './Filho';

export default props => {
    function notificarSaidaDoFilho(lugar){ alert(`Liberado para ${lugar}`);}
    //const notificarSaidaDoFilho = lugar => alert(`Liberado para ${lugar}`);
    return (
        <div>
            <Filho notificarSaida={notificarSaidaDoFilho}/>
        </div>
    );
}
