import { Link } from 'react-scroll'

const NavScroll = ({ text, id = '' }) => {
  return (
    <Link
      className='w-full'
      to={id} smooth duration={100}
    >
      <p className='border text-center border-solid border-transparent cursor-pointer py-3 m-0 flex-grow
      hover:border-solid hover:border-oldWhite rounded-full  hover:text-roninYellow  '
      >
        {text}
      </p>
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
    <header className='flex justify-center'>
      <nav className=' p-2 max-w-[400px] w-full flex gap-2 border border-solid border-oldWhite
        rounded-full'
      >
        <NavScroll text='Home' />
        <NavScroll text='Projects' id='projects' />
        <NavScroll text='Tecnologies' id='knowledge' />
      </nav>

    </header>
  )
}
