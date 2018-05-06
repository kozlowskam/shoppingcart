import React, { Component } from 'react';
import Clock from 'react-live-clock';
import Title from './components/Title';
import Table from './components/Table';
import CartItem from './components/CartItem';
import CheckOutButton from './components/CheckOutButton';
import './App.css';

const products = [
  {id: 1, name: "Prada Shoes", price: 570, quantity: 0},
  {id: 2, name: "Rolex Watch", price: 649, quantity: 0},
  {id: 3, name: "Paper clips", price: 0.1, quantity: 0}
];

class App extends Component {
  state = { products, totalValue: 0 }

  updateCartItem = (itemId, updates) => {
    this.setState({
      products: this.state.products.map((item) => {
        if (item.id !== itemId) return item
        return { ...item, ...updates }
      })
    })  }

  getTotalValue = () => {
    const value = this.state.products
      .map(item => item.price * item.quantity)
      .reduce((a,b) => a+b)
    this.setState({ totalValue: `${value}`
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Clock format={'HH:mm:ss'} ticking={true} />
          <h1 className="Title">Welcome in supersmall SHOP</h1>
        </header>

        <Table
          products={this.state.products}
          updateCartItem={this.updateCartItem}
        />
        <CheckOutButton name="CheckOut"
          onClick={this.getTotalValue}
        />
        <h2 className="Title">Total Value: {this.state.totalValue} $</h2>
        <img src="SC_icon.png" className="App-logo" alt="" />
      </div>
    );
  }

}


export default App;
