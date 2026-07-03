import { Link } from 'react-router-dom'

export default function OrderSuccess() {
  return (
    <section style={{ textAlign: 'center', padding: '80px' }}>
      <h1>Order Placed Successfully</h1>
      <p>Thank you for choosing Vector Store.</p>
      <br />
      <Link to="/">
        <button>Continue Shopping</button>
      </Link>
    </section>
  )
}
