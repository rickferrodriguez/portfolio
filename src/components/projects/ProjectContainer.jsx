import { ProjectCard } from './ProjectCard.jsx'

export function ProjectContainer ({ projects }) {
  return (
    <>
      <h2 className='text-3xl text-roninYellow mb-8'>PROJECTS</h2>
      <div className='flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-14
        lg:grid lg:grid-cols-3 lg:gap-14'
      >
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
