import React, { Component } from 'react';
import NavBar from './NavBar';
import ShoppingList from './ShoppingList';

export default class Main extends Component {

    render() {
        return (
            <div>
                <NavBar />
                
                <div className="bodyContainer">
                   <ShoppingList />
                </div>
            </div>
        )
    }
}
