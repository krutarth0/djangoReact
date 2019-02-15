import React, { Component } from 'react';
import './App.css';

import {BrowserRouter} from 'react-router-dom'
import BaseRouter from './router.js'
import {connect} from 'react-redux'
import * as actions from './store/actions/auth'


import Navbar from './components/navbar'


class App extends Component {
  componentDidMount(){
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      <div>
            <Navbar/>
            <BaseRouter {...this.props}/>
        </div>

    );
  }
}

const mapStateToProps =state =>{
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps =dispatch =>{

  return{
    onTryAutoSignup :() =>{
      dispatch(actions.authCheckState())
    }
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(App); //if you dnt have mapStateToProps pass the first argument as null
