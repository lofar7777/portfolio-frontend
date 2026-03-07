// API base URL
// In development: empty string → Vite proxy forwards /api/* → localhost:8080
// In production: set VITE_API_URL to your Railway backend URL
//   e.g. https://portfolio-backend.up.railway.app
const API_BASE = import.meta.env.VITE_API_URL || ''

export const api = {
    get: (path) => fetch(`${API_BASE}${path}`),
    post: (path, body) =>
        fetch(`${API_BASE}${path}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        }),
}
