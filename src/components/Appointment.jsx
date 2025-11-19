import { useState } from 'react'

function Appointment() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', time: '', notes: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/appointments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (res.ok) {
        setStatus({ ok: true, msg: 'Appointment booked! We will confirm shortly.' })
        setForm({ name: '', email: '', phone: '', date: '', time: '', notes: '' })
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
    <section id="appointment" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Book an Eye Exam</h2>
            <p className="text-slate-600 mt-2">Choose a date and time that works for you. We’ll follow up to confirm your appointment.</p>
            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4">
              <input className="border border-slate-300 rounded-lg px-4 py-2" required name="name" placeholder="Full name" value={form.name} onChange={handleChange} />
              <input className="border border-slate-300 rounded-lg px-4 py-2" required type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
              <input className="border border-slate-300 rounded-lg px-4 py-2" required name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
              <div className="grid grid-cols-2 gap-4">
                <input className="border border-slate-300 rounded-lg px-4 py-2" required type="date" name="date" value={form.date} onChange={handleChange} />
                <input className="border border-slate-300 rounded-lg px-4 py-2" required type="time" name="time" value={form.time} onChange={handleChange} />
              </div>
              <textarea className="border border-slate-300 rounded-lg px-4 py-2" rows="3" name="notes" placeholder="Notes (optional)" value={form.notes} onChange={handleChange} />
              <button disabled={loading} className="px-5 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-60">
                {loading ? 'Booking...' : 'Book Appointment'}
              </button>
              {status && (
                <p className={`text-sm ${status.ok ? 'text-green-600' : 'text-red-600'}`}>{status.msg}</p>
              )}
            </form>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h3 className="font-semibold text-slate-900">What to expect</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 list-disc list-inside">
              <li>Vision check and prescription update</li>
              <li>Eye health screening (glaucoma, cataracts, etc.)</li>
              <li>Contact lens consultation if needed</li>
              <li>Personalized frame and lens recommendations</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Appointment
