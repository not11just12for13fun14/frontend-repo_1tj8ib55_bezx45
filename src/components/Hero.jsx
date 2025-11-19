function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-40 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-[40rem] h-[40rem] bg-blue-200 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-[40rem] h-[40rem] bg-cyan-200 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            See better. Look better.
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            Premium eyewear, expert eye exams, and contact lenses — all in one place.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#appointment" className="px-5 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">Book an Eye Exam</a>
            <a href="#products" className="px-5 py-3 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors">Shop Frames</a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500"/>Insurance Accepted</div>
            <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500"/>Same-day Lenses</div>
            <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500"/>Free Adjustments</div>
          </div>
        </div>
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1600&auto=format&fit=crop" alt="Eyewear" className="rounded-2xl shadow-2xl" />
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl">
            <p className="text-sm font-semibold">Over 500+ frames in-store</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
