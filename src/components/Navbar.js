import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/css/navbar.css';

export default class Example extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				collapsed: false,
				toggleBtn: <i className="fa fa-bars fa-lg"></i>
			};
		}
	
		toggleNavbar() {
			this.setState({collapsed: !this.state.collapsed});
		}

		render() {
			return (
				<nav className="navbar">
					<button type="button" className="navbar_btn" onClick={() => this.toggleNavbar()}>
						{this.state.toggleBtn}
					</button>
					<Collapse className="navbar_list" isOpen={this.state.collapsed}>
						<ul className="navlink_list">
							<p>
								<a onClick={() => this.toggleNavbar()} href="#myThoughts">CURRENT THOUGHTS</a>
							</p>
							<hr className="navbar_hr"/>
							<p>
								<a onClick={() => this.toggleNavbar()} href="#aboutMe">ABOUT ME</a>
							</p>
							<hr className="navbar_hr"/>
							<p>
								<a onClick={() => this.toggleNavbar()} href="#foodForThought">FOOD FOR THOUGHT</a>
							</p>
							<hr className="navbar_hr"/>
							<p>
								<a onClick={() => this.toggleNavbar()} href="#mySystem">MY SYSTEM</a>
							</p>
							<hr className="navbar_hr"/>
							<p>
								<a onClick={() => this.toggleNavbar()} href="#contactMe">CONNECT</a>
							</p>
						</ul>
					</Collapse>
				</nav>
			);
		}
	}