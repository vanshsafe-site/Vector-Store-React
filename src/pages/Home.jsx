import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'

export default function Home() {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadProducts()
  }, [])

  async function loadProducts() {
    setLoading(true)
    const { data, error } = await supabase.from('products').select('*')
    if (error) {
      console.error(error)
    } else {
      setProducts(data)
    }
    setLoading(false)
  }

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <Header />
      <section className="hero">
        <h1>Udbhav Pharmaceuticals</h1>
        <p>Firm of H.C.C. | Fast, reliable and affordable medical supplies.</p>

        <div className="search-card">
          <div className="search-field">
            <svg className="search-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
            </svg>
            <input
              id="searchInput"
              type="text"
              placeholder="Search medicines, brands, categories…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button
                type="button"
                className="search-clear"
                onClick={() => setSearch('')}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>

          {!loading && search && (
            <p className="search-meta">
              <strong>{filtered.length}</strong>{' '}
              {filtered.length === 1 ? 'result' : 'results'} for "{search}"
            </p>
          )}
        </div>
      </section>
      <section className="products" id="productContainer">
        {loading && <p>Loading products…</p>}
        {!loading &&
          filtered.map((product) => <ProductCard key={product.id} product={product} />)}
      </section>
    </>
  )
}
