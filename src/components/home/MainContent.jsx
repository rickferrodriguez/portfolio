import { Image } from '../header/Header.jsx'
import myPicture from '../../../public/me.png'

const urlLinkedin = 'https://www.linkedin.com/in/richrodriguezdev/'

export function MainContent ({ imgUrl }) {
  return (
    <section className=''>
      <h1 className='text-5xl flex gap-3'>
        Hi I'm
        <a
          href={urlLinkedin} target='_blank' rel='noreferrer'
          className='no-underline'
        >
          RickFeR
        </a>
        <span className='emoji-header'>🏋🏼‍♂️</span>
      </h1>
      <p className='home-parragrafh'>+2 years of experience as a
        developer. Delivering premium digital solutions. Achieving
        excellent user experience through performance and usability.
        Providing scalable and customized web solutions.
      </p>
      <ul className='social-section'>
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
