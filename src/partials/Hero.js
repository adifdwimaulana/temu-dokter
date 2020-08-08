import React from 'react';
import hero from '../assets/hero-content-right.png';
import Button from '../components/Button';

export default function Hero() {
    return (
        <section id="hero" className="hero" name="hero">
            <div className="hero-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <h1 className="hero-text">Platform Layanan Rumah Sakit Terbaik</h1>
                            <hr className="line" style={{ float: "left" }} />
                            <div className="text-wrapper">
                                <h4 className="hero-text-sm mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet a sem eget porttitor. Nam nec dui suscipit, luctus ipsum eu, tristique mi. Quisque malesuada eleifend cursus. Suspendisse convallis, nunc quis consectetur ultricies, ipsum neque auctor ante, at tempor sapien tellus eu massa. Cras malesuada ante vel enim posuere, nec dictum erat tristique.</h4>
                                <Button isCTA type="link" href="/doctor">Get Started</Button>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <img src={hero} alt="hero-content" width="600" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
