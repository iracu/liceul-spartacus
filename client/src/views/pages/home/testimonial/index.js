import React, { Component } from "react";
import Slider from "react-slick";
import Container from "@material-ui/core/Container"
import './testimonial.scss'

export default class MultipleItems extends Component {

    renderTestmonialsList = () => {
        return this.props.testimonial.map(item => {

            const {userPhoto, userName, role, id} = item
            return(
                <div key={id}>
                    <div className="testimonial">
                        <img src={userPhoto} alt=""/>
                    </div>
                    <h3>{userName}</h3>
                    <span>{role}</span>
                </div>
            );
        })
    }


    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 2,
            centerPadding: 20
        };
        return (
            <div className="testimonials-section">
                <Container>
                    <h2>Cadre didactice</h2>
                    <Slider {...settings}>
                        {this.renderTestmonialsList()}
                    </Slider>
                </Container>
            </div>
        );
    }
}
