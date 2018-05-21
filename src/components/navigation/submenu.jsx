import React from 'react';
import {Link} from 'react-router-dom';

import SubMenuItem from './submenuitem';

class SubMenu extends React.Component {
	render() {
		return (
			<React.Fragment>
			{
				this.props.data.length ? (
					<ul className="submenu">
					{
						this.props.data.map((each, i) => (
							<SubMenuItem data={each} key={i} />
						))
					}
					</ul>
				)	: (false)
			}
			</React.Fragment>
		)
	}
}

export default SubMenu;