import React, { Component } from 'react';
import Title from './components/Title';
import Table from './components/Table';
import Product from './components/Product';
import './App.css';

const products = [
    {id: 1, name: "Prada Shoes", price: 570, quantity: 0},
    {id: 2, name: "Rolex Watch", price: 649, quantity: 0},
    {id: 3, name: "Paper clips", price: 0.1, quantity: 0}
]

class App extends Component {
  state = { products }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="Title">Enjoy shopping!</h1>
        </header>

        <Table
        products={this.state.products}
        updateProduct={this.updateProduct}

        />

      </div>
    );
  }
  updateProduct = (productId, updates) => {
  this.setState({
    products: this.state.products.map((product) => {
      if (product.id !== productId) return product
      return { ...product, ...updates }
    })
  })  }
}


export default App;
