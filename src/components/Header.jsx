function Header() {
  return (
    <header className="hero-section">
      <div className="hero-text">
        <p className="eyebrow">Student • Aspiring Developer</p>
        <h1>
          Hi, I’m <span>Ayush Desai</span>
        </h1>
        <p className="intro">
          I enjoy building clean web experiences and solving problems with code.
          My toolkit includes C, C++, Java, JavaScript, Python, and React.
        </p>
        <div className="hero-actions">
          <a href="#skills" className="secondary-btn">
            View Skills
          </a>
        </div>
      </div>

      <div className="hero-card">
        <div className="avatar">AD</div>
        <h2>Passionate Learner</h2>
        <p>Focused on creating simple, elegant, and functional projects.</p>
      </div>
    </header>
  )
}

export default Header
