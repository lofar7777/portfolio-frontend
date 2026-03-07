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

                <div className="footer__socials">
                    <a href="https://github.com/lofar7777" target="_blank" rel="noreferrer" className="footer__social-link" aria-label="GitHub">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                        </svg>
                    </a>
                    <a href="https://linkedin.com/in/lokesh-farswan-287811253" target="_blank" rel="noreferrer" className="footer__social-link" aria-label="LinkedIn">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                    </a>
                    <a href="https://wa.me/918381832961" target="_blank" rel="noreferrer" className="footer__social-link" aria-label="WhatsApp">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                            <path d="M12.031 0C5.395 0 0 5.394 0 12.032c0 2.158.558 4.265 1.621 6.131L.484 24l5.962-1.565a11.96 11.96 0 005.585 1.383c6.634 0 12.029-5.395 12.029-12.033S18.665 0 12.031 0zm6.54 17.204c-.276.777-1.583 1.488-2.185 1.542-.556.051-1.282.138-4.148-1.048-3.425-1.417-5.69-4.881-5.86-5.11-.17-.229-1.4-1.867-1.4-3.565 0-1.697.88-2.54 1.198-2.873.318-.334.697-.417.928-.417.229 0 .461-.005.663.005.212.012.497-.079.778.599.289.699.987 2.41 1.074 2.584.086.175.144.378.029.608-.116.229-.175.378-.348.58-.173.203-.362.433-.52.593-.172.175-.353.368-.154.712.2.345.892 1.472 1.916 2.383 1.319 1.173 2.42 1.531 2.766 1.69.345.158.548.132.753-.082.203-.217.88-1.025 1.116-1.378.236-.353.473-.292.793-.175.321.116 2.03.957 2.378 1.131.348.175.58.261.666.406.086.146.086.842-.19 1.619z" />
                        </svg>
                    </a>
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
