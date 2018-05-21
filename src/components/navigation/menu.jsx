import React from 'react';
import {Link} from 'react-router-dom';

import MenuItem from './menuitem';
import menudata from './menudata.json';

class Menu extends React.Component {
	render() {
		return (
			<div className="navbar">
				<h3>Engagement</h3>
				<ul className="menu">
				{
					menudata.length ? (
						menudata.map((each, i) => (
								<MenuItem data={each} key={i}/>
							))
					) : (false)
				}
				</ul>
			</div>
		)
	}
}

export default Menu;