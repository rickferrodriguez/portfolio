import { Link } from 'react-scroll'

const NavScroll = ({ text, id = '' }) => {
  return (
    <Link
      className='link'
      to={id} smooth duration={100}
    ><p>{text}</p>
    </Link>
  )
}

export const Image = ({ alt, src, classN = 'social-header-icon' }) => {
  return (
    <picture>
      <img
        className={classN}
        alt={alt}
        src={src}
      />
    </picture>
  )
}

export const Header = () => {
  return (
    <header>
      <nav className='navbar'>
        <div className='nav-link-container'>
          <NavScroll text='Home' />
          <NavScroll text='Tecnologies' id='knowledge' />
          <NavScroll text='Projects' id='projects' />
        </div>
      </nav>

    </header>
  )
}
