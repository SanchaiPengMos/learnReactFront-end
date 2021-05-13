import React, { Component } from 'react'
import {Helmet} from "react-helmet";


import './Contact.css'

export default class Contact extends Component {

    render() {

        const CONTACT = "Contact"

        return (
            <div className="text-contact">
            <Helmet>
                <meta charSet="utf-8" />
                <title>{CONTACT}</title>
            </Helmet>
                <div className="headContact">
                    <h1> ติดต่อ </h1>
                </div>
                <div className="contact">
                    <h3>โรงแรมนนทบุรีไนท์พลาซ่า</h3>
                    <p>109/58 ลำโพ บางบัวทอง นนทบุรี 111110</p>
                    <p>Email : sanchaipangboot@gmail.com</p>
                    <p>Tel: 064-352-3713</p>
                </div>
                
            </div>
        )
    }
}
 