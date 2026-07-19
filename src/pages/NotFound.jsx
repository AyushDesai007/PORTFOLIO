import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main className="content not-found-page">
      <section className="card">
        <h3>404 - Page Not Found</h3>
        <p>The page you are looking for does not exist.</p>
        <Link to="/" className="primary-btn">
          Back to Home
        </Link>
      </section>
    </main>
  )
}

export default NotFound
