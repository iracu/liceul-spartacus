import React from 'react';
import './style.scss'
import { Link } from 'react-router-dom';

import GoogleAuth from "./../google-auth";
import { Container } from '@material-ui/core';

const Index = () => {
    return (
        <header>
        <Container>
            <div className="ui secondary menu">
                <Link to="/" className="item logo active">Liceul Spartacus</Link>
                <div className="center menu">
                    <Link to="/" className="item">Acasa</Link>
                    <div className="submenu">
                        <span>Despre</span>
                        <div className="submenu-items">
                            <Link to="/despre-noi" className="item">Despre Noi</Link>
                            <Link to="/misiunea-scolii" className="item">Misiunea Scolii</Link>
                            <Link to="/dotari" className="item">Dotari</Link>
                            <Link to="/oferta-educationala" className="item">Oferta Educationala</Link>
                        </div>
                    </div>
                    <div className="submenu">
                        <span>Elevi</span>
                        <div className="submenu-items">
                            <Link to="/elevi" className="item">Elevi</Link>
                            <Link to="/bac" className="item">BAC</Link>
                            <Link to="/regulament" className="item">Regulament</Link>
                        </div>
                    </div>
                    <div className="submenu">
                        <span>Proiecte</span>
                        <div className="submenu-items">
                            <Link to="/connecting-classrooms" className="item">Connecting classrooms</Link>
                            <Link to="/proiectul-epas" className="item">Proiectul EPAS</Link>
                            <Link to="/experienta " className="item">Experienta </Link>
                        </div>
                    </div>
                    <Link to="/noutati" className="item">Noutati</Link>
                </div>
                <div className="right menu">
                    <GoogleAuth />
                </div>
            </div>
        </Container>
        </header>
    );
};

export default Index;
