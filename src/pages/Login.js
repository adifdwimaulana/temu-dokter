import React from 'react';
import Button from '../components/Button';
import Input from '../components/Form/Input';

import './login.scss';


export default class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {
                username: "",
                password: ""
            },
            errors: {},
            submitted: false
        };
    }

    handleChange = event => {
        const { user } = this.state;
        event.preventDefault();
        user[event.target.name] = event.target.value;
        this.setState({ user });
    };

    handleLogin = () => {
        this.props.isLogin.push("/", {
            isLogin: true
        })
    }

    render() {
        const { user: { username, password }, submitted, erros } = this.state;
        return (
            <>
                <div className="login">
                    <div className="row justify-content-center">
                        <div className="input-group shadow-lg">
                            <form>
                                <h1 className="login-title">Selamat Datang di temudokter</h1>
                                <div className="form-group">
                                    <Input
                                        name="name"
                                        label="Username"
                                        type="text"
                                        placeholder="Masukkan Username"
                                        onChange={this.handleChange}
                                        value={username}
                                        required
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
                                        value={username}
                                        required
                                        className="form-control"
                                    />
                                </div>
                                <div className="btn-wrapper">
                                    <Button className="btn" type="link" href="/" onClick={this.handleLogin} style={{ backgroundColor: '#4ACCD1', color: '#fff' }}>Masuk Sebagai Tamu</Button>
                                    <Button className="btn btn-secondary" type="link" href="/doctor/account">Masuk Sebagai Dokter</Button>
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