import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (res.ok) {
        setStatus({ ok: true, msg: 'Thanks for reaching out! We will get back to you soon.' })
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus({ ok: false, msg: data.detail || 'Something went wrong' })
      }
    } catch (e) {
      setStatus({ ok: false, msg: e.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Get in touch</h2>
            <p className="text-slate-600 mt-2">Questions about prescriptions, insurance, or products? Send us a message.</p>
            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4">
              <input className="border border-slate-300 rounded-lg px-4 py-2" required name="name" placeholder="Full name" value={form.name} onChange={handleChange} />
              <input className="border border-slate-300 rounded-lg px-4 py-2" required type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
              <textarea className="border border-slate-300 rounded-lg px-4 py-2" required rows="4" name="message" placeholder="Your message" value={form.message} onChange={handleChange} />
              <button disabled={loading} className="px-5 py-3 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800 disabled:opacity-60">
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              {status && (
                <p className={`text-sm ${status.ok ? 'text-green-600' : 'text-red-600'}`}>{status.msg}</p>
              )}
            </form>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200">
            <h3 className="font-semibold text-slate-900">Visit us</h3>
            <p className="mt-2 text-slate-600 text-sm">123 Main Street, Suite 200
              <br/>Your City, ST 12345
              <br/>Mon–Sat: 10am – 6pm
              <br/>Sun: Closed</p>
            <div className="mt-4 h-56 rounded-xl overflow-hidden bg-slate-100">
              <img src="https://images.unsplash.com/photo-1619468129361-605ebea04b44?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNYXB8ZW58MHwwfHx8MTc2MzQ1MTU1Nnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Map" className="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
