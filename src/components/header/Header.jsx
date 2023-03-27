import { Link } from 'react-scroll'

const NavScroll = ({ text, id = '' }) => {
  return (
    <Link
      className='w-full cursor-pointer'
      to={id} smooth duration={100}
    >
      <p className=' text-center  py-3 m-0 flex-grow
       hover:bg-winterYellow rounded-full  hover:text-roninYellow  transition duration-300'
      >
        {text}
      </p>
    </Link>
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
