import React from 'react';
import PageHead from './../../components/page-head/index';
import HeadImage from './../../../assets/page-head/about-head.jpg'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import apiUrl from "../../../apis/streams";
import {Link} from "react-router-dom";

class noutati extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            news: [],
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
        this.setState({news: response.data});
    }

    render() {

        return (
            <div className="about-wrapper">
                <PageHead class="about-head" title="noutati" imagePatch={HeadImage}/>
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        {this.state.news.map((article, index) => (
                            <Grid item xs={6} key={index}>
                                <Card className={this.state.makeStyles.root}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height={this.state.makeStyles.media.height}
                                            image={article.image}
                                            title={article.title}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {article.title}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="textSecondary"
                                                component="p"
                                                dangerouslySetInnerHTML={{__html: article.description.substring(0,250) + "..."}}
                                            />
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Link to={`/noutate/${article.title}`} params={article.id}>
                                            <Button size="small" color="primary">
                                                Afla mai mult
                                            </Button>
                                        </Link>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default noutati;
