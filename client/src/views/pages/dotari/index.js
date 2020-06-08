import React from 'react';
import PageHead from './../../components/page-head/index';
import HeadImage from './../../../assets/page-head/about-head.jpg'
import Toate from './../../../assets/toate.png'
import Grid from '@material-ui/core/Grid';
import {Box, List, ListItemText, ListItem, Container} from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";

class index extends React.Component {

    constructor(props){
        super(props);
    }

    render() {

        return (
            <div className="about-wrapper">
                <PageHead class="about-head" title="dotari" imagePatch={HeadImage}/>
                <Container maxWidth="lg">
                    <div className="app-content">
                        <Box component="p">
                            Colegiul National “Liceul Spartacus” are o baza materiala deosebita, dispusa in cadrul celor
                            doua corpuri de cladire, care se intind pe o suprafata de 3.905 mp:
                        </Box>
                        <List>
                            <ListItem>
                                <ListItemText primary="sali de clasa 30"/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="cabinete 18"/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="laboratoare 12"/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="sali de sport 2"/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="baza sportiva in aer liber cuprinzand terenuri de: baschet (2),
                                 handbal, pista de alergari 50 m, groapa pentru sariturura in lungime cu elan, pista
                                  pentru alergarea de rezistenta;"/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="o biblioteca cu 44.000 de volume si cu un randament de 1.000 de
                                 cititori pe an"/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="o sala de lectura moderna"/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="o sala de festivitati"/>
                            </ListItem>
                        </List>
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <Box component="p">
                                    Ca facilitati oferite elevilor enumeram: un bufet si un cabinet medical.
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <CardMedia
                                    component="img"
                                    height="auto"
                                    image={Toate}
                                />
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
        );
    }
}

export default index;

