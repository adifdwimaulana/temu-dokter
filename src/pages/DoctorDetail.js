import React from 'react';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import Input from '../components/Form/Input';
import Button from '../components/Button';

import { db } from '../config';

import doctor from '../assets/doctor-2.jpg';
import hospital from '../assets/hospital.jpg';

import './doctor-detail.scss';
import Breadcrumb from '../components/Breadcrumb';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import DatePicker from 'react-datepicker';


export default class DoctorDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: null,
            isLogin: false,
            date: new Date()
        }
    }

    componentDidMount() {
        db.ref('/user').on('value', snap => {
            const data = snap.val();
            console.log(data)
            this.setState({ isLogin: data.isLogin, loading: data })
        })
    }

    handleDate(date) {
        console.log(date)
        this.setState({ date })
    }

    render() {
        const { isLogin, loading, date } = this.state
        if (loading == null) {
            return null;
        }

        const breadcrumbList = [
            { pageTitle: "Home", pageHref: "" },
            { pageTitle: "Dokter", pageHref: "/dokter" },
            { pageTitle: "Detail", pageHref: "" }
        ]

        return (
            <>
                <Header />
                <div className="container">
                    <div className="row">
                        <Breadcrumb data={breadcrumbList} style={{ float: 'left' }} />
                    </div>
                    <div className="row">
                        <div className="row doctor-detail-content">
                            <div className="img-container rounded-circle" width="120" height="120">
                                <img src={doctor} className="rounded-circle" width="120" height="120" />
                            </div>

                            <div className="doctor-detail">
                                <h1 className="doctor-name">dr. Adif Dwi Maulana</h1>
                                <h5 className="doctor-role">Dokter THT</h5>
                                <hr />
                                <h5 className="doctor-rating">Rating : <span>4.5/5.0</span></h5>
                            </div>
                        </div>

                        <div className="row">
                            <div className="appointment-detail">
                                <h5 className="doctor-description">dr. Adif Dwi Maulana, Sp.OG adalah seorang Dokter Spesialis Obstetri dan Ginekologi yang bekerja di Rumah Sakit Mitra Keluarga Bekasi dari tahun 2002 hingga sekarang. Beliau menempuh pendidikan Kedokteran Umum di Universitas Indonesia dan lulus tahun 1991, kemudian melanjutkan pendidikan Spesialis Kebidanan & Kandungan di Universitas yang sama dan lulus pada tahun 2002.   dr. Lina Meilina Pudjiastuti, Sp.OG memberikan layanan kesehatan yang meliputi Konsultasi dan layanan terkait Kebidanan dan Kandungan. Beliau terhimpun dengan Ikatan Dokter Indonesia (IDI).</h5>
                                <h1 className="appointment-title">Lokasi & Jadwal Praktik</h1>
                                <img src={hospital} className="mt-3" style={{ borderRadius: 8 }} width="300" />
                                <div className="location-wrapper">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" className="icon" style={{ color: '#444' }} />
                                    <h1 className="location">Jl. Sukolilo Damai 2 no. 35 - Surabaya</h1>
                                </div>
                                <div className="row">
                                    <form>
                                        <label for="jadwal" className="form-title">Pilih Jadwal</label>
                                        <div className="form-group">
                                            <div className="date-picker-wrapper" name="jadwal">
                                                <FontAwesomeIcon icon={faCalendarAlt} size="2x" className="icon" style={{ color: '#444' }} />
                                                <DatePicker
                                                    selected={date}
                                                    value={date}
                                                    onChange={date => this.handleDate(date)}
                                                    showTimeSelect
                                                    dateFormat="Pp"
                                                />
                                            </div>
                                        </div>
                                        <Button isCTA type="link" href="/payment" onClick={() => alert("Hello")} >Lanjutkan</Button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}