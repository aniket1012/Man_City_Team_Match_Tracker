import React from 'react';
import Layout from './HOC/Layout'
// import { Switch } from '@material-ui/core';
import {Switch, Route} from 'react-router-dom'

import SignIn from './Components/signin'
import Home from './Components/home'

import Dashboard from './Components/admin/Dashboard'

const Routes = (props) => {


  return (
    <div>
      <Layout>
        <Switch>
          <Route exact component={Dashboard} path='/dashboard'/>
          <Route exact component={SignIn} path='/sign_in'/>
          <Route exact component={Home} path='/'/>
        </Switch>
      </Layout>
    </div>
  )
}

export default Routes;
