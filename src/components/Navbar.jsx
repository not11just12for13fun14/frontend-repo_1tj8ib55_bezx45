import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="inline-block w-8 h-8 rounded-full bg-blue-600" />
            <span className="text-slate-900 font-bold text-lg">VisionCare</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-slate-700">
            <a href="#products" className="hover:text-blue-600 transition-colors">Shop</a>
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#appointment" className="hover:text-blue-600 transition-colors">Book</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            <a href="/test" className="text-sm text-slate-500 hover:text-slate-700">System Test</a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded bg-slate-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            <span className="i" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white/80 backdrop-blur">
          <div className="px-4 py-3 flex flex-col gap-3">
            <a href="#products" className="py-2">Shop</a>
            <a href="#services" className="py-2">Services</a>
            <a href="#appointment" className="py-2">Book</a>
            <a href="#contact" className="py-2">Contact</a>
            <a href="/test" className="py-2 text-sm text-slate-500">System Test</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
