import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import axios from 'axios'

import './EditMem.css'

const apiuser = 'user'

export default class EditMem extends Component {

    constructor(props){
        super(props)

        this.haldleChangeSubmit = this.haldleChangeSubmit.bind(this);

        this.state = {
                    
            email: "",
            firstname:"",
            lastname:"",
            tel:""
        }
    }

    componentWillMount(){

        const config = {
            headers: {
              Authorization : localStorage.getItem('token')
              
            }
          }      
          // api axios นำ email มาแสดง
          axios.get(apiuser,config)
            
            .then(
            res => {
      
              // เซต Email มาแสดง
              this.setState({
                id: res.data[0].id,
                email: res.data[0].email,
                firstname: res.data[0].firstname,
                lastname: res.data[0].lastname,
                birthday: res.data[0].birthday,
                tel: res.data[0].tel,
              })      
            }
          )
          .catch(err => {
            console.log(err)
          })
    }

    haldleChangeSubmit() {

      const data = {
        firstname:this.state.firstname,
        lastname: this.state.lastname,
        tel: this.state.tel

    } 

      const configedit = {
        headers: {
          Authorization : localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      }
      
      axios.put(`edituser/${this.state.id}`,JSON.stringify(data),configedit)

      .then(function (res) {

        console.log(res)
        console.log("Start res data",res.data);

        alert("แก้ไขข้อมูลสำเสร็จ")
        window.location.assign("http://localhost:3000")

      })
      .catch(function (error) {

        console.log(error);
      
      });     
    }

    render() {

      const Edit = "EDITPROFILE"

        return (
            <div className="formEdit">
          <Helmet>
            <meta charSet="utf-8" />
            <title>{Edit}</title>
          </Helmet>
                <div className="header-Reg">
                    <img src="https://cdn2.f-cdn.com/contestentries/365819/10129715/56e657a9c8e95_thumb900.jpg" alt="Logo" />
                </div>

                <form onSubmit={this.haldleChangeSubmit} >
                    <h2>แก้ไขข้อมูล</h2> <br />
                    <div className="table-Eidt">

                        <table>

                            <tbody>

                                <tr>
                                    <td> <label>ชื่อ: </label></td>
                                    <td> <input name="firstname" 
                                    type="text" 
                                    className="form-edit"  
                                    placeholder="ชื่อ" 
                                    value={this.state.firstname} 
                                    onChange={e => this.setState({ firstname: e.target.value })} /> </td>
                                </tr>

                                <tr>
                                    <td> <label>นามสกุล: </label></td>
                                    <td> <input name="lastname"
                                    type="text" 
                                    className="form-edit"  
                                    placeholder="นามสกุล" 
                                    value={this.state.lastname} 
                                    onChange={e => this.setState({ lastname: e.target.value })} /></td>
                                </tr>

                                <tr>
                                    <td> <label>เบอร์โทรศัพท์: </label></td>
                                    <td><input name="tel"
                                    type="text" 
                                    className="form-edit" 
                                    placeholder="เบอร์โทรศัพท์" 
                                    value={this.state.tel} 
                                    onChange={e => this.setState({ tel: e.target.value })} /></td>
                                </tr>

                            </tbody>

                        </table>

                    </div>

                    <div className="btn-edit">
                        <button type="submit" className="btn">ยืนยัน</button>
                    </div>
                </form>
            </div>
        )
    }
}
