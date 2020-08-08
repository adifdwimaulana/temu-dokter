import React from 'react';
import testimonial from '../assets/testimonial.jpg';

export default function Testimonial() {
    return (
        <>
            <div className="testimonial">
                <div className="parallax">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg">
                            </div>
                            <div className="col-lg person">
                                <h1 className="comment">"Produk ini sangat bagus dan dapat memudahkan para pasien <br /> untuk menjadwalkan konsultasi dengan dokter"</h1>
                                <img src={testimonial} className="img-fluid rounded-circle" />
                                <h3 className="person-name">Kerent Vidia M.</h3>
                                <h4 className="person-role">CEO temudokter</h4>
                            </div>
                            <div className="col-lg">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
