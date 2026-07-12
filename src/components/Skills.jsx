const skills = [
  { name: 'C', icon: '⚙️' },
  { name: 'C++', icon: '💻' },
  { name: 'Java', icon: '☕' },
  { name: 'JavaScript', icon: '✨' },
  { name: 'HTML', icon: '🧱' },
  { name: 'CSS', icon: '🎨' },
  { name: 'React JS', icon: '⚛️' },
  { name: 'Python', icon: '🐍' },
  { name: 'Pandas', icon: '📊' },
  { name: 'NumPy', icon: '🔢' },
]

function Skills() {
  return (
    <section className="card" id="skills">
      <h3>Skills</h3>
      <p className="section-intro">Here are the technologies I enjoy working with.</p>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-badge">
            <span className="skill-icon">{skill.icon}</span>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
