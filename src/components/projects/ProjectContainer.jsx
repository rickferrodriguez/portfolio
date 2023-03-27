import { ProjectCard } from './ProjectCard.jsx'

export function ProjectContainer ({ projects }) {
  return (
    <>
      <h2>PROJECTS</h2>
      <div className='projects-container'>
        {
          projects.map((pr) => (
            <ProjectCard
              key={pr.id}
              name={pr.name}
              repo={pr.repo}
              img={pr.img}
              href={pr.href}
            />
          ))
        }
      </div>
    </>
  )
}
