import React from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg">
                            <h5 className="about-footer">Tentang temudokter</h5>
                            <p>Lorem ipsum dolor sit amet, ne nam purto nihil impetus, an facilisi accommodare sea</p>

                            <h5 className="information-footer">Informasi</h5>
                            <div className="footer-wrapper">
                                <Link className="link-footer" to="hero" spy={true} smooth={true} duration={500} style={{ cursor: 'pointer' }}>Home</Link>
                                <Link className="link-footer" offset={-120} to="about" spy={true} smooth={true} duration={500} style={{ cursor: 'pointer' }}>Tentang</Link>
                                <Link className="link-footer" offset={-120} to="doctor-list" spy={true} smooth={true} duration={500} style={{ cursor: 'pointer' }}>Dokter</Link>
                            </div>
                        </div>
                        <div className="col-lg">
                            <h5 className="about-footer">Contact Center</h5>
                            <p>Nam leo lorem, tincidunt id risus ut, ornare tincidunt naqunc sit amet.</p>

                            <div className="footer-wrapper">
                                <div className="icon-group">
                                    <FontAwesomeIcon icon={faCalendar} size="2x" className="icon" />
                                    <h5>Senin - Jumat, 08:00 - 22:00</h5>
                                </div>
                                <div className="icon-group">
                                    <FontAwesomeIcon icon={faPhone} size="2x" className="icon" />
                                    <h5>+62 82236056425</h5>
                                </div>
                                <div className="icon-group">
                                    <FontAwesomeIcon icon={faEnvelope} size="2x" className="icon" />
                                    <h5>temudokter@team.com</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg">
                            <h5 className="about-footer">Lokasi Kami</h5>
                            <p>Jl. Sukolilo Damai II no. 35 - Keputih - Sukolilo <br />Surabaya, 60111</p>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copyright">
                <h1>&copy; Copyright 2020 temudokter</h1>
            </div>
        </>
    )
}
