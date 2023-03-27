import { Image } from '../header/Header.jsx'
import myPicture from '../../../public/me.png'

const urlLinkedin = 'https://www.linkedin.com/in/richrodriguezdev/'

export function MainContent ({ imgUrl }) {
  return (
    <section className=''>
      <h1 className='text-5xl flex items-end gap-3 align-text-bottom h-[100px] m-0 mb-4'>
        Hi I'm
        <a
          href={urlLinkedin} target='_blank' rel='noreferrer'
          className='no-underline text-transparent bg-clip-text bg-gradient-to-r from-autumnRed to-gruvYellow
          hover:from-winterGreen hover:to-autumnGreen'
        >
          RickFeR
        </a>
        <span className='h-full inline-block align-bottom'>🏋🏼‍♂️</span>
      </h1>
      <p className='m-0'>+2 years of experience as a
        developer. Delivering premium digital solutions. Achieving
        excellent user experience through performance and usability.
        Providing scalable and customized web solutions.
      </p>
      <ul className='social-section p-0'>
        {
          imgUrl.map(img => (
            <li
              className='list-none'
              key={img.id}
            >
              <a
                className='social-header-link'
                href={img.html}
                target='_blank' rel='noreferrer'
              >
                <Image
                  alt={img.name}
                  src={img.src}
                  classN='social-icon'
                />
                <span className='social-text'>
                  {img.title}
                </span>
              </a>
            </li>
          )
          )
          }
      </ul>
      <div className='img-avatar-container'>
        <picture>
          <img className='avatar' src={myPicture} alt='Profile Picture' />
        </picture>
      </div>
    </section>
  )
}
