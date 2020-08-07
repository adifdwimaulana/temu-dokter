import React from 'react';
import hero from '../assets/hero-content-right.png';
import Button from '../components/Button';

export default function Hero() {
    return (
        <section id="hero" className="hero">
            <div className="hero-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <h1 className="hero-text">Platform Layanan Rumah Sakit Terbaik</h1>
                            <hr />
                            <div className="text-wrapper">
                                <h4 className="hero-text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet a sem eget porttitor. Nam nec dui suscipit, luctus ipsum eu, tristique mi. Quisque malesuada eleifend cursus. Suspendisse convallis, nunc quis consectetur ultricies, ipsum neque auctor ante, at tempor sapien tellus eu massa. Cras malesuada ante vel enim posuere, nec dictum erat tristique.</h4>
                                <Button className="btn btn-lg hero-cta" type="link" href="/about">Learn More</Button>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <img src={hero} alt="hero-content" width="600" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
