import React, { useState, Component } from 'react';

class Header extends Component {

    // const [shopIsShown, setShopIsShown] = useState(false);
    // const [coverageIsShown, setCoverageIsShown] = useState(false);
    // const [supportIsShown, setSupportIsShown] = useState(false);
    // const [floralIsShown, setFloralIsShown] = useState(false);
    // const [contactIsShown, setContactIsShown] = useState(false);

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
            height: false,
        }
    }

    addElement = (no) => {
        this.setState({
            height: true
        })
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
        // this.setState({
        //     height: true
        // })
        if (no === 'A') {
            this.setState({
                activeA: true,
                height: true
            })
        } else if (no === 'B') {
            this.setState({
                activeB: true,
                height: true
            })
        } else if (no === 'C') {
            this.setState({
                activeC: true,
                height: true
            })
        } else if (no === 'D') {
            this.setState({
                activeD: true,
                height: true
            })
        } else {
            this.setState({
                activeE: true,
                height: true
            })
        }
    }
    removeElement = (no) => {
        if (no === 1) {
            this.setState({
                active1: false,
                height: false
            })
        } else if (no === 2) {
            this.setState({
                active2: false,
                height: false
            })
        } else if (no === 3) {
            this.setState({
                active3: false,
                height: false
            })
        } else if (no === 4) {
            this.setState({
                active4: false,
                height: false
            })
        } else {
            this.setState({
                active5: false,
                height: false
            })
        }
    }
    // removeElementAgain = (no) => {
    //     console.log(no, "4");
    //     if (no === 'A') {
    //         this.setState({
    //             activeA: false,
    //             active1: false,
    //             height: false
    //         })
    //     } else if (no === 'B') {
    //         this.setState({
    //             activeB: false
    //         })
    //     } else if (no === 'C') {
    //         this.setState({
    //             activeC: false
    //         })
    //     } else if (no === 'D') {
    //         this.setState({
    //             activeD: false
    //         })
    //     } else {
    //         this.setState({
    //             activeE: false
    //         })
    //     }
    // }

    render() {

        return (
            <nav className={`topNav ${this.state.height ? "largeHeight" : null}`}>
                <div className="topNavFlex wrapper">
                    <a href="#" className="logo">Floral</a>
                    <ul className="topNavLinks">
                        <li onMouseLeave={() => this.removeElement(1)}>
                            <button onMouseEnter={() => this.addElement(1)}>Shop</button>
                            {/* {shopIsShown && ( */}
                            <ul className={`hiddenList ${this.state.active1 ? "shownClass" : null}`} onMouseEnter={() => this.addElementAgain('A')}>
                                <li><a href="#">Devices</a></li>
                                <li><a href="#">Plans</a></li>
                                <li><a href="#">Bring your own Phone</a></li>
                                <li><a href="#">Prepaid</a></li>
                                <li><a href="#">Add-ons</a></li>
                                <li><a href="#">Special Offers</a></li>
                            </ul>
                            {/* )} */}
                        </li>
                        <li onMouseLeave={() => this.removeElement(2)}>
                            <button onMouseEnter={() => this.addElement(2)}>Coverage</button>
                            {/* {coverageIsShown && ( */}
                            <ul className={`hiddenList ${this.state.active2 ? "shownClass" : null}`} onMouseEnter={() => this.addElementAgain('B')}>
                                <li><a href="#">Network Coverage</a></li>
                                <li><a href="#">Network Expansion</a></li>
                                <li><a href="#">International Calling & Texting</a></li>
                                <li><a href="#">International Roaming</a></li>
                                <li><a href="#">Transit</a></li>
                                <li><a href="#">Floral 5G</a></li>
                            </ul>
                            {/* )} */}
                        </li>
                        <li onMouseLeave={() => this.removeElement(3)}>
                            <button onMouseEnter={() => this.addElement(3)}>Support</button>
                            {/* {supportIsShown && ( */}
                            <ul className={`hiddenList ${this.state.active3 ? "shownClass" : null}`} onMouseEnter={() => this.addElementAgain('C')}>
                                <li><a href="#">All Support</a></li>
                                <li><a href="#">Account & Billing</a></li>
                                <li><a href="#">Network & Coverage</a></li>
                                <li><a href="#">Plans & Services</a></li>
                                <li><a href="#">Phones & Devices</a></li>
                                <li><a href="#">Home Internet</a></li>
                            </ul>
                            {/* )} */}
                        </li>
                        <li onMouseLeave={() => this.removeElement(4)}>
                            <button onMouseEnter={() => this.addElement(4)}>MyFloral</button>
                            {/* {floralIsShown && ( */}
                            <ul className={`hiddenList ${this.state.active4 ? "shownClass" : null}`} onMouseEnter={() => this.addElementAgain('D')}>
                                <li><a href="#">Login</a></li>
                                <li><a href="#">Express Payment</a></li>
                                <li><a href="#">MyAccount</a></li>
                            </ul>
                            {/* )} */}
                        </li>
                        <li onMouseLeave={() => this.removeElement(5)}>
                            <button onMouseEnter={() => this.addElement(5)}>Contact Us</button>
                            {/* {contactIsShown && ( */}
                            <ul className={`hiddenList ${this.state.active5 ? "shownClass" : null}`} onMouseEnter={() => this.addElementAgain('E')}>
                                <li><a href="#">Apple iMessage</a></li>
                                <li><a href="#">WhatsApp</a></li>
                                <li><a href="#">Facebook Messenger</a></li>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">Other Contact Options</a></li>
                            </ul>
                            {/* )} */}
                        </li>
                    </ul>
                    <div className="location">
                        <i></i>
                        <a href="#">Find a Store</a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;