import React from 'react';
import Container from '@material-ui/core/Container';

import './hero.scss';

const HeroSection = props => {
    const { author, description} = props;

    return (
        <div className="hero-section">
            <Container>
                <div className="wrapper">
                    <p>{ description }</p>
                    <span> { author }</span>
                </div>
            </Container>
        </div>
    )
}

export default HeroSection
