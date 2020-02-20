import './style.css';
import { Component } from 'react';
import React from 'react';
import Account from './Account';
import Main from './Main';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

class NavBar extends Component {

    render(){
        return(
            <div className="navbarContainer">
                <div className="navbarBody">
                    <h1 id="navbarTitle">Shopping list</h1>
                    <div id="navbarLinkContainer">
                        <Link className="navbarLink" to="/">Home</Link>
                        <Link className="navbarLink" to="/account">Account</Link>
                        <Link className="navbarLink" to="/myproducts">Products</Link>
                        <Link className="navbarLink" to="/purchasehistory">Purchase History</Link>                     
                    </div>
                </div>
            </div>
        );
      }
}

export default NavBar;