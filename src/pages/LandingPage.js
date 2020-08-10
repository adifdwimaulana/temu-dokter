import React from 'react';
import Header from '../partials/Header';
import Hero from '../partials/Hero';
import Statistic from '../partials/Statistic';
import About from '../partials/About';
import Doctor from '../partials/Doctor';
import Facility from '../partials/Facility';
import Testimonial from '../partials/Testimonial';
import Partner from '../partials/Partner';
import Footer from '../partials/Footer';

import Button from '../components/Button';

import ScrollAnimation from 'react-animate-on-scroll';

import { db, store } from '../config';
import firebase from 'firebase';

const data = [
    {
        "nama": "Adif Dwi Maulana",
        "spesialis": "mati",
        "rating": 4
    },
    {
        "nama": "Abdul Khoifan",
        "spesialis": "tht",
        "rating": 4
    },
    {
        "nama": "Muhammad Ilham Perdana",
        "spesialis": "penyakit dalam",
        "rating": 4
    }
]

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null,
            isLogin: false
        }
    }

    componentDidMount() {
        let currentUser = firebase.auth().currentUser;

        if (currentUser) {
            console.log(currentUser.uid)
            this.setState({ user: currentUser })
        }
    }

    render() {
        const { user } = this.state
        console.log(user)
        return (
            <>
                <Header user={user} />
                <Hero />
                <Statistic polyclinic={13} doctor={100} ambulance={8} />
                <About />
                <Doctor data={data} />
                <Facility />
                <Testimonial />
                <Partner />
                <Footer />
            </>
        )
    }
}