import PropTypes from 'prop-types';
import React, { PureComponent } from 'react'
import CartItem, {CartItemShape} from '../components/CartItem'
import './Table.css'

export default class Table extends PureComponent {
  static propTypes = {
    products: PropTypes.arrayOf(CartItemShape).isRequired,
    updateCartItem: PropTypes.func.isRequired
  }
  render() {
    const { products, updateCartItem } = this.props

    return (

      <div>
        <h2 className="Title">ShoppingCart</h2>
        <ul className="Table">
          {products.map((item, index) => (
            <CartItem key={index}
              onPlusClick = {updateCartItem}
              { ...item } />
          ))}
          {}
        </ul>

      </div>
    )
  }
}
