import React, { Component } from 'react';
import ContentBlock from './About_Me_Content.js';
import '../../styles/css/about_me.css';

class AboutMe extends Component {
    render () {
        return (
            <div className="About_Me" id="aboutMe">
                <div className="title">
                    <hr className="main_hr"/>
                        <h2 className="big-title"> {this.props.sectionTitle} </h2>
                    <hr className="main_hr"/>
                </div>

                <div className="content_blocks">
                    <ContentBlock img={false} description="If we have not sat down or spoken in some way, let's do it! I don't want to tell you who I am when I would love to have you make your judgments off of meeting with me. I look forward to hearing from you." />
                    <ContentBlock img={true} altText="Kitten with Moustache" description="Something absolutely amazingly awesome." imageUrl="http://www.holidogtimes.com/wp-content/uploads/2016/03/cat-fur-markings-1.jpg?2e4e73&2e4e73" headerLinkTitle="Kitten wizz Mouztash"/>
                </div>
            </div>
        );
    }
}

export default AboutMe;