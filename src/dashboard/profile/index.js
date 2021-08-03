import React from 'react';
import NavItem from '../components/NavItem';
import DashboardHeader from '../components/DashboardHeader';
import { Switch, Route } from 'react-router-dom';

import Event from './Event';
import User from './User';
import Recruitment from './Recruitment';
import Setting from './Setting';

function Profile() {
  return (
    <div>
      <DashboardHeader title="Profile" />
      <div className="border-2 border-gray-100 rounded-md p-2">
        <NavItem to="/profile/event" title="Event" />
        <NavItem to="/profile/user" title="User" />
        <NavItem to="/profile/setting" title="Setting" />
        <NavItem to="/profile/recruitment" title="Recruitment" />
      </div>
      <div>
        <Switch>
          <Route path="/profile/event" component={Event} />
          <Route path="/profile/user" component={User} />
          <Route path="/profile/recruitment" component={Recruitment} />
          <Route path="/profile/setting" component={Setting} />
        </Switch>
      </div>
    </div>
  );
}

export default Profile;
