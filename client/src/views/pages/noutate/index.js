import React from 'react';
import PageHead from './../../components/page-head/index';
import HeadImage from './../../../assets/page-head/about-head.jpg'
import Container from '@material-ui/core/Container';
import apiUrl from "../../../apis/streams";
import {Typography, Grid, Box} from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";

class noutate extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            article: [],
            plays: '',
            makeStyles: {
                root: {
                    maxWidth: 345,
                },
                media: {
                    height: 340,
                },
            }
        }
    }

    componentDidMount() {
        this.getNewsData();
    }

    getNewsData = async () => {
        const response = await apiUrl.get('news');
        const article = response.data
            .find(data => data.title.toLowerCase() === this.props.location.pathname
                .replace('/noutate/', '').toLowerCase())
        this.setState({article});
    }

    render() {
        const {article} = this.state;

        return (
            <div className="about-wrapper">
                <PageHead class="about-head" title="noutati" imagePatch={HeadImage}/>
                <Container maxWidth="lg">
                    <Box component="h3" mb={2}>
                        {article.title}
                    </Box>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <CardMedia
                                component="img"
                                height="500"
                                image={article.image}
                                title={article.title}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                                dangerouslySetInnerHTML={{__html: article.description}}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        );
    }
}


export default noutate;
