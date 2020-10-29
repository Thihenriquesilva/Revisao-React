import React from 'react';
import Header from '../../componentes/header';
import banner from '../../banner.jpeg';

function Eventos(){
    return(
        <div>
            <Header title="Só um teste :D"/>
            <img src={banner} alt="Banner mostrando um monte de gente curtindo a porra toda" className="banner"/>
            <h1>Eventos</h1>
        </div>
    )
};

export default Eventos;