import React from 'react';
import { NavLink } from 'react-router-dom';

function NavButton({ to, title, children }) {
  return (
    <NavLink
      className=" border border-gray-300 overflow-hidden rounded-md  mx-auto  my-2 block text-center bg-gray-100  px-6 py-3 text-md flex flex-row items-center  text-gray-700 transition"
      to={to}
      strict
      activeClassName="bg-yellow-500 border-yellow-300"
      activeStyle={{ color: '#fff' }}
    >
      <span className="mr-2 text-current text-lg">{children}</span> {title}
    </NavLink>
  );
}

export default NavButton;
