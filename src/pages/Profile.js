import React, { useState, useEffect } from 'react';

import Header from '../partials/Header';
import Footer from '../partials/Footer';
import Breadcrumb from '../components/Breadcrumb';

import { db, store } from '../config';
import firebase from 'firebase';

import './profile.scss';

import user from '../assets/flat-user.png';
import doctor from '../assets/doctor-1.jpg';

export default function Profile(props) {

    let id = ""

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    const breadcrumbList = [
        { pageTitle: "Home", pageHref: "" },
        { pageTitle: "User", pageHref: "" },
        { pageTitle: "Profile", pageHref: "" },
    ]

    useEffect(() => {
        id = props.match.params.id;
        console.log("Params = ", id)

        store.collection('users')
            .doc(id)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    // console.log(doc.data())
                    let currentData = doc.data()
                    console.log(currentData.name)
                    console.log(currentData.email)
                    console.log(currentData.phone)
                    setName(currentData.name)
                    setEmail(currentData.email)
                    setPhone(currentData.phone)
                    setImageUrl(currentData.imageUrl)
                    // setData(doc.data())
                }
            })
    })

    const handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    };

    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    <Breadcrumb data={breadcrumbList} style={{ float: 'left' }} />
                </div>
                <div className="container">
                    <div className="row profile">
                        <h1 className="profile-name">{name}</h1>
                        <h2>{email}</h2>
                        {
                            imageUrl ? <h1>image url</h1> : <img src={user} width="200" height="200" style={{ backgroundClip: '#000' }} />
                        }
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}
