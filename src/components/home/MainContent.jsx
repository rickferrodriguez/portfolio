import { Image } from '../header/Header.jsx'

export function MainContent ({ pdfConstant, imgUrl }) {
  return (
    <section className='home-main-content'>
      <div className='home-text'>
        <h1 className='main-h1'>Hi I'm <a href='https://www.linkedin.com/in/richard-rodriguez-13a334267/' target='_blank' className='myName' rel='noreferrer'>RickFeR</a> <span className='emoji-header'>🏋🏼‍♂️</span></h1>
        <p className='home-parragrafh'>+2 years of experience as a
          developer. Delivering premium digital solutions. Achieving
          excellent user experience through performance and usability.
          Providing scalable and customized web solutions.
        </p>
        <section className='social-section'>
          {
            imgUrl.map(img => (
              <a
                key={img.id}
                className='social-header-link'
                href={pdfConstant}
                target='_blank' rel='noreferrer'
              >
                <Image
                  alt='Descargar Portfolio'
                  src={img.src}
                  classN='social-icon'
                />
                <span className='social-text'>
                  {img.title}
                </span>
              </a>
            )
            )
          }
        </section>
      </div>
      <div className='img-avatar-container'>
        <picture>
          <img className='avatar' src='/me.png' alt='Profile Picture' />
        </picture>
      </div>
    </section>
  )
}
