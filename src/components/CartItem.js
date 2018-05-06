import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import PlusButton from '../components/PlusButton'
import './CartItem.css'


export const CartItemShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired
})

export default class CartItem extends PureComponent {
  static propTypes = {
    ...CartItemShape.isRequired,
    onPlusClick: PropTypes.func.isRequired,
  }

incrementQuantity = () => {
  const {id, quantity, onPlusClick } = this.props
  onPlusClick(id, { quantity: quantity + 1 })
}



render() {
  const {name, price, quantity} = this.props

  return (
    <li className="CartItem">
      <p className="name">{name} </p>
      <p className="price">Price: {price} $</p>
      <p className="quantity">Quantity: {quantity}</p>
      <PlusButton onClick={this.incrementQuantity} />
    </li>
  )
}}
