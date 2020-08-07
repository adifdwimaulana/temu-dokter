import React from 'react';
import Button from '../components/Button';
import BrandIcon from './BrandIcon';

export default function Header(props) {

    const getNavLinkClass = (path) => {
        return props.location.pathname == path ? " active" : ""
    }

    return (
        <header className="spacing-sm shadow-sm p-1 bg-white rounded">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <BrandIcon />
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#responsiveNavbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="responsiveNavbar">
                        <ul className="navbar-nav ml-auto">
                            <li className={`nav-item${getNavLinkClass("/")}`}>
                                <Button className="nav-link" type="link" href="/">
                                    Home
                                </Button>
                            </li>
                            <li className={`nav-item${getNavLinkClass("/about")}`}>
                                <Button className="nav-link" type="link" href="/about">
                                    About
                                </Button>
                            </li>
                            <li className={`nav-item${getNavLinkClass("/services")}`}>
                                <Button className="nav-link" type="link" href="/services">
                                    Services
                                </Button>
                            </li>
                            <li className={`nav-item${getNavLinkClass("/pricing")}`}>
                                <Button className="nav-link" type="link" href="/pricing">
                                    Pricing
                                </Button>
                            </li>
                            <li className={`nav-item${getNavLinkClass("/login")}`}>
                                <Button className="nav-link" type="link" href="/login">
                                    Login
                                </Button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header >
    )
}
