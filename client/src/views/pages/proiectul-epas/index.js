import React from 'react';
import PageHead from './../../components/page-head/index';
import HeadImage from './../../../assets/page-head/about-head.jpg'
import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
// import './index.scss';

class proiectulEpas extends React.Component {

    constructor(props){
        super(props);
    }

    render() {

        return (
            <div className="about-wrapper">
                <PageHead class="about-head" title="proiectul epas" imagePatch={HeadImage}/>
                <Container maxWidth="lg">
                    <div className="app-content">
                        <Typography variant="h4">
                            DESCRIEREA ACTIVITĂȚILOR:
                        </Typography>
                        <Typography variant="h6">
                            Activitatea 1 – Dezbatere despre Uniunea Europeană (dacă s-a realizat mai mult de 1
                            activitate se trec toate activitățile din această categorie)
                        </Typography>
                        <Box fontWeight="fontWeightBold">
                            Activitatea I. Titlu: “Romania in contextul Uniunii Europene”
                        </Box>
                        <span>
                            Data : 29 nov. 2019
                        </span>
                        <p>
                            Număr și tip de participanți: cel putin 600 elevi ai scolii si invitati din alte scoli
                        </p>
                        <p>
                            Loc de desfășurare: CN” IL Caragiale”, Bucuresti
                        </p>
                        <p>
                            Scurtă descriere: Romania si Uniunea Europeana in desene:catedra de istorie si ambasadorii
                            juniori au intins role de hartie  pe toate holurile institutiei si au dat startul unor
                            desene despre Romania in Uniunea Europeana. Elevii scolii si invitatii au continuat aceste
                            desene, fiind realizate adevarate scene despre Romania si Europa.
                        </p>
                        <Box fontWeight="fontWeightBold">
                            Activitatea II. Titlu: Principalele proiecte ale secolului Xxce au stat la baza Uniunii Europene
                        </Box>
                        <span>
                            Data : 23 Ianuarie
                        </span>
                        <p>
                            Număr și tip de participanți: 240 elevi
                        </p>
                        <p>
                            Loc de desfășurare: CN” IL Caragiale”, Bucuresti, sala de festivitati
                        </p>
                        <p>
                            Scurtă descriere: Ambasadorii juniori si seniori au realizat doua sesiuni de dezbateri si
                            informare cu urmatoarele teme:
                        </p>
                        <List>
                            <ListItem>
                                <ListItemText primary="Principiile formarii Uniunii Europene si ce prevedea formarea
                                uniunii"/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Europa de Est vs. Europa de Est"/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Europenizarea Romaniei- proiecte care arata ce avantaje are
                                Romania ca parte a UE si participarea Romaniei la formarea uniunii"/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="– Unirea Mica si procesele care au dus la unirea Tarii 
                                Romanesti cu Moldova"/>
                            </ListItem>
                        </List>
                        <Box fontWeight="fontWeightBold">
                            Activitatea III. Titlu: Organizarea Punctului de Informare EPAS
                        </Box>
                        <span>
                            Data : 15 Ianuarie – 23 februarie
                        </span>
                        <p>
                            Număr și tip de participanți: 25 elevi si 6 profesori
                        </p>
                        <p>
                            Loc de desfășurare: CN” IL Caragiale”, Bucuresti
                        </p>
                        <p>
                            Scurtă descriere: Dupa ce am primit materialele de la BLPE, am organizat initial
                            Punctul de Informare EPAS la sediul de Proiecte si Programe. Apoi am lau decizia
                            de a reorganiza acesta la Biblioteca, Sala de lectura pentru un acces mai facil pentru
                            elevi si profesori. Astfel Juniorii ambasadori au popularizat prin afise si pliante
                            concepute de ei punctul de informare al proiectului si au oferit informatii despre proiect
                            si despre materialele informative existente. Seniorii ambasadori din catedra de istorie au
                            prezentat in perioada  15 Ianuarie – 23 februarie juniorilor ambasadori si altor elevi
                            primele trei module de informare.
                        </p>
                        <Typography variant="h6">
                            Activitatea 2 – Activitate dedicată Parlamentului European (dacă s-a realizat mai mult
                            de 1 activitate se trec toate activitățile din această categorie)
                        </Typography>
                        <Box fontWeight="fontWeightBold">
                            Activitatea I. Titlu:Campania de informare “ EU si UE”
                        </Box>
                        <span>
                            Data : 24- 26 februarie 2020
                        </span>
                        <p>
                            Număr și tip de participanți: 360
                        </p>
                        <p>
                            Loc de desfășurare: clase din CN” IL Caragiale”, Bucuresti
                        </p>
                        <p>
                            Scurtă descriere: Ambasadorii juniori au sustinut o Campanie de informare la 12 clase
                            unde au predat informatii invatate din modulele parcurse si au facut dezbatere . Au
                            realizat materiale informative despre formarea UE si Institutiile UE si au jucat Cahoot
                            cu elevii participanti. De asemenea au realizat aceasta campanie si in Consiliul elevilor
                            unde s-au realizat si tragerile la sorti pentru realizarea evenimentului de Ziua Europei.
                        </p>
                        <Typography variant="h6">
                            Activitatea 3 – Diseminarea de informații (dacă s-a realizat mai mult de 1 activitate se
                            trec toate activitățile din această categorie)
                        </Typography>
                        <Box fontWeight="fontWeightBold">
                            Activitatea I. Titlu: Cultura muzicala a Spatiului European, Coordonator Director Andreia Bodea si Echipa Radio
                        </Box>
                        <span>
                            Data : 3 februarie – 8 Mai 2020
                        </span>
                        <p>
                            Număr și tip de participanți: 1285 elevi si 94 profesori beneficiaza de acest program
                        </p>
                        <p>
                            Loc de desfășurare: CN” IL Caragiale”, Bucuresti
                        </p>
                        <p>
                            Scurtă descriere: Propune celebrarea vastei culturi muzicale europene prin dedicarea unui
                            numar de zile pentru fiecare tara / regiune europeana cu o contributie majora in patrimoniul
                            cultural eurropean. In perioada 3 februarie – 8 Mai 2020 Grupul de Radio va difuza creatii
                            muzicale reprezentative pentru tarile din  Uniunea Europeana si Spatiul European, pe holurile
                            colegiului. De asemenea , echipa Radio  disemineaza informatii si activitati ale Juniorilor
                            ambasadori ai Proiectului EPAS.
                        </p>
                    </div>
                </Container>
            </div>
        );
    }
}


export default proiectulEpas;
