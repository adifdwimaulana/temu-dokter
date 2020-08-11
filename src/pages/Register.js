import React from 'react';
import Button from '../components/Button';
import Input from '../components/Form/Input';
import firebase from 'firebase';

import './register.scss';

import { db, store } from '../config';

export default class Register extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            password: "",
            phone: "",
            errorMessage: null

        };
    }

    handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })

        console.log(value)
    };

    registerUser = (name, email, password, phone) => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                store.collection('users').doc(firebase.auth().currentUser.uid).set({
                    name,
                    email,
                    password,
                    phone
                })
                alert("Registrasi Berhasil")
            })
            .catch(error => console.log(error))
        return this.props.history.push("/")
    }

    registerDoctor = (name, email, password, phone) => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                store.collection('doctors').doc(firebase.auth().currentUser.uid).set({
                    name,
                    email,
                    password,
                    phone
                })
                alert("Registrasi Berhasil")
            })
            .catch(error => console.log(error))
        return this.props.history.push("/")
    }

    render() {
        const { name, email, password, phone, errorMessage } = this.state;
        return (
            <>
                <div className="register">
                    <div className="row justify-content-center">
                        <div className="input-group shadow-lg">
                            <form>
                                <h1 className="register-title">Selamat Datang di temudokter</h1>

                                <div className="form-group">
                                    <Input
                                        name="email"
                                        label="Email"
                                        type="text"
                                        placeholder="Masukkan Email"
                                        onChange={this.handleChange}
                                        className="form-control"
                                    />
                                </div>

                                <div className="form-group">
                                    <Input
                                        name="name"
                                        label="Nama"
                                        type="text"
                                        placeholder="Masukkan Nama Lengkap"
                                        onChange={this.handleChange}
                                        className="form-control"
                                    />
                                </div>

                                <div className="form-group">
                                    <Input
                                        name="password"
                                        label="Password"
                                        type="password"
                                        placeholder="Masukkan Password"
                                        onChange={this.handleChange}
                                        className="form-control"
                                    />
                                </div>

                                <div className="form-group">
                                    <Input
                                        name="phone"
                                        label="Phone"
                                        type="text"
                                        placeholder="Masukkan No. Hp"
                                        onChange={this.handleChange}
                                        className="form-control"
                                    />
                                </div>

                                <div className="btn-wrapper">
                                    <Button className="btn" onClick={() => this.registerUser(name, email, password, phone)} style={{ backgroundColor: '#4ACCD1', color: '#fff' }}>Daftar Sebagai Tamu</Button>
                                    <Button className="btn btn-secondary mt-2" onClick={() => this.registerDoctor(name, email, password, phone)}>Daftar Sebagai Dokter</Button>
                                </div>
                                <h4 className="register-btn"><span><Button className="register-btn" type="link" href="/">Kembali ke <span>Halaman Utama</span></Button></span></h4>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}