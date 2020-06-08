import React from 'react';
import PageHead from './../../components/page-head/index';
import HeadImage from './../../../assets/page-head/about-head.jpg'
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
// import './index.scss';

class bac extends React.Component {

    constructor(props){
        super(props);
    }

    render() {

        return (
            <div className="about-wrapper">
                <PageHead class="about-head" title="bac" imagePatch={HeadImage}/>
                <Container maxWidth="lg">
                    <Box component="p">
                        Examenul național de Bacalaureat 2020 se va desfăşura în conformitate cu prevederile
                         Metodologiei de organizare şi desfăşurare a examenului de Bacalaureat - 2011 (aprobată
                        prin ordinul ministrului educaţiei, cercetării, tineretului şi sportului nr. 4.799/2010
                        privind organizarea şi desfăşurarea examenului de Bacalaureat - 2011, cu modificările ulterioare),
                        şi cu prevederile ordinului de ministru atașat.
                    </Box>
                    <Box component="p">
                        Modele orientative de subiecte pentru examenul național de Bacalaureat 2020 vor fi disponibile începând cu luna noiembrie.
                    </Box>
                </Container>
            </div>
        );
    }
}

export default bac;

