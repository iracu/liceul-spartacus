import React from 'react';
import PageHead from './../../components/page-head/index';
import HeadImage from './../../../assets/page-head/about-head.jpg'
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

class elevi extends React.Component {

    constructor(props){
        super(props);
    }

    render() {

        return (
            <div className="about-wrapper">
                <PageHead class="about-head" title="elevi" imagePatch={HeadImage}/>
                <Container maxWidth="lg">
                    <Box component="p">
                        Ştim cu toţii cât de importantă e viaţa unui elev de liceu, ştim că, probabil e cea mai
                        importantă parte din viaţa fiecărui om. Ca elev te maturizezi, ca elev îţi pui bazele
                        cunoştinţelor, ca elev porneşti cu adevărat în viaţă.
                    </Box>
                    <Box component="p">
                        Începînd de pe 17 septembrie 1860 și pînă azi, scopul nostru a fost și este să oferim
                        învățămînt de calitate europeană, care să fie stimulat și prin condițiile optime pe care
                        le oferim elevilor. Elevii noştrii primesc educaţie în vederea formării unui bagaj de cunoştinţe,
                        desprinderi necesare continuării studiilor într-o formă superioară de învăţământ. Pentru aceasta,
                        prin educaţie fiecare elev va fi sprijinit să-şi cunoască şi să-şi dezvolte potenţialul în funcţie
                        de interesele, aptitudinile şi motivaţiile proprii.Totodată şcoala noastră îşi propune dezvoltarea
                        capacităţii de adaptare şi orientare a elevilor astfel încât fiecare absolvent să devină
                        “omul potrivit la locul potrivit”, persoană  activă, responsabilă şi receptivă la nevoile societăţii.
                    </Box>
                    <Box fontStyle="italic">
                        Elevii nostrii s-au remarcat prin participarea activă și încununată de succes la olimpiadele
                        naționale și internaționale, prin proiecte ecologice aplicate pe plan județean și prin standardul
                        moral pe care îl promovăm. Pentru a vă convinge de meritul liceului, vă rugăm să accesaţi paginile
                        dedicate activităţilor intreprinse de elevii liceului din proprie iniţiativă şi
                        rezultatele acestora la concursurile interne şi internaţionale.
                    </Box>
                    <Box>
                        Colegiul Național "Ștefan cel Mare" este excelență la propriu. Este stema care a ridicat
                        Suceava spre a fi cunoscută ca centru educativ în toată România și pe cele 3 continente
                        în care olimpicii noștri au acumulat medalii, mențiuni și participări la olimpiadele
                        internaționale și al căror număr nu este egalat de niciun alt liceu din Suceava. Iar prin
                        oameni ca Norman Manea, care a fost nominalizat la premiul Nobel, colegiul
                        nostru se poate compara ca valoare și cu unele centre universitare.
                    </Box>
                    <Box>
                        Coborînd puțin în timp, putem vedea că acest colegiu a fost un promotor activ al
                        valorilor naționale și culturale și că noi am făcut o tradiție din a fi una din
                        principalele referințe prin competența profesorilor și rezultatele elevilor. Și nu
                        sunt vorbe în vînt, sunt adevăruri pe care le observi dacă alegi să faci o vizită în
                        colegiu. Uniforma și poate atmosfera puțin oficială pot crea o impresie relativ greșită,
                        dar se observă că toate acestea se îmbină perfect cu muzica de la radio, cu spiritul elevilor
                        și cu zîmbetele profesorilor ce te întîmpină. Și dacă alegi să rămâi, locul acesta devine o a
                        doua casă, o sursă de cultură și lecții de viață. Căci în spatele tuturor premiilor se află
                        devotamentul profesorilor și conducerii școlii pentru a oferi ceea ce este mai bun pentru elevi.
                        Iar acest lucru s-a transformat în tradiție. Și ne mândrim cu ea, ne mândrim cu acest colegiu,
                        cu această mare familie a ștefaniștilor.
                    </Box>
                </Container>
            </div>
        );
    }
}

export default elevi;

