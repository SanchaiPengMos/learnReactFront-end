/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as  Route } from 'react-router-dom'

import './InputLogin.css'

 const api = 'login'

export default class InputLogin extends Component {


    constructor(props){
        super(props);

        this.handleLogin = this.handleLogin.bind(this);

        this.state = {
            email : "",
        }
    }
    
      handleLogin = e => {

          e.preventDefault();

        const con = {
            method: 'post',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            }
        }

        const data  = {
              email : this.email,
              password: this.password,
              usepermis_id : this.usepermis_id,
          };


        axios.post(api,data,con  )
        .then(function(res) {

            localStorage.setItem('token',res.data.token)
            
            console.log(res.data.type)
            console.log("Email : " , res.data.email)

                alert("เข้าสู่เรียบร้อยแล้ว")
                window.location.assign("http://localhost:3000") 
            

          })

        .catch(err => {

            alert("เกิดข้อผิดพลาด")

            console.log(err)
        })
      
      };

    render() {
        
        return (
            <Route>
            <div className="row">
                    
                    <div className="col">
                    
                    <form onSubmit={this.handleLogin}  >

                        <div className="form-group">
                            <label >Email</label>
                            <input
                            type="email"
                            name="email"
                            onChange={e => this.email = e.target.value} 
                            className="form-control" 
                            placeholder="Email"
                            required />

                            <label>Password</label>
                            <input 
                            type="password"
                            name="password"
                            onChange={e => this.password = e.target.value} 
                            className="form-control" 
                            placeholder="Password"
                            required />
                            <input type="submit" value="Login" />
                        </div>      
                            
                    </form>
                  
                    </div>
                    
            </div>
            </Route>
            

        )
        }
    }