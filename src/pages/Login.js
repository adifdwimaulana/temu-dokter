import React from 'react';
import Button from '../components/Button';
import Input from '../components/Form/Input';

import './login.scss';

import { db } from '../config';


export default class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            users: [],
            doctors: []
        }
    }

    componentDidMount() {
        let userArr = []
        db.ref('user-list').on('value', (snap) => {
            // console.log(snap.val())
            snap.forEach((item) => {
                let itemVal = item.val();
                console.log("item")
                console.log(itemVal)
                userArr.push(itemVal)
            })
        })

        console.log(userArr)
        this.setState({ users: userArr })
    }

    handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })

        // console.log(value)
    };

    userLogin = (email, password) => {
        const filter = "email";
        const keyword = email;

        if (email != "" && password != "") {
            const filteredData = this.state.users.filter((obj) => {
                return obj[filter] === keyword
            })

            if (filteredData[0].email == email && filteredData[0].password == password) {
                console.log("Berhasil")
                db.ref('/user').update({
                    isLogin: true
                })
                return this.props.history.push("/")
            } else {
                return this.props.history.push("/login")
            }
        }
    }

    doctorLogin = (email, password) => {
        console.log(email)
        console.log(password)
    }

    render() {
        const { email, password, submitted, erros } = this.state;
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
                                    <Button className="btn" type="link" href="#" onClick={() => this.userLogin(email, password)} style={{ backgroundColor: '#4ACCD1', color: '#fff' }}>Masuk Sebagai Tamu</Button>
                                    <Button className="btn btn-secondary" type="link" onClick={() => this.doctorLogin(email, password)} href="/doctor/account">Masuk Sebagai Dokter</Button>
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