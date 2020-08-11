import React from 'react';
import Button from '../components/Button';
import Input from '../components/Form/Input';

import './login.scss';

import firebase from 'firebase';
import { db, store } from '../config';


export default class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            errorMessage: null
        }
    }

    handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    };

    userLogin = (email, password) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((data) => {
                console.log(data.user.uid);
                alert("Login Berhasil !");
            })
            .catch(error => {
                console.log(error)
                this.setState({ errorMessage: error })
            })

        return this.props.history.push("/")
    }

    doctorLogin = (email, password) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((data) => {
                console.log(data.user.uid);
                alert("Login Berhasil !");
            })
            .catch(error => {
                console.log(error)
                this.setState({ errorMessage: error })
            })
        return this.props.history.push("/")
    }

    render() {
        const { email, password, error } = this.state;
        return (
            <>
                <div className="login">
                    <div className="row justify-content-center">
                        <div className="input-group shadow-lg">
                            <form>
                                <h1 className="login-title">Selamat Datang di temudokter</h1>
                                <div className="form-group mt-4">
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
                                        name="password"
                                        label="Password"
                                        type="password"
                                        placeholder="Masukkan Password"
                                        onChange={this.handleChange}
                                        className="form-control"
                                    />
                                </div>
                                <div className="btn-wrapper">
                                    <Button className="btn" onClick={() => this.userLogin(email, password)} style={{ backgroundColor: '#4ACCD1', color: '#fff' }}>Masuk Sebagai Tamu</Button>
                                    <Button className="btn btn-secondary" type="link" onClick={() => this.doctorLogin(email, password)}>Masuk Sebagai Dokter</Button>
                                </div>
                                <h4 className="register-to">Belum punya akun ? <span><Button className="register-to" type="link" href="/register">Daftar di sini</Button></span></h4>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}