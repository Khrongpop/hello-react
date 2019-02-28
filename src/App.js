
// import React from 'react'
// import { connect } from 'react-redux'
// import { increment, decrement } from './actions'
// const App = ({ message, counter, dispatch }) => (
//   <div className="container">
//     <div className="columns column is-12">
//       <h1>Counter : {counter}</h1>
//     </div>

//     <div className="buttons">
//       <button onClick={() => dispatch(increment(1))} className="button is-primary">
//         +1
//     </button>
//       <button onClick={() => dispatch(increment(2))} className="button is-link">
//         +2
//     </button>
//       <button onClick={() => dispatch(increment(3))} className="button is-info">
//         +3
//     </button>
//     </div>

//     <div className="buttons">
//       <button onClick={() => dispatch(decrement(1))} className="button is-primary">
//         -1
//     </button>
//       <button onClick={() => dispatch(decrement(2))} className="button is-link">
//         -2
//     </button>
//       <button onClick={() => dispatch(decrement(3))} className="button is-info">
//         -3
//     </button>
//     </div>
//   </div>
// )

// const mapStateToProps = function (state) {
//   return {
//     message: 'This is message from mapStateToProps',
//     counter: state.counters || 0
//   }
// }

// const AppWithConnect = connect(mapStateToProps)(App)
// export default AppWithConnect

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, NavLink} from 'react-router-dom'

const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>
const Post = () => <h1>Post</h1>
const Project = () => <h1>Project</h1>
const NotFoundPage = () => <h1>404</h1>

class App extends Component {


  render() {
    return (
      <div className="my-app">
        <nav className="navbar is-light" role="navigation" aria-label="main navigation">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="https://devahoy.com">
                <img src="https://devahoy.com/assets/images/devahoy-text-logo.png" alt="DEVAHOY LOGO" width="112" height="28" />
              </a>
            </div>
            <div className="navbar-menu">
              <div className="navbar-end">
                <NavLink exact to="/" activeClassName="is-active" className="navbar-item">Home</NavLink>
                <NavLink to="/posts" activeClassName="is-active" className="navbar-item">Posts</NavLink>
                <NavLink to="/projects" activeClassName="is-active" className="navbar-item">Projects</NavLink>
                <NavLink to="/about" activeClassName="is-active" className="navbar-item">About</NavLink>
                <a className="navbar-item" href="https://github.com/phonbopit" target="_blank">Star on <i className="fab fa-github"></i></a>
              </div>
            </div>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/posts" component={Post} />
          <Route path="/projects" component={Project} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
