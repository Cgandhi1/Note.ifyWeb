import React, { Component } from 'react';
import NavLink from '../NavLink/NavLink';
import './NavBar.css';

class NavBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			links: [
				{
					path: '/',
					text: 'Home',
					isActive: window.location.pathname === '/' ? true : false,
					leading: null
				},
				{
					path: '/Artists',
					text: 'Add Artist',
					isActive: window.location.pathname === '/Artists' ? true : false,
					leading: '<span class="note">&#9835;&#9833</span>'
				},
				{
					path: '/Contact',
					text: 'Contact Us',
					isActive: window.location.pathname === '/Contact' ? true : false,
					leading: null
				},
				{
					path: '/About',
					text: 'About',
					isActive: window.location.pathname === '/About' ? true : false,
					leading: null
				}
			]
		};
	}

	handleClick(i) {
		const links = this.state.links.slice();
		for (let j = 0; j < links.length; j++) {
			links[j].isActive = i === j;
		}
		this.setState({ links: links });
	}

	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<ul className="navbar-nav">
						{this.state.links.map((link, index) => {
							return (
								<NavLink
									className="note"
									leading={link.leading}
									path={link.path}
									text={link.text}
									isActive={link.isActive}
									key={link.path}
									onClick={() => this.handleClick(index)}
								/>
							);
						})}
					</ul>
				</nav>
			</div>
		);
	}
}
export default NavBar;
