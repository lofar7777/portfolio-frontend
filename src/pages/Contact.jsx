import { useState } from 'react'
import './Contact.css'

const INITIAL = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
    const [form, setForm] = useState(INITIAL)
    const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'error'
    const [errorMsg, setErrorMsg] = useState('')

    const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

    const handleSubmit = async e => {
        e.preventDefault()
        setStatus('loading')
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            })
            if (!res.ok) {
                const data = await res.json()
                throw new Error(data.message || 'Something went wrong')
            }
            setStatus('success')
            setForm(INITIAL)
        } catch (err) {
            setStatus('error')
            setErrorMsg(err.message)
        }
    }

    const contactInfo = [
        { icon: '📧', label: 'Email', value: 'farswangolu@gmail.com' },
        { icon: '🌍', label: 'Location', value: 'Dehradun, India' },
        { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/lokesh-farswan-287811253' },
        { icon: '🐙', label: 'GitHub', value: 'github.com/lofar7777' },
    ]

    return (
        <div className="contact-page">
            <section className="page-header">
                <div className="glow-blob page-blob" />
                <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: 40 }}>
                    <div className="badge badge-purple" style={{ marginBottom: 16, width: 'fit-content', margin: '0 auto 16px' }}>
                        Get In Touch
                    </div>
                    <h1 className="section-title">Let's Work Together</h1>
                    <p className="section-subtitle">
                        Have a project in mind, want to collaborate, or just want to say hi?
                        I'd love to hear from you.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container contact-grid">

                    {/* Info */}
                    <aside className="contact-info">
                        <h2 className="contact-info__title">Contact Details</h2>
                        <p className="contact-info__sub">I typically respond within 24 hours.</p>
                        <div className="contact-cards">
                            {contactInfo.map(info => (
                                <div key={info.label} className="contact-card glass">
                                    <span className="contact-card__icon">{info.icon}</span>
                                    <div>
                                        <p className="contact-card__label">{info.label}</p>
                                        <p className="contact-card__value">{info.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </aside>

                    {/* Form */}
                    <div className="contact-form-wrap">
                        <div className="contact-form-card card">
                            <h2 className="contact-form__heading">Send a Message</h2>

                            {status === 'success' && (
                                <div className="contact-alert contact-alert--success">
                                    ✅ Message sent! I'll get back to you soon.
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="contact-alert contact-alert--error">
                                    ❌ {errorMsg}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="contact-form" noValidate id="contact-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="name">Name *</label>
                                        <input id="name" name="name" type="text" required
                                            className="input" placeholder="John Doe"
                                            value={form.name} onChange={handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="email">Email *</label>
                                        <input id="email" name="email" type="email" required
                                            className="input" placeholder="john@example.com"
                                            value={form.email} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="subject">Subject *</label>
                                    <input id="subject" name="subject" type="text" required
                                        className="input" placeholder="Project collaboration"
                                        value={form.subject} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="message">Message *</label>
                                    <textarea id="message" name="message" required
                                        className="textarea" placeholder="Tell me about your project..."
                                        value={form.message} onChange={handleChange} />
                                </div>
                                <button type="submit" id="submit-btn" className="btn btn-primary contact-submit"
                                    disabled={status === 'loading'}>
                                    {status === 'loading' ? 'Sending…' : 'Send Message →'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
