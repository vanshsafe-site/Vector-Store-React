import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()
  const isActive = (path) => (location.pathname === path ? 'active-link' : '')

  return (
    <header>
      <div className="logo">Vector Store</div>
      <nav>
        <Link to="/" className={isActive('/')}>Products</Link>
        <Link to="/cart" className={isActive('/cart')}>Cart</Link>
      </nav>
    </header>
  )
}
