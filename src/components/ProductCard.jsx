import { useCart } from '../context/CartContext'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const inStock = product.stock > 0

  return (
    <div className="product-card" data-category={product.category || ''}>
      <img
        src={product.image_url || 'https://placehold.co/300x300?text=No+Image'}
        alt={product.name}
        className="product-image"
        loading="lazy"
        onError={(e) => {
          e.target.onerror = null
          e.target.src = 'https://placehold.co/300x300?text=No+Image'
        }}
      />
      <h3>{product.name}</h3>
      {product.category && <span className="category-tag">{product.category}</span>}
      <div className="price">₹{product.price}</div>
      <div className={`stock ${inStock ? 'in-stock' : 'out-stock'}`}>
        {inStock ? 'In Stock' : 'Out Of Stock'}
      </div>
      <button onClick={() => addToCart(product)} disabled={!inStock}>
        Add To Cart
      </button>
    </div>
  )
}
