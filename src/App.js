import React, { Component } from 'react';
import './App.css';
import './index.css';

import HeaderNav from './components/HeaderNav';
import Main from './components/Main';


class App extends Component {
  render() {
    return (
      <div>
        <HeaderNav />
        <header>
          <div className="headerBody wrapper">
            <div className="promotion">
              <h1>Get iPhone SE On Us.</h1>
              <p>For a limited time, get iPhone SE (64GB) for Absolute ZeroTM 9 with 20GB of Fast LTE Data for only $65/mo3. 2-year term required.</p>
              <button>Shop Now</button>
            </div>
            <div className="headerImg">
              <img src={require("./assets/headerImg.jpg")} alt=""/>
            </div>
          </div>
        </header>
        <Main />
      </div>
    )
  }
}


export default App;
