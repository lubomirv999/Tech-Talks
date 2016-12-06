import React, { Component } from 'react';
import './AboutPage.css';

export default class About extends Component {
    render(){
        return (
            <div id="aboutPageDiv">
                <h1 id="aboutPage">About</h1>
                <p id="paraAboutPage">Tech Talks is blog about technologies and people who like them. You can
                register and view articles from other people and write your own. Also you can post comments on all the articles. Tech Talks is our Single Page Application Project for the course JS Applications of module JS Core in Software University.
                Our team is from four young enthusiast programmers - Martin, Lyubomir, Mirela and Alexander. We were
                using JavaScript with React JS.</p>
            </div>
        )
    }
}