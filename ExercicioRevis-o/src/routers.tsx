import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from '../src/pages/home';
import Login from '../src/pages/login';
import Eventos from '../src/pages/eventos';


function Routers(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/eventos" component={Eventos} />
        </BrowserRouter>
    )
}

export default Routers;