import React from 'react';
import Header from '../partials/Header';
import Hero from '../partials/Hero';
import Statistic from '../partials/Statistic';
import About from '../partials/About';

export default class LandingPage extends React.Component {
    render() {
        return (
            <>
                <Header {...this.props}></Header>
                <Hero />
                <Statistic polyclinic={13} doctor={100} ambulance={8} />
                <About />
            </>
        )
    }
}