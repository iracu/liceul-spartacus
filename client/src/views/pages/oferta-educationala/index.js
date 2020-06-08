import React from 'react';
import PageHead from './../../components/page-head/index';
import HeadImage from './../../../assets/page-head/about-head.jpg'
import {
    Paper,
    Table,
    Typography,
    Container,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableContainer,
    Box
} from "@material-ui/core";
import apiUrl from "../../../apis/streams";

// import './index.scss';

class ofertaEducationala extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            heroSection: {},
            admitere2018: [],
            admitere2019: [],
            numberOfClasses: [],
            table: {
                minWidth: 650,
            },
        }
    }

    componentDidMount() {
        this.getAdmitere2018();
        this.getAdmitere2019();
        this.getNumberOfClasses();
    }

    getNumberOfClasses = async () => {
        const response = await apiUrl.get('numberOfClasses');
        this.setState({numberOfClasses: response.data})
    }

    getAdmitere2018 = async () => {
        const response = await apiUrl.get('admitere2019');
        this.setState({admitere2019: response.data})
    }

    getAdmitere2019 = async () => {
        const response = await apiUrl.get('admitere2018');
        this.setState({admitere2018: response.data})
    }

    render() {

        return (
            <div className="about-wrapper">
                <PageHead class="about-head" title="oferta educationala" imagePatch={HeadImage}/>
                <Container maxWidth="lg">
                    <Typography variant="h6" mb={2}>
                        OFERTA EDUCAȚIONALĂ PENTRU ANUL ȘCOLAR 2020-2021
                    </Typography>
                    <Box component="div" mb={2}>
                        <TableContainer component={Paper} >
                            <Table className={this.state.table} size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Obiectul</TableCell>
                                        <TableCell align="center">Numarul de clase</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.numberOfClasses.map((row, index) => (
                                        <TableRow key={index}>
                                            <TableCell component="th" scope="row">
                                                {row.discipline}
                                            </TableCell>
                                            <TableCell align="center">{row.value}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>

                    <Box component="div" mb={2}>
                        <TableContainer component={Paper} mb={2}>
                            <Table className={this.state.table} size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Obiectul</TableCell>
                                        <TableCell align="center">Media</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.admitere2018.map((row, index) => (
                                        <TableRow key={index}>
                                            <TableCell component="th" scope="row">
                                                {row.discipline}
                                            </TableCell>
                                            <TableCell align="center">{row.value}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>

                    <Box component="div" mb={2}>
                        <TableContainer component={Paper} mb={2}>
                            <Table className={this.state.table} size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Obiectul</TableCell>
                                        <TableCell align="center">Media</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.admitere2018.map((row, index) => (
                                        <TableRow key={index}>
                                            <TableCell component="th" scope="row">
                                                {row.discipline}
                                            </TableCell>
                                            <TableCell align="center">{row.value}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Container>
            </div>
        );
    }
}

export default ofertaEducationala;
