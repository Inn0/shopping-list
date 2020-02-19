import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';

class App extends Component {
  state = {
    products: []
  }

  // componentDidMount() {
  //   fetch('http://localhost:5000/product')
  //   .then(res => res.json())
  //   .then((data) => {
  //     this.setState({ products: data })
  //   })
  //   .catch(console.log)
  // }

  render(){
    return(
      // <p>{this.state.products.map(product => <p>{product.name}</p>)}</p>
      <NavBar />
    );
  }
}

export default App;
