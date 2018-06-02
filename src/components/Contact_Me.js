import React, { Component } from 'react';
import Linkedin from '../images/linkedin.png';
import Facebook from '../images/facebook.png';

import '../styles/css/contact_me.css';

class ContactMe extends Component {
    render () {
        return (
            <div className="ContactMe">
                <div className="title">
                    <hr className="main_hr"/>
                        <h2 className="big-title"> {this.props.sectionTitle} </h2>
                    <hr className="main_hr"/>
                </div>
                <p className="contact_me_p">Let's get in touch. <a className="contact_me_a" href={this.props.linkedin}> LinkedIn </a> or <a className="contact_me_a" href={this.props.facebook}> Facebook </a> messages work best.</p>
                <div className="social_images">
                    <img alt="linked logo" className="social_image" src={Linkedin}/>
                    <img alt="facebook logo"  className="social_image" src={Facebook}/>
                </div>
            </div>
        );
    }
}

export default ContactMe;