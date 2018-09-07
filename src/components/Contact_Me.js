import React, { Component } from 'react';
import Linkedin from '../images/linkedin.png';
import Gmail from '../images/gmail_square.png';
import Twitter from '../images/twitter.png';

import '../styles/css/contact_me.css';

class ContactMe extends Component {
    render () {
        return (
            <div className="ContactMe" id="contactMe">
                <div className="title">
                    <hr className="main_hr"/>
                        <h2 className="big-title DrSuessQuote"> {this.props.sectionTitle} </h2>
                    <hr className="main_hr"/>
                </div>
                <p className="contact_me_p">Let's get in touch. <a className="contact_me_a" href={this.props.linkedin} target="_blank"> LinkedIn </a>, <a className="contact_me_a" href={this.props.twitter} target="_blank"> Twitter</a>, <a className="contact_me_a" href={this.props.instagram} target="_blank"> Instagram </a> and {this.props.phone} messages work best.</p>
                <div className="social_images">
                    <a className="contact_me_a" href={this.props.linkedin} target="_blank"> <img alt="linked logo" className="social_image" src={Linkedin}/> </a>
                    <a className="contact_me_a" href={this.props.twitter} target="_blank"> <img alt="twitter logo"  className="social_image" src={Twitter}/> </a>
                    <a className="contact_me_a" href='https://mail.google.com/mail/?view=cm&fs=1&to=gkrizin@gmail.com&su=SUBJECT&body=BODY&bcc=gkrizin@gmail.com' target="_blank"> <img alt="gmail logo"  className="social_image" src={Gmail}/> </a>
                </div>
            </div>
        );
    }
}

export default ContactMe;