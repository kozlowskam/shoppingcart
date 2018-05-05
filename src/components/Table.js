import PropTypes from 'prop-types';
import React, { PureComponent } from 'react'
import Title from '../components/Title'
import Product, {productShape} from '../components/Product'
import './Table.css'

export default class Table extends PureComponent {
  static propTypes = {
      products: PropTypes.arrayOf(productShape).isRequired,
      updateProduct: PropTypes.func.isRequired
  }
  render() {
    const { products, updateProduct } = this.props

    return (

      <div>
        <h2 className="Title">ShoppingCart</h2>
        <ul className="Table">
         {products.map((product, index) => (
            <Product key={index}
             onPlusClick = {updateProduct}
             { ...product } />
          ))}
        </ul>
      </div>
    )
  }
}
