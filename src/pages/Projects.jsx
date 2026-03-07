import { useState, useEffect } from 'react'
import { api } from '../api'
import './Projects.css'

export default function Projects() {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        api.get('/api/projects')
            .then(res => { if (!res.ok) throw new Error('Failed to fetch'); return res.json() })
            .then(data => { setProjects(data); setLoading(false) })
            .catch(err => { setError(err.message); setLoading(false) })
    }, [])

    const getInitials = (title) => title.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()

    const getTagsFromStack = (stack) => stack ? stack.split(',').map(t => t.trim()) : []

    return (
        <div className="projects-page">
            {/* Header */}
            <section className="page-header">
                <div className="glow-blob page-blob" />
                <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: 40 }}>
                    <div className="badge badge-purple" style={{ marginBottom: 16, width: 'fit-content', margin: '0 auto 16px' }}>
                        My Work
                    </div>
                    <h1 className="section-title">Featured Projects</h1>
                    <p className="section-subtitle">
                        A showcase of things I've built — from full-stack web apps to innovative solutions.
                    </p>
                </div>
            </section>

            {/* Grid */}
            <section className="section">
                <div className="container">
                    {loading && (
                        <div className="projects-loading">
                            {[1, 2, 3, 4].map(i => <div key={i} className="skeleton-card" />)}
                        </div>
                    )}
                    {error && (
                        <div className="projects-error">
                            <span>⚠️</span>
                            <p>Could not load projects. Make sure the backend is running.</p>
                            <code>GET /api/projects</code>
                        </div>
                    )}
                    {!loading && !error && (
                        <div className="projects-grid">
                            {projects.map((p, i) => (
                                <article key={p.id} className="project-card card" style={{ animationDelay: `${i * 0.08}s` }}>
                                    <div className="project-card__cover">
                                        <div className="project-card__initials">{getInitials(p.title)}</div>
                                        <div className="project-card__gradient" />
                                    </div>
                                    <div className="project-card__body">
                                        <h3 className="project-card__title">{p.title}</h3>
                                        <p className="project-card__desc">{p.description}</p>
                                        <div className="project-card__tags">
                                            {getTagsFromStack(p.techStack).map(tag => (
                                                <span key={tag} className="tag">{tag}</span>
                                            ))}
                                        </div>
                                        <div className="project-card__links">
                                            {p.githubUrl && (
                                                <a href={p.githubUrl} target="_blank" rel="noreferrer" className="btn btn-outline project-link" id={`github-${p.id}`}>
                                                    GitHub ↗
                                                </a>
                                            )}
                                            {p.liveUrl && (
                                                <a href={p.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary project-link" id={`live-${p.id}`}>
                                                    Live Demo ↗
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}
