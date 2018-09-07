import React, { Component } from 'react';
import cns from 'classnames';

class AboutMeContent extends Component {
    render () {
        const {className} = this.props;
        return (
            <div className="Content_Block">
                {this.props.img === true && <img alt={this.props.altText} src={this.props.imageUrl} className="content_block_image"/>}
                <div className="info_section">
                    <h4 className="header_link"><a href={this.props.link}> {this.props.headerLinkTitle} </a></h4>
                    <h6 className="subtitle"> {this.props.subtitle} </h6>
                    <p className={cns(className, {"description" : this.props.img}, {"description-noImg" : !this.props.img})}> {this.props.description} </p>
                </div>
            </div>
        );
    }
}

export default AboutMeContent;