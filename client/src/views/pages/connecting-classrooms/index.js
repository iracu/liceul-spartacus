import React from 'react';
import PageHead from './../../components/page-head/index';
import HeadImage from './../../../assets/page-head/about-head.jpg'
import Container from '@material-ui/core/Container';
import {Box} from "@material-ui/core";
// import './index.scss';

class connectingClassrooms extends React.Component {

    constructor(props){
        super(props);
    }

    render() {

        return (
            <div className="about-wrapper">
                <PageHead class="about-head" title="connecting classrooms" imagePatch={HeadImage}/>
                <Container maxWidth="lg">
                    <div className="app-content">
                        <Box component="p">
                            Connecting Classrooms este un proiect global al British Council, care stabilește
                            legături strânse de parteneriat între grupuri de școli din Marea Britanie și din
                            mai mult de alte 60 de țări din întreaga lume. Prin aceste parteneriate programul
                            promovează înțelegerea și încrederea între tineri din diferite societăți și crează
                            o lume mai sigură și mai coerentă pentru viitor.
                        </Box>
                        <Box component="p">
                            Connecting Classrooms se desfășoară în 20 de țări din Europa iar în Romania este
                            derulat în parteneriat cu Ministerul Educației, Cercetării, Tineretului și Sportului.
                            Actual, proiectul implică 10 școli generale și licee din județele Arad și Suceava, care
                            lucrează în colaborare cu 30 de școli și licee din Franța, Marea Britanie (Tara Galilor)
                            și Ungaria. Tema proiectului este: Valori olimpice - Performanta de excelenta pentru toti
                            - sport si arta creativa ca mediu de expresie a incluziunii sociale. Școlile participante
                            la program folosesc platforma online e-Twinning pentru a comunica, a-și împărtăși idei,
                            a dezvolta parteneriate durabile și proiecte comune.
                        </Box>
                        <Box component="p">
                            Scopul proiectului este să creeze școli care să promoveze incluziunea culturală.
                              Prin activitățile în care sunt implicați, tinerii învață în colaborare cu colegi
                            din alte culturi și comunități. Accentul pe incluziune înlesnește înțelegerea culturilor
                            și dezvoltarea deprinderilor, care îi vor ajuta să trăiască și să lucreze în viitor,
                            în calitate de cetățeni globali. Ei vor deveni mai încrezători în capacitatea lor de a
                            comunica și mai toleranți cu privire la perspective culturale diferite.
                        </Box>
                    </div>
                </Container>
            </div>
        );
    }
}

export default connectingClassrooms;

