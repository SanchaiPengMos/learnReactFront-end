import React, { Component } from 'react'
import Newdetail from './Newdetail/Newdetail'
import axios from 'axios'


import './News.css'

 const apinewtopic ="new"

export default class News extends Component {

    constructor(props){
        super(props)
        this.renderArticles = this.renderArticles.bind(this)
        this.state ={
            newtopic: [],
            id : "",
            topic : "",
            detail : ""
        }
    }

    componentWillMount() {

        axios.get(apinewtopic)
        .then(res => {
            console.log("New topic",res)
            const data = res.data

            this.setState({
                newtopic : res.data
            })

            console.log("data New topic : ",data)

        })
        .catch( err => 
                console.log(err)
            )
    }

    renderArticles(){
        return this.state.newtopic.map((article, index) => {
            return (
              <Newdetail key={index} article={article} />
            )
          });
    }


    render() {

        const ultopic = this.state.newtopic
        console.log("ultopic" ,ultopic)

        const articles = this.renderArticles();

        return (

            <div className="news">
                <h2>ประชาสัมพันธ์</h2>
                {articles}
            </div>
        )
    }
}
