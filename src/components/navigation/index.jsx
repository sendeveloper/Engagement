import React from 'react';
import {Link} from 'react-router-dom';

import MiniNavBar from './mininavbar';
import Menu from './menu';

import styles from './index.sass';

const Navigation = () => (
  <div>
    <MiniNavBar />
    <Menu className={styles.submenu}/>
  </div>
);

export default Navigation;