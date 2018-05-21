import React from 'react';
import {Link} from 'react-router-dom';

import SubMenuItem from './submenuitem';
import subMenuStyle from './submenu.sass';

class SubMenu extends React.Component {
	render() {
		return (
			<React.Fragment>
			{
				this.props.data.length ? (
					<ul className={subMenuStyle.submenu}>
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