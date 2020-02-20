import React, { Component } from 'react';
import NavBar from './NavBar';
import { BrowserRouter } from 'react-router-dom';

export default class Main extends Component {

    render() {
        return (
            <div>
                <NavBar />
                <h1>Main</h1>
            </div>
        )
    }
}
