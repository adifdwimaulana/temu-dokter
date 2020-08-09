import React, { useState } from 'react';
import Button from '../components/Button';
import BrandIcon from './BrandIcon';

import { Link } from 'react-scroll';

export default function Header(props) {

    const [isNavCollapsed, setIsnavCollapsed] = useState(true)
    const handleNavCollapse = () => setIsnavCollapsed(!isNavCollapsed)

    const [isDropdownCollapse, setIsDropdownCollapse] = useState(false)
    const handleDropdown = () => setIsDropdownCollapse(!isDropdownCollapse)


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
                                <Link activeClass="active" className="nav-link" to="hero" spy={true} smooth={true} duration={500} style={{ cursor: 'pointer' }}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link activeClass="active" offset={-120} className="nav-link" to="about" spy={true} smooth={true} duration={500} style={{ cursor: 'pointer' }}>Tentang</Link>
                            </li>
                            <li className="nav-item">
                                <Link activeClass="active" offset={-120} className="nav-link" to="doctor-list" spy={true} smooth={true} duration={500} style={{ cursor: 'pointer' }}>Dokter</Link>
                            </li>
                            <li className="nav-item">
                                <Link activeClass="active" offset={-70} className="nav-link" to="partner" spy={true} smooth={true} duration={500} style={{ cursor: 'pointer' }}>Partner</Link>
                            </li>

                            {
                                props.isLogin == true ?
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" id="dropdownMenu" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded={!isDropdownCollapse ? true : false} onClick={handleDropdown}>Akun</a>
                                        <div className={`dropdown-menu${isDropdownCollapse ? " show" : ""}`} aria-labelledby="dropdownMenu">
                                            <Button className="dropdown-item" type="link" href="/user/profile">Profil</Button>
                                            <Button className="dropdown-item" type="link" href="/">Logout</Button>

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
