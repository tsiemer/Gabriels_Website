import React, { Component } from 'react';
import StackGrid, {transitions} from "react-stack-grid";
import sizeMe from 'react-sizeme';

class FoodForThoughtContent extends Component {

    render () {
        const {width} = this.props;
        const { scaleDown } = transitions;
        return (
            <div className="pinterest-grid">
                <div key="1"><img className="grid-img" src={this.props.imgUrl}/></div>
            </div>
        );
    }
}

export default sizeMe()(FoodForThoughtContent);