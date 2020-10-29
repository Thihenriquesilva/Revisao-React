import React from 'react';
import Header from '../../componentes/header';
import Footer from '../../componentes/footer';
import banner from '../../banner.jpeg';

function Eventos() {
    return (
        <div>
            <Header title="Só um teste"/>
            <img src={banner} alt="Banner mostrando um monte de gente curtindo a porra toda" className="banner" />
            <h1>Eventos</h1>
            <h2>Lorem Ipsum</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <h2>Eventos</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <br/>
            <Footer />
        </div>
    )
}

export default Eventos;