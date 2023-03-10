export const ProjectCard = ({ name, repo, href, img, handleLink }) => {
  const handleClick = () => {
    handleLink(href)
  }
  return (
    <article
      className='project-card'
    >
      <header
        className='project-card-header'
        onClick={handleClick}
      >
        <div className='project-card-name'>
          <p>{name}</p>
        </div>
        <img
          className='project-image'
          src={img} alt=''
        />
      </header>
      <footer className='icon-project-container'>
        <a className='project-link' href={repo} target='_blank' rel='noreferrer'>View code</a>
        <a className='project-link' href={href} target='_blank' rel='noreferrer'>Visit site</a>
      </footer>
    </article>
  )
}
