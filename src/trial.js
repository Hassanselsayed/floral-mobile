// import React, { Component } from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

// const Contact = () => {
//     return (
//         <div>
//             <h2>Contact</h2>
//             <Link to="/contact/michelle">Michelle</Link>
//             <Route path="/contact/michelle" component={Michelle} />
//         </div>
//     )
// }
// const Michelle = () => {
//     return (
//         <p>Email: <a href="mailto:michelle@destinyschild.com">michelle@destinyschild.com</a></p>
//     );
// }
// const About = (props) => {
//     return (
//         <div>
//             <h2>About Me</h2>
//             <p>I am an expert at {props.match.params.skill}!</p>
//         </div>
//     )
// }

// class App extends Component {
//     render() {
//         const name = "Hassan";
//         return (
//             <Router>
//                 <div>
//                     <h1>My Personal Webpage!</h1>
//                     <NavLink activeStyle={{ color: 'red' }} to={`/about/${name}`}>About</NavLink>
//                     <NavLink activeClassName="active" to="/contact">Contact</NavLink>
//                     <Route path="/about/:skill" component={About} />
//                     <Route path="/contact" component={Contact} />
//                 </div>
//             </Router>
//         )
//     }
// }


// export default App;

// import React, { useState } from 'react';

// function Header() {

//     const [shopIsShown, setShopIsShown] = useState(false);
//     const [coverageIsShown, setCoverageIsShown] = useState(false);
//     const [supportIsShown, setSupportIsShown] = useState(false);
//     const [floralIsShown, setFloralIsShown] = useState(false);
//     const [contactIsShown, setContactIsShown] = useState(false);

//     return (
//         <nav className="topNav">
//             <div className="topNavFlex wrapper">
//                 <a href="" className="logo">Floral</a>
//                 <ul className="topNavLinks">
//                     <li>
//                         <button onMouseEnter={() => setShopIsShown(true)} onMouseLeave={() => setShopIsShown(false)}>Shop</button>
//                         {shopIsShown && (
//                             <ul className="hiddenList">
//                                 <li><a href="">Devices</a></li>
//                                 <li><a href="">Plans</a></li>
//                                 <li><a href="">Bring your own Phone</a></li>
//                                 <li><a href="">Prepaid</a></li>
//                                 <li><a href="">Add-ons</a></li>
//                                 <li><a href="">Special Offers</a></li>
//                             </ul>
//                         )}
//                     </li>
//                     <li>
//                         <button onMouseEnter={() => setCoverageIsShown(true)} onMouseLeave={() => setCoverageIsShown(false)}>Coverage</button>
//                         {coverageIsShown && (
//                             <ul className="hiddenList">
//                                 <li><a href="">Network Coverage</a></li>
//                                 <li><a href="">Network Expansion</a></li>
//                                 <li><a href="">International Calling & Texting</a></li>
//                                 <li><a href="">International Roaming</a></li>
//                                 <li><a href="">Transit</a></li>
//                                 <li><a href="">Floral 5G</a></li>
//                             </ul>
//                         )}
//                     </li>
//                     <li>
//                         <button onMouseEnter={() => setSupportIsShown(true)} onMouseLeave={() => setSupportIsShown(false)}>Support</button>
//                         {supportIsShown && (
//                             <ul className="hiddenList">
//                                 <li><a href="">All Support</a></li>
//                                 <li><a href="">Account & Billing</a></li>
//                                 <li><a href="">Network & Coverage</a></li>
//                                 <li><a href="">Plans & Services</a></li>
//                                 <li><a href="">Phones & Devices</a></li>
//                                 <li><a href="">Home Internet</a></li>
//                             </ul>
//                         )}
//                     </li>
//                     <li>
//                         <button onMouseEnter={() => setFloralIsShown(true)} onMouseLeave={() => setFloralIsShown(false)}>MyFloral</button>
//                         {floralIsShown && (
//                             <ul className="hiddenList">
//                                 <li><a href="">Login</a></li>
//                                 <li><a href="">Express Payment</a></li>
//                                 <li><a href="">MyAccount</a></li>
//                             </ul>
//                         )}
//                     </li>
//                     <li>
//                         <button onMouseEnter={() => setContactIsShown(true)} onMouseLeave={() => setContactIsShown(false)}>Contact Us</button>
//                         {contactIsShown && (
//                             <ul className="hiddenList">
//                                 <li><a href="">Apple iMessage</a></li>
//                                 <li><a href="">WhatsApp</a></li>
//                                 <li><a href="">Facebook Messenger</a></li>
//                                 <li><a href="">Twitter</a></li>
//                                 <li><a href="">Other Contact Options</a></li>
//                             </ul>
//                         )}
//                     </li>
//                 </ul>
//                 <div className="location">
//                     <i></i>
//                     <a href="">Find a Store</a>
//                 </div>
//             </div>
//         </nav>
//     )
// }

// export default Header;
