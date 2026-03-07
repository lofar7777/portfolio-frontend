import { NavLink } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="footer__inner container">
                <div className="footer__brand">
                    <span className="footer__logo-dot" />
                    <span>Portfolio</span>
                </div>

                <nav className="footer__links">
                    <NavLink to="/" className="footer__link">Home</NavLink>
                    <NavLink to="/projects" className="footer__link">Projects</NavLink>
                    <NavLink to="/skills" className="footer__link">Skills</NavLink>
                    <NavLink to="/contact" className="footer__link">Contact</NavLink>
                </nav>

                <p className="footer__copy">© {year} · Built with Spring Boot &amp; React</p>
            </div>
        </footer>
    )
}
