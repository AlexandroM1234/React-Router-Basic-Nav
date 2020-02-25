import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import {route} from "react-router-dom"

const App = () => (
  <div>
    <Navigation>
      <route exact path="/"/>
      <route path="/about"/>
      <route path="/contact"/>
    </Navigation>
  </div>
);

export default App;
