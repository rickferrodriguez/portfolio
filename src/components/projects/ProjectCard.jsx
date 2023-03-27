export const ProjectCard = ({ name, repo, href, img }) => {
  return (
    <article
      className=''
    >
      <div className='max-w-[330px] overflow-hidden flex justify-center rounded-[1rem]'>
        <img
          className='w-[400px] aspect-[4/3] object-contain '
          src={img} alt={name}
        />
      </div>
      <p>{name}</p>
      <section className='icon-project-container'>
        <a className='project-link' href={repo} target='_blank' rel='noreferrer'>View code</a>
        <a className='project-link' href={href} target='_blank' rel='noreferrer'>Visit site</a>
      </section>
    </article>
  )
}
