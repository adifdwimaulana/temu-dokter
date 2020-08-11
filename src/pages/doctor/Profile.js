import React, { useState, useEffect } from 'react';

import Header from '../../partials/Header';
import Footer from '../../partials/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import Input from '../../components/Form/Input';
import Button from '../../components/Button';
import Modal from 'react-modal';

import { db, store } from '../../config';
import firebase from 'firebase';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillAlt, faEdit, faCalendarAlt, faImage } from '@fortawesome/free-solid-svg-icons';

import './profile.scss';

import user from '../../assets/flat-user.png';
import ovo from '../../assets/partners/ovo.png';

import DatePicker from 'react-datepicker';

Modal.setAppElement('body')

export default function DoctorProfile(props) {

    let id = ""

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [image, setImage] = useState(null)
    const [imageUrl, setImageUrl] = useState("")
    const [saldo, setSaldo] = useState(0)
    const [topUp, setTopUp] = useState(0)
    const [TTL, setTTL] = useState("")
    const [date, setDate] = useState(new Date())

    const [modalIsOpen, setIsOpen] = useState(false)

    const breadcrumbList = [
        { pageTitle: "Home", pageHref: "" },
        { pageTitle: "Dokter", pageHref: "" },
        { pageTitle: "Profile", pageHref: "" },
    ]

    useEffect(() => {
        id = props.match.params.id;
        console.log("Params = ", id)

        store.collection('doctors')
            .doc(id)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    let currentData = doc.data()
                    console.log(currentData.name)
                    console.log(currentData.email)
                    console.log(currentData.phone)
                    setName(currentData.name)
                    setEmail(currentData.email)
                    setPhone(currentData.phone)
                    setImageUrl(currentData.imageUrl)
                    if (currentData.saldo) {
                        setSaldo(currentData.saldo)
                    }
                }
            })

    }, [])

    const handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    };

    const handleSaldo = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        console.log("Value ", value)

        setTopUp(value)
    };

    const handleTopUp = () => {
        setSaldo(saldo + Number(topUp))
        console.log(id)
        store.collection('doctors')
            .doc(id)
            .set({
                saldo: saldo + Number(topUp)
            }, { merge: true })
            .then(() => alert("Top Up Berhasil !"))
            .catch(err => console.log(err))
    }

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

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    const handleDate = (date) => {
        console.log(date.toLocaleDateString())
        setTTL(date.toLocaleDateString())
    }

    const handleFile = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    const handleEditUser = () => {
        console.log("Name ", name)
        console.log("Email ", email)
        console.log("Phone ", phone)
        console.log("Id ", id)

        store.collection('doctors')
            .doc(id)
            .set({
                email,
                name,
                TTL,
                phone
            }, { merge: true })
            .then(() => console.log("Edit Data Berhasil"))
            .catch(err => console.log(err))
    }

    const handleImageUpload = () => {

    }

    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    <Breadcrumb data={breadcrumbList} style={{ float: 'left' }} />
                </div>
                <div className="container">
                    <div className="profile">
                        <div className="row">
                            <div className="col-2">
                                {
                                    imageUrl ? <img src={imageUrl} width="160" height="160" /> : <img src={user} width="160" height="160" style={{ backgroundClip: '#000' }} />
                                }
                            </div>
                            <div className="col-5" id="mid-part">
                                <div className="bio-wrapper">
                                    <h4>Data Diri</h4>
                                    <FontAwesomeIcon icon={faEdit} size="1x" className="icon" style={{ color: '#444' }} onClick={openModal} />
                                </div>
                                <div style={{ paddingLeft: 15, marginTop: -12, marginBottom: 8 }}>
                                    <hr width="600" className="line" />
                                </div>
                                <h4 className="profile-name">Nama   : {name}</h4>
                                <h4 className="profile-name">Email  : {email}</h4>
                                <h4 className="profile-name">Phone  : {phone}</h4>
                                {
                                    TTL == "" ? null :
                                        <h4 className="profile-name">Tanggal Lahir : {TTL}</h4>
                                }

                            </div>
                            <div className="col-5">
                                <div className="wrapper-consultation">
                                    <h4 className="konsultasi">Bulan Ini</h4>
                                    <h4 className="konsultasi-count">Konsultasi Selesai : 40</h4>
                                </div>
                                <div className="wrapper-consultation" style={{ marginTop: 8, backgroundColor: '#f2b879' }}>
                                    <h4 className="konsultasi">Minggu Ini</h4>
                                    <h4 className="konsultasi-count">Konsultasi Selesai : 8</h4>
                                </div>
                            </div>
                            <h4 className="profile-description">
                                dr. Abdul Khoifan, Sp.PD adalah seorang Dokter Spesialis Penyakit Dalam yang bekerja di Rumah Sakit Mitra Keluarga Bekasi dari tahun 2002 hingga sekarang. Beliau menempuh pendidikan Kedokteran Umum di Universitas Indonesia dan lulus tahun 1991, kemudian melanjutkan pendidikan Spesialis Penyakit Dalam di Universitas yang sama dan lulus pada tahun 2002. dr. Abdul Khoifan, Sp.PD memberikan layanan kesehatan yang meliputi Konsultasi dan layanan terkait Kebidanan dan Kandungan. Beliau terhimpun dengan Ikatan Dokter Indonesia (IDI).
                            </h4>

                        </div>
                        <hr width="100%" className="mt-3" />
                        <div className="row">
                            <div className="activity-card">
                                <h1 className="last-activity-title mb-4">Aktifitas Terakhir</h1>
                                <div className="activity-card-content mb-3 shadow">
                                    <h1 className="doctor-name">Adif Dwi Maulana</h1>
                                    <h4 className="doctor-polyclinic">Sesak Napas</h4>
                                    <h4 className="doctor-date">Selasa, 08/11/2020 10:00 A.M.</h4>
                                    <h4 className="doctor-report">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4>
                                    <h4 className="doctor-status">Status : <span>Menunggu Persetujuan</span></h4>
                                    <Button className="btn-doctor" >Setuju</Button>
                                </div>
                                <div className="activity-card-content mt-3 shadow">
                                    <h1 className="doctor-name">Kerent Vidia</h1>
                                    <h4 className="doctor-polyclinic">Vertigo</h4>
                                    <h4 className="doctor-date">Selasa, 08/9/2020 02:00 P.M.</h4>
                                    <h4 className="doctor-report">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4>
                                    <h4 className="doctor-status">Status : <span>Selesai</span></h4>
                                    <Button className="btn-doctor" >Selesai</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal-form">
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <form>
                            <h1 className="register-title">Edit Data Diri</h1>
                            <div className="form-group">
                                <Input
                                    name="email"
                                    label="Email"
                                    type="text"
                                    placeholder="Masukkan Email"
                                    onChange={e => setEmail(e.target.value)}
                                    className="form-control"
                                />
                            </div>

                            <div className="form-group">
                                <Input
                                    name="name"
                                    label="Nama"
                                    type="text"
                                    placeholder="Masukkan Nama Lengkap"
                                    onChange={e => setName(e.target.value)}
                                    className="form-control"
                                />
                            </div>

                            <div className="form-group">
                                <Input
                                    name="phone"
                                    label="Phone"
                                    type="text"
                                    placeholder="Masukkan No. Hp"
                                    onChange={e => setPhone(e.target.value)}
                                    className="form-control"
                                />
                            </div>

                            <div className="form-group">
                                <div className="row">
                                    <div className="col-lg">
                                        <label for="jadwal" className="form-title">Tanggal Lahir</label>
                                        <div className="date-picker-wrapper" name="jadwal">
                                            <FontAwesomeIcon icon={faCalendarAlt} size="2x" className="icon" style={{ color: '#444' }} />
                                            <DatePicker
                                                selected={date}
                                                value={date}
                                                onChange={date => handleDate(date)}
                                                dateFromat="LLL"
                                                showMonthDropdown
                                                showYearDropdown
                                                dropdownMode="scroll"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg">
                                        <label for="image" className="form-title">Upload Foto Profil</label>
                                        <div className="date-picker-wrapper">
                                            <FontAwesomeIcon icon={faImage} size="2x" className="icon" style={{ color: '#444' }} />
                                            <Input
                                                placeholder="Pilih File"
                                                name="image"
                                                type="file"
                                                onChange={handleFile}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <Button isCTA onClick={handleEditUser} >Edit</Button>
                    </Modal>
                </div>
            </div>
            <Footer />
        </>
    )
}
