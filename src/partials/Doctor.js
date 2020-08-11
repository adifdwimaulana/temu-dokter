import React from 'react';

import doctor1 from '../assets/doctor-1.jpg';
import doctor2 from '../assets/doctor-2.jpg';
import doctor3 from '../assets/doctor-3.jpeg';

import Button from '../components/Button';

export default function Doctor(props) {

    const { data } = props
    console.log(data)

    const id = 1;

    return (
        <>
            <div className="doctor-list mt-5">
                <div className="container">
                    <h1 className="title">Dokter Kami</h1>
                    <hr className="line mt-3" style={{ marginLeft: 'auto', marginRight: 'auto' }} />
                    <div className="row justify-content-center mt-5">
                        <div className="col-lg">
                            <div class="card shadow">
                                <div className="img-wrapper">
                                    <img src={doctor1} className="card-img-top" height="260" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{data[0].nama}</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Button isCTA style={styles.button} type="link" href={`/dokter/${id}`}>Jadwalkan</Button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg">
                            <div class="card shadow">
                                <div className="img-wrapper">
                                    <img src={doctor2} className="card-img-top" height="260" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">dr. Abdul Khoifan, Sp.OG</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Button isCTA style={styles.button} type="link" href={`/dokter/${id}`}>Jadwalkan</Button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg">
                            <div class="card shadow">
                                <div className="img-wrapper">
                                    <img src={doctor3} className="card-img-top" height="260" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{data[2].nama}</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Button isCTA style={styles.button} type="link" href={`/doctor/${id}`}>Jadwalkan</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-4">
                        <Button className="shadow search-doctor" style={styles.doctor} isCTA type="link" href="/doctor">Lihat Semua Dokter</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

let styles = {
    button: {
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 6,
        fontWeight: 400
    },
    doctor: {
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 60,
        paddingRight: 60,
        borderRadius: 8,
        fontWeight: 700,
        marginTop: 40,
        letterSpacing: 0.8,
        marginLeft: 'auto',
        marginRight: 'auto',
        position: 'relative'
    }
}