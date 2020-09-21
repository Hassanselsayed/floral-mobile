import React, { Component } from 'react';
import './App.css';
import './index.css';

import HeaderNav from './components/HeaderNav';
import Main from './components/Main';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div id="home">
        <HeaderNav />
        <header>
          <div className="headerBody wrapper">
            <div className="promotion">
              <h1>Lorem ipsum dolor sit amet.</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quod earum nobis. Molestiae ratione aspernatur repellendus omnis quae beatae tempora!</p>
              <button>Click</button>
            </div>
            <div className="headerImg">
              <img src={require("./assets/headerImg.jpg")} alt=""/>
            </div>
          </div>
        </header>
        <Main />
        <Footer />
      </div>
    )
  }
}


export default App;
