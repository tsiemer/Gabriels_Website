import React, { Component } from 'react';
import ContentBlock from './Food_For_Thought_Content.js';
import '../../styles/css/food_for_thought.css';


class FoodForThought extends Component {
    render () {
        return (
            <div className="FoodForThought" id="foodForThought">
                <div className="title">
                    <hr className="main_hr"/>
                        <h2 className="big-title"> {this.props.sectionTitle} </h2>
                    <hr className="main_hr"/>
                </div>

                <div className="subtitle">
                    <h2 className="small-title"> {this.props.sectionSubTitle} </h2>
                </div>

                <div className="content_blocks">
                    
                </div>
            </div>
        );
    }
}

export default FoodForThought;