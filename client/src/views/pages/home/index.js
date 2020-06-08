import React from 'react';
import apiUrl from "../../../apis/streams";
import HeroSection from './hero-section/index';
import Event from './event/index';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import SimpleSlider from './testimonial/index';
import Typography from "@material-ui/core/Typography";

class home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            heroSection: {},
            events: [],
            testimonials: []
        }
    }
    componentDidMount() {
        this.getHeroSectioData();
        this.getEventsSectionData();
        this.getTestimonialsData();
    }

    getHeroSectioData = async () => {
        const response = await apiUrl.get('heroSection');
        this.setState({heroSection: response.data});
    }

    getEventsSectionData = async () => {
        const response = await apiUrl.get('events');
        this.setState({events: response.data})
    }

    getTestimonialsData = async () => {
        const response = await apiUrl.get('testimonial');
        this.setState({testimonials: response.data})
    }

    renderEventsList = events => {
        return events.map( (event, index) => {
            return (
                <Event event={event} key={index} />   
            )
        })
    }

    render() {
        const { author, description } = this.state.heroSection;
        const events = this.state.events;
        const testimonial = this.state.testimonials;

        return (
            <div>
                <HeroSection author={author} description={description} />
                <Container className="home-about" mt={3}>
                    <Typography variant="h6">
                       Despre noi
                    </Typography>
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
                </Container>
                <Container>
                    <div className="events-section">
                        <h3 className="hero-title">Evenimente Populare</h3>
                        { this.renderEventsList(events) }
                    </div>
                </Container>
                <SimpleSlider  testimonial={testimonial}/>
            </div>
        );
    }
}

export default home;
