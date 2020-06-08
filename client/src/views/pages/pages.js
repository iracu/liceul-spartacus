import './pages.scss';
import React from 'react';
import { Route } from 'react-router-dom';

import bac from "./bac";
import Home from './home';
import elevi from './elevi';
import dotari from "./dotari";
import noutati from "./noutati";
import noutate from "./noutate";
import despreNoi from './despre-noi';
import regulament from './regulament';
import experienta from "./experienta";
import proiectulEpas from "./proiectul-epas";
import misiuneaScolii from "./misiunea-scolii";
import ofertaEducationala from "./oferta-educationala";
import connectingClassrooms from "./connecting-classrooms";

const Pages= () => {
    return (
        <div className="content-wrapper">
            <Route path="/" exact component={Home} />
            <Route path="/bac" component={bac} />
            <Route path="/elevi" component={elevi} />
            <Route path="/dotari" component={dotari} />
            <Route path="/noutati" component={noutati} />
            <Route path="/noutate/:title" component={noutate} exact={true} />
            <Route path="/regulament" component={regulament} />
            <Route path="/experienta" component={experienta} />
            <Route path="/despre-noi" component={despreNoi} />
            <Route path="/proiectul-epas" component={proiectulEpas} />
            <Route path="/misiunea-scolii" component={misiuneaScolii} />
            <Route path="/oferta-educationala" component={ofertaEducationala} />
            <Route path="/connecting-classrooms" component={connectingClassrooms} />
        </div>
    );
};

export default Pages;
