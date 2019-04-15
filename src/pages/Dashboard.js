import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Menu from '../components/Menu';
import Contact from '../components/Contact';

const Profile = React.lazy(() => import('./Profile'));
const Garbage = React.lazy(() => import('./Garbage'));
const Progress = React.lazy(() => import('./Progress'));
const Events = React.lazy(() => import('./Events'));
const Infos = React.lazy(() => import('./Infos'));

const Dashboard = (props) => {
  const path = props.match.path;

  return (
    <div className='spa-container dashboard'>
      <Menu {...props} />
      <main className='dashboard__content'>
        <Switch>
          <Route path={`${path}/profile`} component={Profile} />
          <Route path={`${path}/garbage`} component={Garbage} />
          <Route path={`${path}/progress`} component={Progress} />
          <Route path={`${path}/events`} component={Events} />
          <Route path={`${path}/infos`} component={Infos} />
        </Switch>
      </main>

      <Contact />
    </div>
  )
}

export default Dashboard;