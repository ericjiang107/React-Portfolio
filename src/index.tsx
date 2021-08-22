import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Home, Projects, AboutMe } from './components';
import './styles.css';
// importing for router-dom:
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>

        <Route exact path='/'>
          <Home title={'My Portfolio'} />
        </Route>

        <Route path='/Projects'>
          <Projects />
        </Route>

        <Route path='/aboutMe'>
          <AboutMe />
        </Route>

      </Switch>
    </Router>


  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
