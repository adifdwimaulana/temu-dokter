import React from 'react';
import OwlCarousel from 'react-owl-carousel';

import facility1 from '../assets/facilities/1.jpg';
import facility2 from '../assets/facilities/2.jpg';
import facility3 from '../assets/facilities/3.jpg';
import facility4 from '../assets/facilities/4.jpg';
import facility5 from '../assets/facilities/5.jpg';

export default function Facility() {
    return (
        <>
            <div className="facility">
                <div className="container">
                    <h1 className="facility-title">Fasilitas Kami</h1>
                    <hr className="line mt-2" style={{ float: "left" }} />
                    <div className="row justify-content-center mt-5">
                        <OwlCarousel
                            className="owl-theme"
                            loop
                            margin={16}
                            nav
                        >
                            <div class="item"><img src={facility1} className="img-fluid" /></div>
                            <div class="item"><img src={facility2} className="img-fluid" /></div>
                            <div class="item"><img src={facility3} className="img-fluid" /></div>
                            <div class="item"><img src={facility4} className="img-fluid" /></div>
                            <div class="item"><img src={facility5} className="img-fluid" /></div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </>
    )
}
