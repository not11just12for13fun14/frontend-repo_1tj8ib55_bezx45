import { useEffect, useState } from 'react'

function ProductCard({ item }) {
  return (
    <div className="group rounded-xl border border-slate-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-[4/3] overflow-hidden bg-slate-50">
        <img src={item.image || 'https://images.unsplash.com/photo-1511909525232-61113c912358?q=80&w=1600&auto=format&fit=crop'} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-slate-900 line-clamp-1">{item.title}</h3>
          <span className="text-blue-600 font-semibold">${item.price?.toFixed ? item.price.toFixed(2) : item.price}</span>
        </div>
        <p className="mt-1 text-sm text-slate-600 line-clamp-2">{item.description || 'Premium quality eyewear for everyday comfort.'}</p>
        <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
          <span>{item.brand || '—'}</span>
          <span>{item.material || 'Acetate'}</span>
        </div>
        <button className="mt-4 w-full px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800">Add to cart</button>
      </div>
    </div>
  )
}

function Products() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState('')

  useEffect(() => { fetchItems() }, [category])

  const fetchItems = async () => {
    setLoading(true)
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const url = new URL('/api/products', baseUrl)
      if (category) url.searchParams.set('category', category)
      const res = await fetch(url)
      const data = await res.json()
      setItems(data.items || [])
    } catch (e) {
      setItems([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="products" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Featured Eyewear</h2>
            <p className="text-slate-600">Shop our best sellers and new arrivals</p>
          </div>
          <div className="flex gap-2">
            {['', 'Frames', 'Sunglasses', 'Lenses'].map((c) => (
              <button key={c} onClick={() => setCategory(c)} className={`px-3 py-1.5 rounded-full text-sm border ${category===c ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-700 border-slate-200'}`}>
                {c || 'All'}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="animate-pulse h-72 bg-white rounded-xl border border-slate-200" />
            ))}
          </div>
        ) : items.length === 0 ? (
          <div className="text-center text-slate-600 py-16">No products found.</div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((item) => (
              <ProductCard key={item._id} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Products
