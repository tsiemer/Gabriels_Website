import React, { Component } from 'react';

class FoodForThoughtContent extends Component {
    render () {
        return (
            <div className="Content_Block">
                <div className="info_section">
                    <h4 className="header_link"><a href={this.props.link}> {this.props.headerLinkTitle} </a></h4>
                    <p className="description"> {this.props.description} </p>
                </div>
                <img alt="networking group of people" src={this.props.imageUrl} className="content_block_image"/>
            </div>
        );
    }
}

export default FoodForThoughtContent;