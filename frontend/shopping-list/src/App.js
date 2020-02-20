import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import Account from './components/Account'
import MyProducts from './components/MyProducts';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PurchaseHistory from './components/PurchaseHistory';


class App extends Component {
  
  render(){
    return(
      <div>
        <Switch>
          <Route path="/account">
            <Account/>
          </Route>
          <Route path="/myproducts">
            <MyProducts/>
          </Route>
          <Route path="/purchasehistory">
            <PurchaseHistory/>
          </Route>
          <Route path="/">
            <Main/>
          </Route>
        </Switch>
      </div>
      );
    }
  }
  
  export default App;
  
  // componentDidMount() {
  //   fetch('http://localhost:5000/product')
  //   .then(res => res.json())
  //   .then((data) => {
  //     this.setState({ products: data })
  //   })
  //   .catch(console.log)
  // }