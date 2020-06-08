import React from 'react';
import PageHead from './../../components/page-head/index';
import HeadImage from './../../../assets/page-head/about-head.jpg'

import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import {Box} from "@material-ui/core";

// import './index.scss';

class misiuneaScolii extends React.Component {

    constructor(props){
        super(props);
    }

    render() {

        return (
            <div className="about-wrapper">
                <PageHead class="about-head" title="VIZIUNEA SI MISIUNEA SCOLII" imagePatch={HeadImage}/>
                <Container maxWidth="lg">
                    <div className="app-content">
                        <Box component="p">
                            Demersul nostru educațional, centrat pe nevoile elevului și pe integrarea profesională și
                            socio-culturală, are ca ideal dezvoltarea liberă, integrală și armonioasă a personalității elevilor.
                        </Box>
                        <Box component="p">
                            Absolvenții nostril dintotdeauna, dar mai ales din ultimii ani, sunt mărturia limpede a
                            unui manageriat inteligent, receptiv la nou, cu viziune.
                        </Box>
                        <Box component="p">
                            În ceea ce privește profesorii, liceul le oferă șansa de a-și face meseria în acord cu
                            cerințele unui învățământ modern, serios, competitiv.
                        </Box>
                        <Typography variant="h6">
                            Valorile și atitudinile care ne coordonează activitatea sunt:
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary="dorința de perfecționare continuă"/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="atitudinea proactivă"/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="calitatea informației"/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="responsabilitatea socială"/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="învățământ la standarde europene"/>
                            </ListItem>
                        </List>
                    </div>
                </Container>
            </div>
        );
    }
}


export default misiuneaScolii;
