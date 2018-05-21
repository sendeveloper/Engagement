import React from 'react';
import {Link} from 'react-router-dom';

import MiniNavBar from './mininavbar';
import Menu from './menu';

const Navigation = () => (
  <div>
    <MiniNavBar />
    <Menu/>
  </div>
);

export default Navigation;