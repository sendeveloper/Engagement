import React from 'react';
import {Link} from 'react-router-dom';

import br from 'src/images/br.png';
import user from 'src/images/user.png';
import broadcasting from 'src/images/broadcasting.png';
import aim from 'src/images/aim.png';
import light from 'src/images/light.png';
import picture from 'src/images/picture.png';

class MiniNavBar extends React.Component {
	render() {
		return (
			<div className="miniNavBar">
        <ul>
          <li>
            <a href="#">
              <img src={br} className="small-img"/>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={user} className="small-img"/>
            </a>
          </li>
        </ul>
		  </div>
		)
	}
}

export default MiniNavBar;