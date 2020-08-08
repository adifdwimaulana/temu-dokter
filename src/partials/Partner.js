import React from 'react';
import ovo from '../assets/partners/ovo-2.png';
import gopay from '../assets/partners/gopay.png';
import dana from '../assets/partners/dana.png';
import linkaja from '../assets/partners/linkaja-2.png';

export default function Partner() {
    return (
        <>
            <div className="partner">
                <div className="container">
                    <h1 className="partner-title">Payment Partner</h1>
                    <hr className="line mt-3" />
                    <div className="row justify-content-center partner-top mt-5">
                        <div className="col-lg">
                            <img src={ovo} className="img-fluid" />
                        </div>
                        <div className="col-lg">
                            <img src={gopay} className="img-fluid" />
                        </div>
                        <div className="col-lg">
                            <img src={dana} className="img-fluid" />
                        </div>
                        <div className="col-lg">
                            <img src={linkaja} className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}