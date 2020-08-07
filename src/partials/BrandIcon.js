import React from 'react';
import Button from '../components/Button';
import logo from '../assets/brand-icon.png';

export default function BrandIcon() {
    return (
        <Button className="brand-text-icon" href="/" type="link">
            <img src={logo} width="50" />temudokter
        </Button>
    )
}
