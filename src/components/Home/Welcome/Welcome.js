import React, { Component } from 'react'

import { BrowserRouter as Router } from 'react-router-dom'

import './Welcome.css'


export default class Home extends Component {

    constructor(props) {
        super(props)
        this.handleLogout = this.handleLogout.bind(this)
      }



    handleLogout = () => {

        localStorage.clear()
        alert("ออกจากระบบเรียบร้อยแล้ว")
            
            window.location.assign("http://localhost:3000")  
        
    }

    render() {

        if(this.props.email){
            return (
                <Router>
                <div className="home">
                <select onChange={this.handleLogout}>
                    <option>{this.props.email}</option>
                    <option>Logout</option>
                </select>
                </div>
                </Router>
            )
        }

        return (
                <div>
                    
                </div>
            )
    }
}