import React, { Component } from 'react'
import Banner from './Home/Header/Banner/Banner'
import InputLogin from './FormLogin/Login'
import NameHotel from './Home/Header/NameHotel/NameHotel'
import News from './Home/News/News'
import ImgSlideBar from './Home/Header/IMGSlidebar/ImgSlideBar'
import GoogleMap from './Home/Assets/API/GoogleMap'
import Welcome from './Home/Welcome/Welcome'
import { BrowserRouter as Router } from 'react-router-dom'
import {Helmet} from "react-helmet";


import './Home.css'
import axios from 'axios'

const apiuser = 'user'

export default class Home extends Component {

  constructor(props){
    super(props)

    this.state = {

      token : "",
      isLoggedIn: false,

    }
  }

  // componentdidmount
  componentDidMount = () => {

    const config = {
      headers: {
        Authorization : localStorage.getItem('token') 
        
      }
    }
    this.setState({
      token : localStorage.getItem('token')
    })

    // api axios นำ email มาแสดง
    axios.get(apiuser,config)
      
      .then(
      res => {

        // เซต Email มาแสดง
        this.setState({
          email: res.data[0].email
        })


      },
      err => {
        console.log(err)
      }
    )
  }
   
  
  render() { 

    const token = localStorage.getItem('token')
    const INDEX ="HOME"

    if (token){
      return (
        <Router>
        <div className="header">
          <Helmet>
            <meta charSet="utf-8" />
            <title>{INDEX}</title>
          </Helmet>
            <div className="container">
              
              <div>
              <Welcome email={this.state.email} />
              </div>
  
                <Banner /> 
  
              <div className="slidebar-app">
                <ImgSlideBar />
              </div>
  
              <div className= "namehotel" >
                <NameHotel />
              </div>
  
              <div className="news">
                <News />
              </div>
  
              <div className="mapgoogle">
                <GoogleMap />
              </div>
  
          </div>
  
          {/* <div className="footer">
                <Contact />
              </div>  */}
  
        </div>
        </Router>
      )
    }

  return (
      <Router>
      <div className="header">
          <Helmet>
            <meta charSet="utf-8" />
            <title>{INDEX}</title>
          </Helmet>
          <div className="container">
              
            <div className="input">
              <InputLogin />
            </div>

              <Banner /> 

            <div className="slidebar-app">
              <ImgSlideBar />
            </div>

            <div className= "namehotel" >
              <NameHotel />
            </div>

            <div className="news">
              <News />
            </div>

            <div className="mapgoogle">
              <GoogleMap />
            </div>

        </div>

        {/* <div className="footer">
              <Contact />
            </div>  */}

      </div>
      </Router>
    )
  }
}
