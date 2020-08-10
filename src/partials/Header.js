import React, { useState, useEffect, useRef } from 'react';
import Button from '../components/Button';
import BrandIcon from './BrandIcon';

import { db, store } from '../config';
import firebase from 'firebase';

export default function Header(props) {

    const [isNavCollapsed, setIsnavCollapsed] = useState(true)
    const handleNavCollapse = () => setIsnavCollapsed(!isNavCollapsed)

    const [isDropdownCollapse, setIsDropdownCollapse] = useState(false)
    const handleDropdown = () => setIsDropdownCollapse(!isDropdownCollapse)

    const [url, setUrl] = useState("")

    useEffect(() => {
        let user = firebase.auth().currentUser;
        console.log("User ", user)
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
        console.log("Url =", url)
    })

    const handleLogout = () => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                alert("Logout Berhasil !");
                window.location.reload();
            })
            .catch(err => console.log(err));
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

                            {
                                firebase.auth().currentUser == null ?
                                    <li className="nav-item">
                                        <Button className="nav-link" type="link" href="/login">
                                            Login
                                        </Button>
                                    </li> :
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" id="dropdownMenu" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded={!isDropdownCollapse ? true : false} onClick={handleDropdown}>Akun</a>
                                        <div className={`dropdown-menu${isDropdownCollapse ? " show" : ""}`} aria-labelledby="dropdownMenu">
                                            <Button className="dropdown-item" type="link" href={url}>Profil</Button>
                                            <Button className="dropdown-item" type="link" href="/" onClick={handleLogout}>Logout</Button>
                                        </div>
                                    </li>
                            }
                        </ul>
                    </div>
                </nav>
            </div>
        </header >
    )
}
