import React, { Component } from 'react';
import ContentBlock from './My_Thoughts_Content.js';
import '../../styles/css/my_thoughts.css';


class MyThoughts extends Component {
    render () {
        return (
            <div className="MyThoughts" id="myThoughts">
                <div className="title">
                    <hr className="main_hr"/>
                        <h2 className="big-title"> {this.props.sectionTitle} </h2>
                    <hr className="main_hr"/>
                </div>

                <div className="content_blocks">
                    {/* Content block props: link, headerLinkTitle, img, description, altText, imageUrl */}

                    <ContentBlock img={false} description="Since this will be one of many posts about what I am thinking about,  I will make this somewhat short. 
                    As I sit here and I am writing this, I am reflecting on my thoughts on how much I think about the culture I live. I have pressure from all directions. 
                    I have to be an excellent father, a kind and understanding boyfriend that can offer the world, have a fit body, eat well (but not to healthy), what car do I drive, 
                    clothes that I wear, and what is my title at said company. The list goes on and on. I know I am not speaking from a lonely island that nobody can relate with me. 
                    I am also not looking for people to agree or disagree. I am stating this to say. I am going to try every day to make sure I make decisions off my own accord. I will be doing things I enjoy, 
                    wearing clothes I like to wear and eat what I want to eat. I was thinking about the last time I sat down with my then 7-year-old son. I asked him. 'How can I do better as a dad?' literally 
                    that is all I said. Then I sat there and waited. It took him a while to realize this was not a question that I was going to answer for him. He looked at me with loving eyes and said. 'When you 
                    are around me, can you just be with me?' I asked him to clarify what this meant. He said to me. 'When you are with me, your also thinking about things, or looking at your phone.' This statement 
                    killed me inside to know that my 7-year-old is just simply asking me for the time that is his. Not shared with the world. Until next time. ~ Gabriel Krizin" />

                    <ContentBlock img={true} altText="Kitten with Moustache" description="Something absolutely amazingly awesome." imageUrl="https://welovecatsandkittens.com/wp-content/uploads/2014/01/perfect-moustache-kitten.jpg" headerLinkTitle="Kitten wizz Mouztash"/>
                </div>
            </div>
        );
    }
}

export default MyThoughts;