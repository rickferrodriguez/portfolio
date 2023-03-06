import {Link} from 'react-scroll'

const Alink = ({text, id=''}) => {
  // <a onClick={() => window.location.replace(`portfolio/#${id}`)} 
  //   className="link"><p>{text}</p></a>
  return (
    <Link 
      className="link"
      to={id} smooth={true} duration={100}><p>{text}</p></Link>
  )
}

export const IconLink = ({alt, src, href, classN='social-header-icon'}) => {
  return (
    <a href={href} target="_blank">
      <picture>
        <img 
          className={classN} 
          alt={alt} 
          src={src} >
        </img>
      </picture>
    </a>
  )
}


export const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="nav-link-container">
          <Alink text='Home' ></Alink>
          <Alink text='Tecnologies' id='knowledge' ></Alink>
          <Alink text='Projects' id='projects'></Alink>
        </div>
        <ul className='social-header'>
          <li className="social-header-container">
            <IconLink 
              alt='GitHub' 
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg'
              href='https://github.com/rickferrodriguez'
            />
          </li>
          <li className="social-header-container">
            <IconLink 
              alt="GitHub" 
              src="https://www.svgrepo.com/show/103404/linkedin-logo.svg" 
              href="https://www.linkedin.com/in/richard-rodriguez-13a334267/"
            />
          </li>
          <li className="social-header-container">
            <IconLink 
              alt="GitHub" 
              src="https://www.svgrepo.com/show/303161/gmail-icon-logo.svg" 
              href='mailto:richardfernandorodriguez@gmail.com'
            />
          </li>
        </ul>
      </nav>
      
    </header>
  )
}
