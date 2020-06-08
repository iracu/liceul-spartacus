import React from 'react';
import PageHead from './../../components/page-head/index';
import HeadImage from './../../../assets/page-head/about-head.jpg'
import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";
import {Box} from "@material-ui/core";

class experienta extends React.Component {

    constructor(props){
        super(props);
    }

    render() {

        return (
            <div className="about-wrapper">
                <PageHead className="about-head" title="Experiența" imagePatch={HeadImage}/>
                <Container maxWidth="lg">
                    <Box component="p">
                        Cea de-a XII-a ediţie a Galei Premiilor ”Observator cultural”s-a desfășurat, și în acest an,
                        în luna aprilie. Marele juriu, format din cunoscuți scriitori şi critici literari, a premiat
                        cinci categorii de titluri, de la critică şi istorie literară până la poezie. Din 2016, la
                        premiile acordate de revistă s-a alăturat și Premiul “Observator Lyceum”, pentru secțiunea
                        ”Proză”, decis de un grup de elevi din cele mai cunoscute licee ale Capitalei. Astfel, nouă
                        echipe de tineri pasionaţi de literatură au dezbătut la sediul redacţiei ”Observator cultural”
                        cele şase cărţi de ficțiune nominalizate, fiecare motivându-şi individual votul acordat.
                        Preferata liceenilor şi câştigătoarea premiului ”Observator Lyceum” a fost romanul scriitoarei
                        Tatiana Ţîbuleac, “Vara în care mama a avut ochii verzi”.
                    </Box>
                    <Typography variant="h4">
                        O viață mai bună = consumator informat – CIVITAS
                    </Typography>
                    <Box component="p">
                        În perioada 13 martie – 7 aprilie 2017, Colegiul Tehnic ”Mircea cel Bătrân”- Bucuresti derulează
                        Proiectul CIVITAS – ”O viață mai bună = consumator informat” în cadrul Parteneriatului Civic
                        pentru Educație – CIVITAS.
                    </Box>
                    <Box component="p">
                        Printre partenerii din cadrul acestui proiect se afla si Colegiul National “Liceul Spartacus”.
                    </Box>
                    <Box component="p">
                        Proiectul isi propune sa informeze elevii cu privire la dreptuile pe care le au in calitate
                        de consumatori si sa dezvolte in randul acestora deprinderi si abilitati de reponsabilitate
                        civica si protectie a drepturilor lor in relatia cu agentii economici. Acestia vor disemina
                        informatiile acumulate in cadrul unor campanii de informare in toate unitatile de invatamant
                        partenere.
                    </Box>
                </Container>
            </div>
        );
    }
}

export default experienta;

