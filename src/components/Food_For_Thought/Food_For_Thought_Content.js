import React, { Component } from 'react';

class FoodForThoughtContent extends Component {
    render () {
        return (
            <div className="image-container">
                <img alt="networking group of people" src={this.props.imageUrl} className="content_block_image"/>
            </div>
        );
    }
}

export default FoodForThoughtContent;