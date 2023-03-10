import { IconLink } from '../header/Header.jsx'

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
        <IconLink
          classN='social-project-icon'
          alt='GitHub'
          src='https://www.svgrepo.com/show/473620/github.svg'
          href={repo}
        />
        <IconLink
          classN='social-project-icon'
          alt='GitHub'
          src='https://www.svgrepo.com/show/412040/see.svg'
          href={href}
        />
      </footer>
    </article>
  )
}
