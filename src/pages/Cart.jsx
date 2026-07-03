import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Header from '../components/Header'

export default function Cart() {
  const { cart, increaseQty, decreaseQty, removeItem, total } = useCart()
  const navigate = useNavigate()

  return (
    <>
      <Header />
      <section className="page-header">
        <h1>Your Cart</h1>
      </section>

      <section className="cart-container" id="cartContainer">
        {cart.length === 0 && <p>Your cart is empty.</p>}
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="cart-info">
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
            </div>
            <div className="cart-controls">
              <button className="qty-btn" onClick={() => decreaseQty(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button className="qty-btn" onClick={() => increaseQty(item.id)}>+</button>
              <button className="remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </section>

      <section className="cart-summary">
        <h2>Total: ₹{total}</h2>
        <button
          id="checkoutBtn"
          disabled={cart.length === 0}
          onClick={() => navigate('/checkout')}
        >
          Proceed To Checkout
        </button>
      </section>
    </>
  )
}
