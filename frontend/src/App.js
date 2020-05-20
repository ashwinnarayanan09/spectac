import React from 'react';
import './App.css';
import Job from './components/Job.js'
import Menu from './components/Menu.js'
import Home from './components/Home.js'
import About from './components/About.js'
import Contact from './components/Contact.js'
import Footer from './components/Footer.js'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
  return (

      <Router >
          <div className="app">
              <Menu/>
              <br /><br />
              <div className="switch">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/home">
                         <Home />
                    </Route>
                    <Route exact path="/jobs">
                            <Job />
                    </Route>
                    <Route exact path="/about">
                         <About />
                    </Route>
                    <Route exact path="/contact">
                            <Contact />
                    </Route>
                </Switch>

              </div>
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              <Footer/>
          </div>
      </Router>
  );
}

export default App;
