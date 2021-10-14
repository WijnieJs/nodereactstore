import React from 'react';
import { NavLink } from 'react-router-dom';

 
const navItems = [
  { id: 'trending', text: 'Trends', link: '/trending', auth: true },
    { id: 'home', text: 'home', link: '/', auth: true },
      { id: 'specials', text: 'Specials', link: '/specials', auth: true },
    { id: 'products', text: 'Products', link: '/products', auth: true },

  { id: 'login', text: 'Login', link: '/', auth: false },
  { id: 'signup', text: 'Signup', link: '/signup', auth: false }
];

const navigationItems = props => [
  ...navItems.filter(item => item.auth === props.isAuth).map(item => (
    <li
      key={item.id}
      className={['navigation-item', props.mobile ? 'mobile' : ''].join(' ')}
    >
      <NavLink to={item.link} exact onClick={props.onChoose}>
        {item.text}
      </NavLink>
    </li>
  )),
  props.isAuth && (
    <li className="navigation-item" key="logout">
      <button onClick={props.onLogout}>Logout</button>
    </li>
  )
];

export default navigationItems;
