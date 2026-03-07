import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        setMenuOpen(false)
    }, [location])

    const links = [
        { to: '/', label: 'Home' },
        { to: '/projects', label: 'Projects' },
        { to: '/skills', label: 'Skills' },
        { to: '/contact', label: 'Contact' },
    ]

    return (
        <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar__inner container">
                <NavLink to="/" className="navbar__brand">
                    <span className="navbar__logo-dot" />
                    <span>Portfolio</span>
                </NavLink>

                <nav className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
                    {links.map(link => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            end={link.to === '/'}
                            className={({ isActive }) =>
                                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                    <NavLink to="/contact" className="btn btn-primary navbar__cta">
                        Hire Me
                    </NavLink>
                </nav>

                <button
                    className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen(v => !v)}
                    aria-label="Toggle menu"
                    id="hamburger-btn"
                >
                    <span /><span /><span />
                </button>
            </div>
        </header>
    )
}
