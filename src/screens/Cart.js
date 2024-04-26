import React from 'react'

const Cart = () => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <button>Checkout</button>

      <table>
        <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
        </thead>

        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <button>Clear</button>
      <h3>Total: </h3>
    </div>
  )
}

export default Cart