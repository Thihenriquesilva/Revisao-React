import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import logo from '../../logo.png';
import '../../assets/style/global.css';


interface HeaderProps {
    title: string
}


const Header: React.FC<HeaderProps> = (propss) => {
    return (
        <div className="header">
            <header>
                <div  className="frase">
                    <Link to="/"><img src={logo} alt="" className="logo" /></Link>
                    <h3>{propss.title}</h3>
                </div>
                <nav>
                    <ul className="menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/eventos">Eventos</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header;