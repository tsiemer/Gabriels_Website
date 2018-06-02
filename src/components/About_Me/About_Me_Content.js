import React, { Component } from 'react';

class AboutMeContent extends Component {
    render () {
        return (
            <div className="Content_Block">
                <img alt="mountain bike riding in ohio" src={this.props.imageUrl} className="content_block_image"/>
                <div className="info_section">
                    <h4 className="header_link"><a href={this.props.link}> {this.props.headerLinkTitle} </a></h4>
                    <h6 className="subtitle"> {this.props.subtitle} </h6>
                    <p className="description"> {this.props.description} </p>
                </div>
            </div>
        );
    }
}

export default AboutMeContent;