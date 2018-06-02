import React, { Component } from 'react';
import MySystemQuote from './My_System_List.js';
import '../../styles/css/my_system.css';

class MySystem extends Component {
    render () {
        return (
            <div className="My_System">
                <div className="title">
                    <hr className="secondary_hr"/>
                        <h2 className="secondary-big-title"> {this.props.sectionTitle} </h2>
                    <hr className="secondary_hr"/>
                </div>
                <div className="my_system_list">
                    <MySystemQuote quote="Pursue Passions, not Paychecks"/>
                    <MySystemQuote quote="Be Crafty, Lovable, Systematic, and Relentless"/>
                    <MySystemQuote quote="Don't Take Yourself Too Seriously"/>
                    <MySystemQuote quote="Read Every Day"/>
                    <MySystemQuote quote="Believe In Change"/>
                    <MySystemQuote quote="Prioritize the Customer"/>
                    <MySystemQuote quote="Invest in Ideas That Matter"/>
                    <MySystemQuote quote="Be Lazy and Dumb"/>
                </div>
            </div>
        )
    }
}

export default MySystem;