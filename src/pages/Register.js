import React from 'react';
import Button from '../components/Button';
import Input from '../components/Form/Input';

import './register.scss';

import { db } from '../config';

export default class Register extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            email: ""
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

    registerUser = (name, email, password) => {
        db.ref('/user-list').push({
            name,
            email,
            password
        })
    }

    registerDoctor = (name, email, password) => {
        db.ref('/doctor-list').push({
            name,
            email,
            password
        })
    }

    render() {
        const { name, email, password } = this.state;
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
                                <div className="btn-wrapper">
                                    <Button className="btn" type="link" href="/login" onClick={() => this.registerUser(name, email, password)} style={{ backgroundColor: '#4ACCD1', color: '#fff' }}>Daftar Sebagai Tamu</Button>
                                    <Button className="btn btn-secondary" type="link" href="/login" onClick={() => this.registerDoctor(name, email, password)}>Daftar Sebagai Dokter</Button>
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