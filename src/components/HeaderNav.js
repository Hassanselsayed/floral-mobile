import React, { Component } from 'react';

class HeaderNav extends Component {
    constructor() {
        super()
        this.state = {
            active1: false,
            active2: false,
            active3: false,
            active4: false,
            active5: false,
            activeA: false,
            activeB: false,
            activeC: false,
            activeD: false,
            activeE: false,
        }
    }

    addElement = (no) => {
        if (no === 1) {
            this.setState({
                active1: true
            })
        } else if (no === 2) {
            this.setState({
                active2: true
            })
        } else if (no === 3) {
            this.setState({
                active3: true
            })
        } else if (no === 4) {
            this.setState({
                active4: true
            })
        } else {
            this.setState({
                active5: true
            })
        }
    }
    addElementAgain = (no) => {
        if (no === 'A') {
            this.setState({
                activeA: true,
            })
        } else if (no === 'B') {
            this.setState({
                activeB: true,
            })
        } else if (no === 'C') {
            this.setState({
                activeC: true,
            })
        } else if (no === 'D') {
            this.setState({
                activeD: true,
            })
        } else {
            this.setState({
                activeE: true,
            })
        }
    }
    removeElement = (no) => {
        if (no === 1) {
            this.setState({
                active1: false,
            })
        } else if (no === 2) {
            this.setState({
                active2: false,
            })
        } else if (no === 3) {
            this.setState({
                active3: false,
            })
        } else if (no === 4) {
            this.setState({
                active4: false,
            })
        } else {
            this.setState({
                active5: false,
            })
        }
    }

    render() {
        return (
            <nav className="topNav">

                
                <div className={`link link1 ${this.state.active1 ? "shownClass" : null}`}></div>
                <div className={`link link2 ${this.state.active2 ? "shownClass" : null}`}></div>
                <div className={`link link3 ${this.state.active3 ? "shownClass" : null}`}></div>
                <div className={`link link4 ${this.state.active4 ? "shownClass" : null}`}></div>
                <div className={`link link5 ${this.state.active5 ? "shownClass" : null}`}></div>

                <div className="topNavFlex wrapper">
                    <a href="#home" className="logo">Floral</a>
                    <div className="nav-div">
                        <button className="hamburger" title="Click here to open up hamburger menu"><i className="fas fa-bars"></i>
                            <span className="sr-only">Click here to open up hamburger menu</span>
                        </button>
                        <nav className="menu">
                            <div className="full-screen">
                                <button className="exit-responsive" title="Click me to close the navigation">
                                    <i className="fas fa-times"></i>
                                    <span className="sr-only">Click me to close the navigation</span>
                                </button>

                                <ul className="topNavLinks">
                                    <li onMouseLeave={() => this.removeElement(1)}>
                                        <button onMouseEnter={() => this.addElement(1)}>Menu1</button>
                                        
                                        <ul className={`hiddenList ${this.state.active1 ? "shownClass" : null}`} onMouseEnter={() => this.addElementAgain('A')}>
                                            <li><a href="#home">Lorem</a></li>
                                            <li><a href="#home">Lorem</a></li>
                                            <li><a href="#home">Lorem ipsum dolor sit</a></li>
                                            <li><a href="#home">Lorem</a></li>
                                            <li><a href="#home">Lorem ipsum</a></li>
                                            <li><a href="#home">Lorem ipsum</a></li>
                                        </ul>
                                    </li>
                                    <li onMouseLeave={() => this.removeElement(2)}>
                                        <button onMouseEnter={() => this.addElement(2)}>Menu2</button>
                                        <ul className={`hiddenList ${this.state.active2 ? "shownClass" : null}`} onMouseEnter={() => this.addElementAgain('B')}>
                                            <li><a href="#home">Lorem ipsum</a></li>
                                            <li><a href="#home">Lorem ipsum</a></li>
                                            <li><a href="#home">Lorem ipsum dolor sit</a></li>
                                            <li><a href="#home">Lorem ipsum</a></li>
                                            <li><a href="#home">Lorem</a></li>
                                            <li><a href="#home">Lorem ipsum</a></li>
                                        </ul>
                                    </li>
                                    <li onMouseLeave={() => this.removeElement(3)}>
                                        <button onMouseEnter={() => this.addElement(3)}>Menu3</button>
                                        <ul className={`hiddenList ${this.state.active3 ? "shownClass" : null}`} onMouseEnter={() => this.addElementAgain('C')}>
                                            <li><a href="#home">Lorem</a></li>                                <li><a href="#home">Lorem ipsum</a></li>
                                            <li><a href="#home">Lorem ipsum</a></li>
                                            <li><a href="#home">Lorem ipsum</a></li>
                                            <li><a href="#home">Lorem ipsum</a></li>
                                            <li><a href="#home">Lorem ipsum</a></li>
                                        </ul>
                                    </li>
                                    <li onMouseLeave={() => this.removeElement(4)}>
                                        <button onMouseEnter={() => this.addElement(4)}>Menu4</button>
                                        <ul className={`hiddenList ${this.state.active4 ? "shownClass" : null}`} onMouseEnter={() => this.addElementAgain('D')}>
                                            <li><a href="#home">Lorem</a></li>
                                            <li><a href="#home">Lorem ipsum</a></li>
                                            <li><a href="#home">Lorem</a></li>
                                        </ul>
                                    </li>
                                    <li onMouseLeave={() => this.removeElement(5)}>
                                        <button onMouseEnter={() => this.addElement(5)}>Menu5</button>
                                        <ul className={`hiddenList ${this.state.active5 ? "shownClass" : null}`} onMouseEnter={() => this.addElementAgain('E')}>
                                            <li><a href="#home">Lorem ipsum</a></li>
                                            <li><a href="#home">Lorem ipsum</a></li>
                                            <li><a href="#home">Lorem ipsum</a></li>
                                            <li><a href="#home">Lorem</a></li>
                                            <li><a href="#home">Lorem ipsum dolor</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="location">
                        <i></i>
                        <a href="#home">Find a Shop</a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default HeaderNav;