import React from 'react';
import Header from '../../componentes/header';
import bannerV from '../../banner-vertical.jpeg';
import Footer from '../../componentes/footer';

function Eventos() {
    return (
        <div>
            <Header title="Ta ai o Login" />
            <div>
                <img src={bannerV} alt="" className="Banner feliz" />
            </div>
            <Footer />
        </div>
    )
}

export default Eventos;