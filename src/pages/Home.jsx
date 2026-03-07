import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
    const highlights = [
        { icon: '🚀', count: '5+', label: 'Projects Built' },
        { icon: '💼', count: '1+', label: 'Years Experience' },
        { icon: '🛠️', count: '10+', label: 'Technologies' },
        { icon: '☕', count: '∞', label: 'Cups of Coffee' },
    ]

    return (
        <div className="home">
            {/* Hero */}
            <section className="hero">
                <div className="glow-blob hero__blob-1" />
                <div className="glow-blob hero__blob-2" />
                <div className="container hero__inner">
                    {/* Left: Text */}
                    <div className="hero__content">
                        <div className="hero__badge badge badge-purple animate-fadeInUp" style={{ animationDelay: '0s' }}>
                            <span className="hero__status-dot" />
                            Available for opportunities
                        </div>
                        <h1 className="hero__title animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
                            Hi, I'm <span className="hero__title-gradient">Lokesh Farswan</span>
                        </h1>
                        <p className="hero__subtitle animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                            MCA student at <strong>DIT University</strong> &amp; Full-Stack Developer.
                            I build modern, performant web applications using <strong>Spring Boot</strong> &amp; <strong>React</strong>.
                        </p>
                        <div className="hero__actions animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                            <Link to="/projects" className="btn btn-primary">
                                View My Work →
                            </Link>
                            <Link to="/contact" className="btn btn-outline">
                                Get In Touch
                            </Link>
                        </div>
                    </div>

                    {/* Right: Profile Photo */}
                    <div className="hero__photo-wrap animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                        <div className="hero__photo-ring" />
                        <div className="hero__photo-container">
                            <img
                                src="/profile.jpg"
                                alt="Lokesh Farswan"
                                className="hero__photo"
                                onError={e => {
                                    e.target.style.display = 'none'
                                    e.target.nextSibling.style.display = 'flex'
                                }}
                            />
                            {/* Fallback avatar if photo not found */}
                            <div className="hero__photo-fallback" style={{ display: 'none' }}>
                                LF
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Stats */}
            <section className="section stats-section">
                <div className="container">
                    <div className="stats-grid">
                        {highlights.map((h, i) => (
                            <div key={i} className="stat-card card">
                                <span className="stat-card__icon">{h.icon}</span>
                                <span className="stat-card__count">{h.count}</span>
                                <span className="stat-card__label">{h.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About */}
            <section className="section about-section">
                <div className="container about-grid">
                    <div className="about-text">
                        <div className="badge badge-blue" style={{ marginBottom: 16 }}>About Me</div>
                        <h2 className="about-heading">Passionate about building <br />things that matter</h2>
                        <p className="about-para">
                            I'm <strong>Lokesh Farswan</strong>, an MCA student at <strong>DIT University</strong> and a
                            full-stack developer who thrives at the intersection of great design and robust engineering.
                            With a strong foundation in Java and Spring Boot on the backend, and React on the frontend,
                            I craft end-to-end solutions that are fast, scalable, and delightful to use.
                        </p>
                        <p className="about-para">
                            When I'm not writing code, I'm exploring new frameworks, contributing to open-source
                            projects, or enjoying a good book on system design.
                        </p>
                        <div className="about-actions">
                            <Link to="/skills" className="btn btn-primary">View Skills</Link>
                            <Link to="/projects" className="btn btn-outline">See Projects</Link>
                        </div>
                    </div>
                    <div className="about-decoration">
                        <div className="about-card glass">
                            <p className="about-card__quote">"Code is like humor. When you have to explain it, it's bad."</p>
                            <span className="about-card__author">— Cory House</span>
                        </div>
                        <div className="about-tech-tags">
                            {['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Docker', 'Git'].map(t => (
                                <span key={t} className="tag">{t}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section cta-section">
                <div className="container">
                    <div className="cta-card glass">
                        <div className="glow-blob cta-blob" />
                        <h2 className="cta-title">Ready to build something amazing?</h2>
                        <p className="cta-sub">Let's collaborate and bring your ideas to life.</p>
                        <Link to="/contact" className="btn btn-primary">Let's Talk →</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
