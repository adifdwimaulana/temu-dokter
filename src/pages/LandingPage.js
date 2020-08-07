import React from 'react';
import Header from '../partials/Header';
import Hero from '../partials/Hero';

export default class LandingPage extends React.Component {
    render() {
        return (
            <>
                <Header {...this.props}></Header>
                <Hero />
            </>
        )
    }
}
