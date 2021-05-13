import React, { Component } from 'react'
import './Banner.css';

export default class Banner extends Component {
    render() {
        // eslint-disable-next-line jsx-a11y/img-redundant-alt
        const newLocal = <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="banner" />;
        return (
            <div className="banner">
                
                {newLocal}
                
            </div>
        )
    }
}
