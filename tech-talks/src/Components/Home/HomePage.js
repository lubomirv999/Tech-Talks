import React, { Component } from 'react';
import './HomeStyles.css';

export default class HomePage extends Component {
    render(){
        let message = <p>You are currently not logged.</p>;

        if(sessionStorage.getItem('username')) {
            message = <div>Welcome, {sessionStorage.getItem('username')}!</div>
        }

        return (
            <div id="homePage">
                <h1 id="title">Home Page</h1>
                {message}
                <img src={'https://s15.postimg.org/d6undsbor/Merry_Christmas_1080p_Widescreen_HD_Wallpaper.jpg'} alt="" className="img-responsive"/>
            </div>
        )
    }
}