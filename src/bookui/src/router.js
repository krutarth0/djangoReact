import React from 'react'
import {Route} from 'react-router-dom'

import BookList from './containers/BookList'
import BookDetail from './containers/BookDetail'
import Login from './components/Form'

const BaseRouter =()=>(
  <div>
      <Route exact path='/' component ={BookList} />
      <Route exact path='/:id' component ={BookDetail} />
      <Route exact path='/register' component={Login} />
  </div>
)

export default BaseRouter
