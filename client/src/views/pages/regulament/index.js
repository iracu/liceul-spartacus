import React from 'react';
import PageHead from './../../components/page-head/index';
import HeadImage from './../../../assets/page-head/about-head.jpg'
import Container from '@material-ui/core/Container';
import {Box} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
// import './index.scss';

class regulament extends React.Component {

    constructor(props){
        super(props);
    }

    render() {

        return (
            <div className="about-wrapper">
                <PageHead class="about-head" title="regulament" imagePatch={HeadImage}/>
                <Container maxWidth="lg">
                    <Box component="p">
                        1. Calitatea de a fi elev al Colegiului Naţional „Ştefan cel Mare” înseamnă implicit adoptarea
                        unui comportament civilizat, atât în şcoală cât şi în afara acesteia.
                        Prin sintagma „comportament civilizat” înţelegem:
                    </Box>
                    <List>
                        <ListItem>
                            <ListItemText primary="Respectul faţă de colegi, profesori şi personalul nedidactic al şcolii;"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Evitarea oricăror forme de violenţă şi agresiune;"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Evitarea distrugerii bunurilor şcolii sau  ale colegilor;"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Responsabilitate în îndeplinirea sarcinilor şcolare asumate şi
                            implicare în rezolvarea problemelor apărute în viaţa clasei/şcolii;"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Adoptarea unei atitudini sincere şi oneste în orice situaţie,
                             în mod deosebit în cazul incidentelor;"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Respectarea şi identificarea cu valorile pe care le promovează
                             şcoala impune o bună pregătire pentru toate orele de curs."/>
                        </ListItem>
                    </List>
                    <Box component="p">
                        2.1. Elevii se pot organiza sau pot participa la organizaţii deja existente, precum Consiliul
                        Elevilor, Asociaţia Profesioniştilor Colegiului Naţional „Ştefan cel Mare”,
                        Asociaţia Sportivă „Ştefan cel Mare”etc.
                    </Box>
                    <Typography variant="h6">
                        Consiliul elevilor:
                    </Typography>
                    <Box component="p">
                        2.2. Consiliul elevilor va reprezenta elevii din fiecare clasă în şedinţele Consiliului de
                        administraţie al Colegiului, prin reprezentantul lor în această structură.
                    </Box>
                    <Typography variant="h6">
                        Activitati extracurriculare:
                    </Typography>
                    <Box component="p">
                        3.1. Elevii pot contribui la realizarea activităţilor/ programelor educative difuzate prin
                        intermediul studioului de radio «Ştefan cel Mare», la organizarea de spectacole, editarea
                        de reviste, participarea la proiecte şi la alte activităţi prin care să-şi exprime potenţialul
                        cultural, artistic, ştiinţific şi sportiv.
                    </Box>
                    <Box component="p">
                        3.2. În afara cazurilor motivate, elevii au obligaţia să participe  la activităţile
                        exracurriculare organizate de instituţie.
                    </Box>
                    <Typography variant="h6">
                        Tinuta elevilor
                    </Typography>
                    <Box component="p">
                        4.1. Elevii sunt obligaţi să poarte ţinuta reprezentativă a colegiului,
                        care se compune din: sacou, pantalon sau fustă de culoare bleumarin, cămaşă
                        sau bluză de o singură culoare: alb/ albastru, emblema/insigna cu insemnele
                        colegiului, precum şi carnetul de elev care este  legitimaţia sa.
                        Pot fi utilizate ecusoane sau carduri personalizate.
                    </Box>
                    <Box component="p">
                        4.2. Elevii au datoria de a avea asupra lor carnetul de elev şi de a-l prezenta profesorului
                        evaluator. Totodată, carnetul de elev este instrument de legitimare a elevului.
                    </Box>
                    <Typography variant="h6">
                        Sanctiuni in cazul nerespectarii regulamentului:
                    </Typography>
                    <Box component="p">
                        5.1. Elevii nu au voie să lipsească nemotivat de la cursuri. Atunci când există suspiciuni
                        bazate pe motive întemeiate, că un certificat medical a fost obţinut dolosiv, acesta nu va
                        fi luat în considerare, iar cazul va fi analizat în Consiliul de administraţie.
                    </Box>
                    <Box component="p">
                        5.2. Absenţele nemotivate pot fi obiectul unor sancţiuni, conform ROFUIP.
                    </Box>
                    <Box component="p">
                        6.1. În cazul în care un elev deteriorează sau distruge un bun al şcolii sau al altui elev,
                        vinovatul va înlocui bunul cu altul nou sau în aceeaşi stare de funcţionare. Sancţiunile pentru
                        astfel de fapte nu vor fi excluse. În caz că vinovaţii nu pot fi identificaţi, sarcina
                        recuperării bunurilor revine clasei la care a avut loc evenimentul.
                    </Box>
                    <Box component="p">
                        6.2. Pentru anumite abateri, elevul poate fi transferat la o altă clasă din colegiu sau la
                        altă instituţie de învăţământ.
                    </Box>
                    <Typography variant="h6">
                        Reglementari privind telefoanele mobile:
                    </Typography>
                    <Box>
                        7. Elevii sunt obligaţi să închidă telefoanele mobile pe parcursul desfăşurării orelor de
                        curs, în caz contrar, telefoanele vor fi reţinute de către profesor şi predate conducerii
                        şcolii, pe baza unui  proces – verbal; telefonul va fi returnat exclusiv  părinţilor elevului
                        în cauză. În caz de recidivă, elevului i se va scădea nota la purtare iar telefonul va fi
                        reţinut până la sfârşitul semestrului.
                    </Box>
                    <Typography variant="h6">
                        Recompense pentru elevi:
                    </Typography>
                    <Box component="p">
                        8. Elevii cu rezultate foarte bune vor fi recompensaţi cu premii, cu tabere gratuite şi cu
                        următoarele distincţii:
                    </Box>
                    <List>
                        <ListItem>
                            <ListItemText primary="Titlul ”ELEVUL ANULUI”;"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Diploma şi placheta de onoare (pentru promovarea imaginii instituţiei
                             la nivel naţional şi internaţional);"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Diplomă de excelenţă ( pentru rezultate deosebite la concursuri şi
                            competiţii şcolare);"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Diploma de merit;"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="- Diploma de premiere la finele anului şcolar şi alte distincţii."/>
                        </ListItem>
                    </List>
                    <Box component="p">
                        Distincţiile menţionate pot fi acordate şi cadreler didactice.
                    </Box>
                    <Box component="p">
                        In anexa 1 sunt precizate criteriile si punctele care pot fi obţinute la concursurile şcolare
                        curriculare şi extracurriculare.
                    </Box>
                    <Typography variant="h6">
                        Scutire in cazul participarii la olimpiade
                    </Typography>
                    <Box component="p">
                        9.1 Elevii ce vor reprezenta colegiul la concursuri naţionale sau teritoriale avizate de
                        minister vor avea scutire de frecvenţă  pe o perioadă de:
                    </Box>
                    <List>
                        <ListItem>
                            <ListItemText primary="două zile pentru faza locală;"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="o săptămână, pentru faza judeţeană;"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="două săptămâni, pentru faza naţională."/>
                        </ListItem>
                    </List>
                    <Box component="p">
                        9.2. Elevii care vor reprezenta colegiul la alte concursuri vor avea scutire de frecvenţă 
                        pe o perioadă de:
                    </Box>
                    <List>
                        <ListItem>
                            <ListItemText primary="două zile pentru faza judeţeană sau interjudeţeană;"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="o săptămână pentru faza naţională."/>
                        </ListItem>
                    </List>
                </Container>
            </div>
        );
    }
}

export default regulament;
