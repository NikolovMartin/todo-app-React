import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
	return (
		<nav className="nav">
			<ul>
				<li>
					<NavLink to="/firstApp">First App</NavLink>
				</li>
				<li>
					<NavLink to="/secondApp">Second App</NavLink>
				</li>
				<li>
					<NavLink to="/thirdApp">Third App</NavLink>
				</li>
				<li>
					<NavLink to="/fourthApp">Fourth App</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Menu;
