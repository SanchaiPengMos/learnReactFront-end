import React, { Component } from 'react'
import Home from './components/Home'
import Singin from './components/Register/Reg'
import Booking from './components/Home/Member/Booking/Booking'
import EditMem from './components/Home/Member/EditMember/EditMem'
import Contact from './components/Home/Contact/Contact'
import { BrowserRouter as Router,NavLink, Route } from 'react-router-dom'


import './App.css'

export default class App extends Component {


  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);


    this.state = {
        isLoggedIn: false
    }
  } 

  handleShow(){
    this.setState ({
      isLoggedIn: true
    })
  }

  handleHide() {
    this.setState ({
        isLoggedIn: false

    })

}

  render() { 

    const token = localStorage.getItem('token')
    let button;
    let editm;

    if (token) {
      button = <LogoutButton onClick={this.handleHide}/>
      editm = <Memberedit onClick={this.handleHide} />
  }

  return (
      <Router>
        
      <div className="header"> 
        <div className="navLink">
          <NavLink to='/' ><button className="btn-dark">Home</button></NavLink>
          <NavLink to='/Singin' ><button className="btnbtn-dark">Sing in</button></NavLink>
          <NavLink to='/Contact' ><button className="btnbtn-dark">Contact</button></NavLink>
          {button}
          {editm}

            <Route exact path='/' component={Home} />
            <Route path='/Singin' component={Singin} />
            <Route path='/Contact' component={Contact} />
            <Route path='/Booking' component={Booking} />
            <Route path='/EditMem' component={EditMem} />
        </div>
        
      </div>
      </Router>
    )
  }
}

function  LogoutButton(props) {
  return (
      <NavLink to='/Booking' >
        <button className="btnbtn-dark" onClick={props.onClick}>จองที่พัก</button>
      </NavLink>

  )
}
function Memberedit(props){
  return (
      <NavLink to='/EditMem' >
        <button className="btnbtn-dark" onClick={props.onClick}>แก้ไขข้อมูล</button>
      </NavLink>
  )
}