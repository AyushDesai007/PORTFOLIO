import { NavLink } from 'react-router-dom'

function NavBar({ darkMode, setDarkMode }) {
  return (
    <nav className="site-nav">
      <div className="brand">Ayush Portfolio</div>
      <div className="nav-links">
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>
          Projects
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
          Contact
        </NavLink>
      </div>
      <button className="theme-toggle" onClick={() => setDarkMode((prev) => !prev)}>
        {darkMode ? 'Light mode' : 'Dark mode'}
      </button>
    </nav>
  )
}

export default NavBar
