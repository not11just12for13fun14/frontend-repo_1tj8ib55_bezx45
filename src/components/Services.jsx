function Services() {
  const items = [
    {
      title: 'Comprehensive Eye Exams',
      desc: 'Detailed vision and eye health evaluation by licensed optometrists.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 12s3-6 10-6 10 6 10 6-3 6-10 6S2 12 2 12Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    },
    {
      title: 'Contact Lens Fitting',
      desc: 'Precise fittings for daily, monthly, and specialty lenses.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 12c0 4.418-4.477 8-10 8S2 16.418 2 12 6.477 4 12 4s10 3.582 10 8Z" />
        </svg>
      )
    },
    {
      title: 'Frame Styling',
      desc: 'Personalized recommendations to match your face and lifestyle.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 6h6l2 12H5L3 6Zm12 0h6l-2 12h-6l2-12Z" />
        </svg>
      )
    },
  ]

  return (
    <section id="services" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">In-store Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center">{it.icon}</div>
              <h3 className="mt-4 font-semibold text-slate-900">{it.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
