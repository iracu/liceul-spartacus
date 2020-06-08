import React from 'react';
import PageHead from './../../components/page-head/index';
import HeadImage from './../../../assets/page-head/about-head.jpg'
import Container from '@material-ui/core/Container';
import {Box} from "@material-ui/core";
// import './index.scss';

class despreNoi extends React.Component {

    constructor(props){
        super(props);
    }

    render() {

        return (
            <div className="about-wrapper">
                <PageHead class="about-head" title="DESPRE NOI" imagePatch={HeadImage}/>
                <Container maxWidth="lg">
                    <div className="app-content">
                        <Box component="p">
                            “Liceul Spartacus” este o scoala cu traditie de mai bine de un secol,
                            in care s-au educat si format generatii de intelectuali.
                        </Box>
                        <Box component="p">
                            “Cat despre noi (…) nu vom uita ca tinerimea e pagina inca alba pe care se va scrie
                            viitorul tarei, nu o vom lasa in voia canturilor, ci cu mani parintesti vom insemna pe ea,
                            dinainte, printr-o educatie curata, nationala, tot ceea ce poate asigura intr-o zi
                            propasirea si prosperitatea patriei.
                        </Box>
                        <Box component="p">
                            Astazi, Colegiul National  “Liceul Spartacus” este o institutie moderna de invatamant,
                            orientata spre formarea unor adulti a caror personalitate sa le permita integrarea cu
                            usurinta in cadrul valorilor europene si mondiale. Oportunitatile oferite de institutie
                            formarii abilitatilor, a stimularii talentelor si integrarii intereselor tinerilor elevi
                            sunt numeroase. Ca orice scoala de tip european, Colegiul National “Liceul Spartacus” acorda
                            sanse egale tuturor elevilor proveniti din medii sociale diferite, ale caror mentalitati
                            si culturi proprii sunt foarte diverse, si pe care ii stimuleaza in descoperirea traditiilor,
                            valorilor stiintifice si artistice romanesti in contextul larg al marii culturi universale.
                        </Box>
                        <Box component="p">
                            Ramanem cumva legati de scoala toata viata. In fiecare toamna, an dupa an, intram in curtea
                            impodobita a unei scoli, cu ganduri bune si emotii cunoscute: fosti elevi deveniti parinti
                            (plini de sfaturi si temeri), fosti copii deveniti adolescenti care schimba rasul cu surasul,
                            bunici cu nepoti jenati ce nu mai vor sa fie tinuti de mana, … si dascali ce
                            migalos si tenace, firul invizibil al cunoasterii.
                        </Box>
                        <Box component="p">
                            Elevi, profesori si parinti alcatuim cu totii o lume aparte. O lume care isi cauta neobosit
                            calea intr-un univers ce se schimba continuu si rapid. Nu este usor pentru scoala romaneasca
                            sa faca fata provocarilor si sa ofere solutii. Nu este usor sa remodelam chipul cunoasterii
                            si al educatiei si sa acceptam schimbari majore de mentalitate si perspective.
                        </Box>
                        <Box component="p">
                            Scoala, asemeni societatii romanesti in ansamblul ei, isi redefineste statutul, isi 
                            reorganizeaza resursele, isi refomuleaza principiile si isi reconsidera prioritatile.
                            Dar lupta sa isi pastreze intacta identitatea si menirea ei ultima: aceea de a-i lumina, 
                            de a-i ocroti, de a-i incuraja si de a-i valorifica pe aceia care constituie insasi ratiunea
                            educatiei de a exista: elevii, acesti neobositi si surprinzatori actori care-si solicita 
                            regizorul cu exuberanta si neascultare; dar care pleaca smerit fruntea in fata miracolului 
                            de valoare din bagheta maestrului. Invatacel si maestru deprind impreuna sa dialogheze pe 
                            teme si in termeni noi, intr-un timp al competentelor practice si imediate. Piata muncii, 
                            societatea civila, competitia reala, deschiderea oferita de oportunitatile de a studia in 
                            strainatate, contorsiunile economice de pretutindeni, … altfel spus tot acest NOU care ne 
                            confera o inedita perspectiva asupra societatii impune invatamantului romanesc modificari 
                            profunde si rapide. Dar oricat de profunde si rapide ar fi acestea, ele se fac tot cu sufletul
                            truditor al profesorului, cu setea de cunoastere si invatare a elevului, cu dragostea
                            neamagitoare a parintelui.
                        </Box>
                        <Box component="p">
                            In acest triunghi roditor germineaza valori traditionale: lumina cartilor, loialitatea,
                            toleranta, cinstea, credinta, seriozitatea, valori pe care Colegiului National „Liceul Spartacus”
                            le-a mostenit si le transmite elevilor sai.
                        </Box>
                    </div>
                </Container>
            </div>
        );
    }
}

export default despreNoi;
