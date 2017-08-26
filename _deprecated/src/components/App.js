import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import PageNotFound from './PageNotFound';
import Breadcrumbs from './Breadcrumbs';
import Header from './Header';
import s from '../styles/app.style';

export default function App() {
  return (
   
    <div style={s.root}>

      <Header />

       <h1 style={s.title}>Paige Kehoe</h1>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={PageNotFound} />
      </Switch>


    </div>
  );
}
