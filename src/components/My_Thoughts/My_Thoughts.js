import React, { Component } from 'react';
import ContentBlock from './My_Thoughts_Content.js';
import '../../styles/css/my_thoughts.css';


class MyThoughts extends Component {
    render () {
        return (
            <div className="MyThoughts">
                <div className="title">
                    <hr className="main_hr"/>
                        <h2 className="big-title"> {this.props.sectionTitle} </h2>
                    <hr className="main_hr"/>
                </div>

                <div className="my_thoughts_content_blocks">
                    <ContentBlock imageUrl="https://cdn-images-1.medium.com/max/600/1*jnqXL4Q-iW0qxodFDTxyFQ.jpeg" link="https://medium.com/@ruthmpardee/passing-data-between-react-components-103ad82ebd17" headerLinkTitle="Passing props between components" description="After getting my computer science degree 
                    from Duke in 2015, I joined Google as a software engineer and co-founded Dancing Pineapple. These first two years in tech and music were filled with a rapid succession of ups and downs, and plenty of hard-won lessons.
                    I know that these lessons would have been really useful for me after my own graduation, so I decided to take some time to share some actionable advice for those of you just starting out in the real world." />

                    <ContentBlock imageUrl="https://cdn-images-1.medium.com/max/600/1*jnqXL4Q-iW0qxodFDTxyFQ.jpeg" link="https://medium.com/@ruthmpardee/passing-data-between-react-components-103ad82ebd17" headerLinkTitle="Title" description="After getting my computer science degree 
                    from Duke in 2015, I joined Google as a software engineer and co-founded Dancing Pineapple. These first two years in tech and music were filled with a rapid succession of ups and downs, and plenty of hard-won lessons.
                    I know that these lessons would have been really useful for me after my own graduation, so I decided to take some time to share some actionable advice for those of you just starting out in the real world." />
                </div>
            </div>
        );
    }
}

export default MyThoughts;