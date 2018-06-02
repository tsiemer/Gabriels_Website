import React, { Component } from 'react';
import '../styles/css/intro_styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Intro extends Component {
    render () {
        return (
            <div className="Intro">
                <p className="intro-small-text"> Hey, I'm </p>
                <div className="big-intro">
                    <hr className="intro-hr"/>
                    <h1 className="intro-big-text"> {this.props.name} </h1>
                    <hr className="intro-hr"/>
                </div>
            </div>
        );
    }
}

export default Intro;