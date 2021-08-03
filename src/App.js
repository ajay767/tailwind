import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavButton from './components/NavButton';

import { HiHome } from 'react-icons/hi';
import { FaUserCircle } from 'react-icons/fa';
import { AiFillPhone } from 'react-icons/ai';
import { FaBolt } from 'react-icons/fa';

import Home from './dashboard/home';
import Profile from './dashboard/profile';
import Contact from './dashboard/contact';
import About from './dashboard/about';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <header className="h-12 border-b-2 border-gray-50"></header>
      <div className="flex-1 flex flex-row  ">
        <div className="w-2/12 h-full bg-white-600 p-2 px-5 flex flex-col justify-between border-r-2 border-gray-50">
          <div>
            <NavButton to="/home" title="Home">
              <HiHome size={22} />
            </NavButton>
            <NavButton to="/profile" title="Profile">
              <FaUserCircle size={22} />
            </NavButton>
            <NavButton to="/contact" title="Contact">
              <AiFillPhone size={22} />
            </NavButton>
            <NavButton to="/about" title="About">
              <FaBolt size={22} />
            </NavButton>
          </div>
          <p className=" text-center text-sm text-gray-500 my-5">
            Blogger copyright 2021
          </p>
        </div>
        <div className="w-10/12 h-full p-10">
          <Switch>
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/profile" component={Profile} />
            <Route path="/home" component={Home} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
