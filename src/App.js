

import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom'
import { Header} from './components/Header'


import { Home } from './pages/Home.js'
const About = () => <h1>About</h1>
const Post = () => <h1>Post</h1>
const Project = () => <h1>Project</h1>
const NotFoundPage = () => <h1>404</h1>


const App = () => (
      <div className="my-app">
        <Header />  
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/posts" component={Post} />
          <Route path="/projects" component={Project} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
)

export default App;
