import React, { Component } from 'react'
// let App become a container (state => prop)
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import actionCreators
import * as actionCreators from '../actions/index'
import Main from './Main'

function mapStateToProps(state) {
  return {
    posts: state.posts,
    tempLoc: state.tempLoc,
    currentPost: state.currentPost,
    currentLoc: state.currentLoc
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main)

export default App