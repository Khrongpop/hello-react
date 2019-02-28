

import React from 'react'
import { connect } from 'react-redux'
// import { increment, decrement } from '../actions'
import { Counter } from '../components/Counter.js'

export const Home = () => (
  <div className="container">
    <Counter/>
  </div>
)

const mapStateToProps = function (state) {
  return {
    message: 'This is message from mapStateToProps',
    counter: state.counters || 0
  }
}

