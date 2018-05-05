import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Title from '../components/Title'
import './Product.css'

export const productShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired
})

export default class Product extends PureComponent {
  static propTypes = {
      ...productShape.isRequired,
}
  render() {
    const {name, price, quantity} = this.props

    return (

      <li className="Product">
        <p className="name">{name}</p>
        <p className="price">{price}</p>
        <p className="quantity">{quantity}</p>

      </li>
    )
  }}
