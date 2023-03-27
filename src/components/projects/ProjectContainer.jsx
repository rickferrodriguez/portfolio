import { ProjectCard } from './ProjectCard.jsx'

export function ProjectContainer ({ projects }) {
  return (
    <>
      <h2>PROJECTS</h2>
      <div className='flex flex-col gap-10 md:grid md:grid-cols-3'>
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
