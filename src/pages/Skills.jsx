import { useState, useEffect } from 'react'
import './Skills.css'

const CATEGORY_ICONS = {
    Backend: '⚙️',
    Frontend: '🎨',
    Database: '🗄️',
    Tools: '🔧',
}

export default function Skills() {
    const [skills, setSkills] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [activeCategory, setActiveCategory] = useState('All')

    useEffect(() => {
        fetch('/api/skills')
            .then(res => { if (!res.ok) throw new Error('Failed to fetch'); return res.json() })
            .then(data => { setSkills(data); setLoading(false) })
            .catch(err => { setError(err.message); setLoading(false) })
    }, [])

    const categories = ['All', ...new Set(skills.map(s => s.category))]
    const filtered = activeCategory === 'All' ? skills : skills.filter(s => s.category === activeCategory)

    const grouped = filtered.reduce((acc, skill) => {
        if (!acc[skill.category]) acc[skill.category] = []
        acc[skill.category].push(skill)
        return acc
    }, {})

    return (
        <div className="skills-page">
            <section className="page-header">
                <div className="glow-blob page-blob" />
                <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: 40 }}>
                    <div className="badge badge-purple" style={{ marginBottom: 16, width: 'fit-content', margin: '0 auto 16px' }}>
                        My Toolkit
                    </div>
                    <h1 className="section-title">Skills &amp; Technologies</h1>
                    <p className="section-subtitle">
                        A snapshot of the languages, frameworks, and tools I work with every day.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    {/* Filter tabs */}
                    {!loading && !error && (
                        <div className="skills-filter">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    id={`filter-${cat.toLowerCase()}`}
                                    className={`filter-btn ${activeCategory === cat ? 'filter-btn--active' : ''}`}
                                    onClick={() => setActiveCategory(cat)}
                                >
                                    {CATEGORY_ICONS[cat] || '📁'} {cat}
                                </button>
                            ))}
                        </div>
                    )}

                    {loading && (
                        <div className="skills-loading">
                            {[1, 2, 3, 4, 5, 6, 8].map(i => <div key={i} className="skeleton-pill" />)}
                        </div>
                    )}
                    {error && (
                        <div className="projects-error">
                            <span>⚠️</span>
                            <p>Could not load skills. Make sure the backend is running.</p>
                        </div>
                    )}

                    {!loading && !error && (
                        <div className="skills-categories">
                            {Object.entries(grouped).map(([category, catSkills]) => (
                                <div key={category} className="skills-category">
                                    <h3 className="skills-category__title">
                                        <span className="skills-category__icon">{CATEGORY_ICONS[category] || '📁'}</span>
                                        {category}
                                        <span className="badge badge-blue">{catSkills.length}</span>
                                    </h3>
                                    <div className="skills-list">
                                        {catSkills.map((skill, i) => (
                                            <div key={skill.id} className="skill-item card" style={{ animationDelay: `${i * 0.05}s` }}>
                                                <div className="skill-item__header">
                                                    <span className="skill-item__name">{skill.name}</span>
                                                    <span className="skill-item__pct">{skill.proficiency}%</span>
                                                </div>
                                                <div className="skill-item__bar">
                                                    <div
                                                        className="skill-item__fill"
                                                        style={{ '--target-width': `${skill.proficiency}%` }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}
