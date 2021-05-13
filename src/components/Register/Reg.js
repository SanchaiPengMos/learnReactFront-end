import React, { Component } from 'react'
import {Helmet} from "react-helmet";

import './Reg.css'
import axios from 'axios'


const apisingin = 'Register'

export default class Reg extends Component {

    handleSubmitSingin = e => {
        e.preventDefault();
        const data = {
            email : this.email,
            password : this.password,
            firstname:this.firstname,
            lastname: this.lastname,
            birthday: this.birthday,
            tel: this.tel

        }

        axios.post(apisingin,data)

        .then(
            res => {
                console.log(data)
                console.log(res)
                alert("สมัครสมาชิกสำเร็จ")
                window.location.assign("http://localhost:3000") 
            }
        ).catch(
            err => {
                console.log(err)
            }
        )

    }

    render() {

        const sigin ="Sing in"

        return (
                <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{sigin}</title>
                </Helmet>
                <form onSubmit={this.handleSubmitSingin}>
                    <div className="formRegister">
                <div className="header-Reg">
                    <img src="https://cdn2.f-cdn.com/contestentries/365819/10129715/56e657a9c8e95_thumb900.jpg" alt="Logo" />
                </div>
                    <h2>แบบฟอร์มสมัครสมาชิก</h2> <br />
                    <div className="table-Register">

                        <table>

                            <tbody>
                                <tr>
                                    <td> <label>Email address:</label> </td>
                                    <td> 
                                        <input type="email" 
                                        name='email'
                                        onChange={ e => this.email = e.target.value }
                                        className="form-control"  
                                        placeholder="Enter email" 
                                        required />
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td> <label>Password: </label></td>
                                    <td> 
                                        <input type="password"
                                        name='password' 
                                        onChange={ e => this.password = e.target.value }
                                        className="form-control" 
                                        placeholder="Password" 
                                        required/>
                                    </td>
                                </tr>

                                <tr>
                                    <td> <label>ชื่อ: </label></td>
                                    <td> 
                                        <input type="text" 
                                        name='name'
                                        onChange={ e => this.firstname = e.target.value }
                                        className="form-control"  
                                        placeholder="ชื่อ"
                                        required/>
                                    </td>
                                </tr>
                                <tr>
                                    <td> <label>นามสกุล: </label></td>
                                    <td> 
                                        <input type="text"
                                        name='lastname' 
                                        onChange={ e => this.lastname = e.target.value }
                                        className="form-control"  
                                        placeholder="นามสกุล"
                                        required/>
                                    </td>
                                </tr>
                                <tr>
                                    <td> <label>วันเกิด: </label></td>
                                    <td> 
                                        <input type="Date"
                                        name='birthday' 
                                        onChange={ e => this.birthday = e.target.value }
                                        className="form-control"
                                        placeholder="วันเกิด"
                                        required/>
                                    </td>
                                </tr>
                                <tr>
                                    <td> <label>เบอร์โทรศัพท์: </label></td>
                                    <td>
                                        <input type="text"
                                        name='tel' 
                                        onChange={ e => this.tel = e.target.value }
                                        className="form-control" 
                                        placeholder="เบอร์โทรศัพท์"
                                        required/>
                                    </td>
                                </tr>
                            </tbody>

                        </table>

                    </div>

                    <div className="btn-reg">
                        <button type="submit" className="btn">สมัคสมาชิก</button>
                    </div>

                    </div>
                </form>
                </div>
        )
    }
}
