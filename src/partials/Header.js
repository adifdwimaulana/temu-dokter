import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import BrandIcon from './BrandIcon';

import { db } from '../config';

export default function Header(props) {

    const [isNavCollapsed, setIsnavCollapsed] = useState(true)
    const handleNavCollapse = () => setIsnavCollapsed(!isNavCollapsed)

    const [isDropdownCollapse, setIsDropdownCollapse] = useState(false)
    const handleDropdown = () => setIsDropdownCollapse(!isDropdownCollapse)

    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
        db.ref('/user').on('value', snap => {
            const data = snap.val();
            console.log(data)

            setIsLogin(data.isLogin)
        }, [])
    })

    const handleLogout = () => {
        db.ref('/user').update({
            isLogin: false
        })
    }

    return (
        <header className="spacing-sm shadow-sm p-1 bg-white rounded">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <BrandIcon />
                    <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#responsiveNavbar" aria-controls="responsiveNavbar" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`} id="responsiveNavbar">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Button className="nav-link" type="link" href="">
                                    Home
                                </Button>
                            </li>
                            <li className="nav-item">
                                <Button className="nav-link" type="link" href="/doctor">
                                    Cari Dokter
                                </Button>
                            </li>
                            {/* <li className="nav-item">
                                <Button className="nav-link" type="link" href="/polyclinic">
                                    Info Poliklinik
                            </Button>
                            </li> */}

                            {
                                isLogin == true ?
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" id="dropdownMenu" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded={!isDropdownCollapse ? true : false} onClick={handleDropdown}>Akun</a>
                                        <div className={`dropdown-menu${isDropdownCollapse ? " show" : ""}`} aria-labelledby="dropdownMenu">
                                            <Button className="dropdown-item" type="link" href="/user/profile">Profil</Button>
                                            <Button className="dropdown-item" type="link" href="/" onClick={handleLogout}>Logout</Button>

                                        </div>
                                    </li> :
                                    <li className="nav-item">
                                        <Button className="nav-link" type="link" href="/login">
                                            Login
                                        </Button>
                                    </li>
                            }
                        </ul>
                    </div>
                </nav>
            </div>
        </header >
    )
}
