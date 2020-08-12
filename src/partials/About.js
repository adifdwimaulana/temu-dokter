import React from 'react';
import hospital from '../assets/hospital.jpg';
import Button from '../components/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faHospitalUser, faFile } from '@fortawesome/free-solid-svg-icons';


export default function About() {
    return (
        <section className="about" id="about" name="about">
            <div className="container">
                <h1 className="about-title">Tentang Kami</h1>
                <hr className="center" style={{ float: " left" }} />
                <div style={{ marginTop: 60 }} >
                    <div className="row justify-content-center">
                        <div className="col-lg">
                            <div className="img-container">
                                <img src={hospital} width="600" className="img-fluid shadow about-img" />
                            </div>
                        </div>
                        <div className="col-lg desc">
                            <h1 className="title">Mempermudah <span>Konsultasi</span> dengan Dokter</h1>
                            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet a sem eget porttitor.</p>
                            <Button className="mt-4" isCTA>Atur Jadwal</Button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="doctors-content">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg">
                            <div className="wrapper">
                                <FontAwesomeIcon icon={faCalendar} size="4x" className="icon" />
                                <h1>Pilih Tanggal</h1>
                            </div>
                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu ligula rutrum, scelerisque risus sed, sagittis metus.</h4>
                        </div>
                        <div className="col-lg">
                            <div className="wrapper">
                                <FontAwesomeIcon icon={faHospitalUser} size="4x" className="icon" />
                                <h1>Temui Doktermu</h1>
                            </div>
                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu ligula rutrum, scelerisque risus sed, sagittis metus.</h4>
                        </div>
                        <div className="col-lg">
                            <div className="wrapper">
                                <FontAwesomeIcon icon={faFile} size="4x" className="icon" />
                                <h1>Dapatkan Report</h1>
                            </div>
                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu ligula rutrum, scelerisque risus sed, sagittis metus.</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
