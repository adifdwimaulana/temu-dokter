import React from 'react';
import Header from '../partials/Header';
import Hero from '../partials/Hero';
import Statistic from '../partials/Statistic';
import About from '../partials/About';
import Doctor from '../partials/Doctor';
import Facility from '../partials/Facility';
import Testimonial from '../partials/Testimonial';
import Partner from '../partials/Partner';

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

    render() {
        return (
            <>
                <Header></Header>
                <Hero />
                <Statistic polyclinic={13} doctor={100} ambulance={8} />
                <About />
                <Doctor data={data} />
                <Facility />
                <Testimonial />
                <Partner />
            </>
        )
    }
}