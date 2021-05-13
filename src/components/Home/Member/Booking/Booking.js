import React, { Component } from 'react'
import axios from 'axios'
import Select from 'react-select';
import {Helmet} from "react-helmet";

import './Booking.css';

const apiuser = 'user'
const apiBooking = "booking"
const apislectroom = "selectroom"
const apitotal = "total"


export default class Booking extends Component {

    constructor(props){
        super(props)

        this.onSubmitBooking = this.onSubmitBooking.bind(this)
        this.handleRoom = this.handleRoom.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.handTotal = this.handTotal.bind(this)
        
        this.state= {
            selectOption: [],
            id: "",
            create_from : "",
            create_to : "",
            room_id: "",
            name_room: "",
            price: "",
            detail:"",
            total: "",
            startDate: new Date()
        }
    }

    handleChange(e) {
        this.setState({ 
            room_id:e.value , 
            name_room : e.label ,
            price : e.price,
            detail : e.detail,
            total : e.total
        })
       }

    componentWillMount(){

        const config = {
            headers: {
              Authorization : localStorage.getItem('token')
              
            }
          } 
          console.log(localStorage.getItem('token'))     
          // api axios นำ email มาแสดง
          axios.get(apiuser,config)
            
            .then(
            res => {
                console.log(res)
              // เซต Email มาแสดง
              this.setState({
                id: res.data[0].id
              })      
            }
            )
            .catch(
            err => {
                console.log(err)
            }
        )

    }

    handTotal(){

        const configtype = {
            headers: {
              'Content-Type': 'application/json'     
            }
          }

        axios.get(apitotal,configtype)
            
        .then(
        res => {
  
            console.log(res)

            this.setState({
                total: res.data[0].total
            })
             
        }
        )
        .catch(
        err => {
            console.log(err)
        }
    )
    }

    handleRoom(){
        const configroom = {
            headers: {
              'Content-Type': 'application/json'
              
            }
          }
        axios.get(apislectroom ,configroom)
        .then(
            res => {
                const data = res.data

                const options = data.map(d => ({
                    "value" : d.id,
                    "label" : d.name_room,
                    "price"  : d.price,
                    "detail" : d.detail,
                    "total": d.total
                }))

                this.setState({
                    selectOptions : options
                })
                  
              }
        )
        .catch(
            err => {
                console.log(err)
            }
        )
    }

    componentDidMount(){
        this.handleRoom()

    }

    onSubmitBooking(e){

        e.preventDefault();

        const configBooking = {
            headers: {
              'Content-Type': 'application/json'
            }
          }
          
        const data = {
            user_id : this.state.id,
            room_id : this.state.room_id,
            create_from : this.create_from,
            create_to : this.create_to,
            
        }

        axios.post(apiBooking,data,configBooking)
        .then( res => {
            console.log(res.data)
            alert("ยืนยันการจอง")

        }
        )
        .catch(
            err => {
                console.log(err)
            }
        )
    }
    render() {

        const BOOKING ="BOOKING"


        return (            
            <div className="booking"> 
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{BOOKING}</title>
                </Helmet>
                <div className="header-Booking">
                <img src="https://cdn2.f-cdn.com/contestentries/365819/10129715/56e657a9c8e95_thumb900.jpg" alt="Logo" />
                </div>
            <form onSubmit={this.onSubmitBooking}>
                <table border="0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <label>วันที่จอง</label>
                                            </td>
                                            <td>

                                            <input name="user_id" 
                                                type="hidden" 
                                                className="form-edit"  
                                                value={this.state.id}
                                                onChange={e => this.setState({ user_id: e.target.value })}  /> 

                                            <input name="create_from" 
                                                type="date" 
                                                className="form-edit"  
                                                onChange={e => this.create_from =  e.target.value} /> 
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <label>ถึงวันที่</label>
                                            </td>
                                            <td>
                                            <input name="create_to" 
                                                type="date" 
                                                className="form-edit"  
                                                onChange={e => this.create_to = e.target.value} /> 
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label>เลือกประเภทห้อง</label>
                                            </td>
                                            <td>

                                                <Select 

                                                    options={this.state.selectOptions} 
                                                    value={this.state.value}
                                                    onChange={this.handleChange}
                                                    
                                                />

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label>ราคา</label>
                                            </td>
                                            <td>
                                                <input type="text" 
                                                defaultValue={this.state.price}
                                                disabled="disabled" 
                                                />ต่อคืน
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label>รายละเอียด</label>
                                            </td>
                                            <td>
                                                <input defaultValue={this.state.detail} 
                                                disabled="disabled" />
                                            </td>
                                        </tr>
                                        
                                        <tr>
                                            <td></td>
                                            <td>
                                                <input type="button" onClick={this.onSubmitBooking} value="ยืนยัน" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> 
                                                <input type="button" onClick={this.handTotal} value="ตรวจสอบราคา" /> 
                                            </td>
                                            <td>
                                                <input type="text" 
                                                    defaultValue={this.state.total} 
                                                    disabled="disabled"/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label>ช่องทางชำระเงิน</label>
                                            </td>
                                            <td>
                                                <select>
                                                    <option>ชำระผ่าน 7-11</option>
                                                    <option>ชำระผ่าน paypal</option>
                                                </select>
                                            </td>
                                        </tr>


                                    </tbody>
                                </table>
            </form> 
            </div>
        )
    }
}
