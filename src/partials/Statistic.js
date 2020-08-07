import React from 'react';
import clinic from '../assets/polyclinic-icon.png';
import doctor from '../assets/doctor-icon.png';
import ambulance from '../assets/ambulance-icon.png';

export default function Statistic(props) {
    return (
        <section className="statistic">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 main-statistic shadow bg-white">
                        <div className="row">
                            <div className="col-lg">
                                <div className="wrapper">
                                    <img src={clinic} alt="clinic" width="60" />
                                    <h3>{props.polyclinic}+ Poliklinik</h3>
                                </div>
                            </div>
                            <div className="col-lg">
                                <div className="wrapper">
                                    <img src={doctor} alt="clinic" width="60" />
                                    <h3>{props.doctor}+ Dokter</h3>
                                </div>
                            </div>
                            <div className="col-lg">
                                <div className="wrapper">
                                    <img src={ambulance} alt="clinic" width="80" height="80" />
                                    <h3>{props.ambulance}+ Ambulan</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
