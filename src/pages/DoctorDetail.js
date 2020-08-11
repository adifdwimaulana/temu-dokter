import React, { useState, useEffect } from 'react';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import Button from '../components/Button';

import Modal from 'react-modal';

import { db, store } from '../config';
import firebase from 'firebase';

import doctor from '../assets/doctor-2.jpg';
import hospital from '../assets/hospital.jpg';

import './doctor-detail.scss';
import Breadcrumb from '../components/Breadcrumb';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import DatePicker from 'react-datepicker';

Modal.setAppElement('body')

export default function DoctorDetail() {

    const [date, setDate] = useState(new Date())
    const [modalIsOpen, setIsOpen] = useState(false)

    const [url, setUrl] = useState("")

    useEffect(() => {
        console.log("Date ", date)

        let user = firebase.auth().currentUser;

        if (user) {
            store.collection('users')
                .doc(user.uid)
                .get()
                .then((doc) => {
                    if (doc.exists) {
                        console.log("Exist")
                        let currentUrl = `/user/profile/${firebase.auth().currentUser.uid}`
                        setUrl(currentUrl)

                    } else {
                        console.log("Empty")
                        let currentUrl = `/doctor/profile/${firebase.auth().currentUser.uid}`
                        setUrl(currentUrl)
                    }
                })
        }
    })

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    const handleDate = (date) => {
        console.log(date)
        setDate(date)
    }

    const breadcrumbList = [
        { pageTitle: "Home", pageHref: "" },
        { pageTitle: "Dokter", pageHref: "/dokter" },
        { pageTitle: "Detail", pageHref: "" }
    ]

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };

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
                            <h1 className="doctor-name">dr. Abdul Khoifan, Sp.OG</h1>
                            <h5 className="doctor-role">Dokter THT</h5>
                            <hr />
                            <h5 className="doctor-rating">Rating : <span>4.5/5.0</span></h5>
                        </div>
                    </div>

                    <div className="row">
                        <div className="appointment-detail">
                            <h5 className="doctor-description">dr. Abdul Khoifan, Sp.PD adalah seorang Dokter Spesialis Penyakit Dalam yang bekerja di Rumah Sakit Mitra Keluarga Bekasi dari tahun 2002 hingga sekarang. Beliau menempuh pendidikan Kedokteran Umum di Universitas Indonesia dan lulus tahun 1991, kemudian melanjutkan pendidikan Spesialis Penyakit Dalam di Universitas yang sama dan lulus pada tahun 2002. dr. Abdul Khoifan, Sp.PD memberikan layanan kesehatan yang meliputi Konsultasi dan layanan terkait Kebidanan dan Kandungan. Beliau terhimpun dengan Ikatan Dokter Indonesia (IDI).</h5>
                            <h1 className="appointment-title">Lokasi & Jadwal Praktik</h1>
                            <img src={hospital} className="mt-3" style={{ borderRadius: 8 }} width="300" />
                            <div className="location-wrapper">
                                <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" className="icon" style={{ color: '#444' }} />
                                <h1 className="location">Jl. Sukolilo Damai 2 no. 35 - Surabaya</h1>
                            </div>
                            <div className="row">
                                <form>
                                    <label for="jadwal" className="form-title">Pilih Tanggal dan Jam</label>
                                    <div className="form-group">
                                        <div className="date-picker-wrapper" name="jadwal">
                                            <FontAwesomeIcon icon={faCalendarAlt} size="2x" className="icon" style={{ color: '#444' }} />
                                            <DatePicker
                                                selected={date}
                                                value={date}
                                                onChange={date => handleDate(date)}
                                                showTimeSelect
                                            />
                                        </div>
                                    </div>
                                    <Button isCTA type="link" href={url}  >Atur Jadwal</Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div className="modal" tabindex="-1">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Modal title</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <p>Modal body text goes here.</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
            <Footer />
        </>
    )
}