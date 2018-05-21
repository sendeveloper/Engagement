import React from 'react';
import {Link} from 'react-router-dom';

import SubMenu from './submenu';

class MenuItem extends React.Component {
	render() {
		return (
			<li className={this.props.active ? 'active' : ''}>
				<a href={this.props.data.url}>
					{this.props.data.name}
				</a>
				{
					this.props.data.submenu ? (<SubMenu data={this.props.data.submenu}/>) : false
				}
			</li>
		)
	}
}

export default MenuItem;