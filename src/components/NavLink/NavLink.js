import React from 'react';
import { Link } from 'react-router-dom';
import './NavLink.css';

const NavLink = (props) => (
	<li className={'nav-item ' + (props.isActive ? 'active' : '')}>
		<Link className="nav-link" to={props.path} onClick={props.onClick}>
			<span dangerouslySetInnerHTML={{ __html: props.leading }} /> {props.text}
		</Link>
	</li>
);

export default NavLink;
