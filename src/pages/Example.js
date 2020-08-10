import React from 'react';

import Breadcrumb from '../components/Breadcrumb';

export default class Example extends React.Component {
    render() {
        const breadcrumb = [
            { pageTitle: "Home", pageHref: "" },
            { pageTitle: "Detail Dokter", pageHref: "" }
        ]
        return (
            <div className="container">
                <div className="row align-item-center justify-content-center"
                    style={{ height: "100vh" }}
                >
                    <div className="col-lg">
                        <Breadcrumb data={breadcrumb} />
                    </div>
                </div>
            </div>
        )
    }
}
