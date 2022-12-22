import React, { lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

const Home = lazy(() => import('../pages/Home'))
const Users = lazy(() => import('../pages/Users'))

export default function () {
  return (
    <Switch>
      <Route path='/users'>
        <Users />
      </Route>
      <Route path='/otraruta'>
        <div>
          otraruta
        </div>
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  )
}
