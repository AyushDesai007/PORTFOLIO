function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A responsive React portfolio showcasing skills and projects.',
    },
    {
      title: 'Todo App',
      description: 'A simple task manager built with React state and local storage.',
    },
    {
      title: 'Weather Dashboard',
      description: 'A live weather lookup app using a public API.',
    },
  ]

  return (
    <main className="content">
      <section className="card">
        <h3>Projects</h3>
        <p className="section-intro">
          These are some sample projects that demonstrate UI, state, and API skills.
        </p>
        <div className="project-list">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Projects
