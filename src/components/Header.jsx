import { useState, useEffect, useCallback } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = useCallback(() => {
    setMenuOpen(false)
    document.body.classList.remove('body-locked')
  }, [])

  const toggleMenu = useCallback(() => {
    setMenuOpen(prev => {
      if (!prev) document.body.classList.add('body-locked')
      else document.body.classList.remove('body-locked')
      return !prev
    })
  }, [])

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo */}
        <a href="#" className="header-logo" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          <svg viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
            <circle cx="28" cy="28" r="26" fill="none" stroke="#6e1f2a" strokeWidth="2" />
            <circle cx="28" cy="28" r="20" fill="none" stroke="#a3792f" strokeWidth="1.5" />
            <circle cx="28" cy="28" r="3" fill="#6e1f2a" />
          </svg>
          <span>S.P. Rajak</span>
        </a>

        {/* Desktop Navigation */}
        <nav>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#practice">Practice Areas</a></li>
            <li><a href="#approach">Approach</a></li>
            <li><a href="#contact" className="nav-cta">Request Consultation</a></li>
          </ul>
        </nav>

        {/* Hamburger */}
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          id="hamburger-toggle"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`mobile-overlay${menuOpen ? ' open' : ''}`}
        onClick={handleNavClick}
      />

      {/* Mobile Navigation */}
      <nav className={`mobile-nav${menuOpen ? ' open' : ''}`}>
        <ul className="mobile-nav-links">
          <li><a href="#about" onClick={handleNavClick}>About</a></li>
          <li><a href="#practice" onClick={handleNavClick}>Practice Areas</a></li>
          <li><a href="#approach" onClick={handleNavClick}>Approach</a></li>
        </ul>
        <a href="#contact" className="nav-cta" onClick={handleNavClick}>Request Consultation</a>
      </nav>
    </header>
  )
}
