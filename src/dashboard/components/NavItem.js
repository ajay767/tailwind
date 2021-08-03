import React from 'react';
import { NavLink } from 'react-router-dom';

function NavItem({ to, title }) {
  return (
    <NavLink
      strict
      className="inline-block px-10 py-2 bg-gray-100 rounded-md mx-1 transition"
      to={to}
      activeClassName="bg-yellow-500 text-white"
    >
      {title}
    </NavLink>
  );
}

export default NavItem;
