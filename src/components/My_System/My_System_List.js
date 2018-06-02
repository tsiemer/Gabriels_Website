import React, { Component } from 'react';

class MySystem extends Component {
    render () {
        return (
            <div>
                <p className="system_list_text"> {this.props.quote} </p>
            </div>
        )
    }
}

export default MySystem;