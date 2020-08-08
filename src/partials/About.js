import React from 'react';
import hospital from '../assets/hospital.jpg';
import Button from '../components/Button';

export default function About() {
    return (
        <section className="about" id="about" name="about">
            <div className="container">
                <h1 className="about-title">Tentang Kami</h1>
                <hr />
                <div className="row justify-content-center mt-5">
                    <div className="col-lg">
                        <img src={hospital} width="600" className="img-fluid shadow" />
                    </div>
                    <div className="col-lg">
                        <h1 className="title">Mempermudah <span>Konsultasi</span> dengan Dokter</h1>
                        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet a sem eget porttitor.</p>

                        <Button className="btn btn-lg about-cta">Atur Jadwal</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
