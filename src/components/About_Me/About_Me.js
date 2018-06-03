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
                    <ContentBlock imageUrl="https://www.jacksonhole.com/images/callouts/JHMRSummerActivityShootJuly-2016-600x600..jpg" link="https://medium.com/@ruthmpardee/passing-data-between-react-components-103ad82ebd17" headerLinkTitle="Mountain Biking" subtitle="Awesome way to see nature." description="After getting my computer science degree 
                        from Duke in 2015, I joined Google as a software engineer and co-founded Dancing Pineapple. These first two years in tech and music were filled with a rapid succession of ups and downs, and plenty of hard-won lessons.
                        I know that these lessons would have been really useful for me after my own graduation, so I decided to take some time to share some actionable advice for those of you just starting out in the real world." />

                    <ContentBlock imageUrl="https://www.jacksonhole.com/images/callouts/JHMRSummerActivityShootJuly-2016-600x600..jpg" link="https://medium.com/@ruthmpardee/passing-data-between-react-components-103ad82ebd17" headerLinkTitle="Mountain Biking" subtitle="Awesome way to see nature." description="After getting my computer science degree 
                        from Duke in 2015, I joined Google as a software engineer and co-founded Dancing Pineapple. These first two years in tech and music were filled with a rapid succession of ups and downs, and plenty of hard-won lessons.
                        I know that these lessons would have been really useful for me after my own graduation, so I decided to take some time to share some actionable advice for those of you just starting out in the real world." />
                </div>
            </div>
        );
    }
}

export default AboutMe;