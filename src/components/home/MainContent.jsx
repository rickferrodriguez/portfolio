import imgMe from '/me.png'
import PortfolioSvg from '/portfolio.svg'
import { IconLink } from '../header/Header.jsx'

export function MainContent ({ pdfConstant }) {
  return (
    <section className='home-main-content'>
      <div className='home-text'>
        <h1>Hi I'm <a href='https://www.linkedin.com/in/richard-rodriguez-13a334267/' target='_blank' className='myName' rel='noreferrer'>RickFeR</a> <span className='emoji-header'>🏋🏼‍♂️</span></h1>
        <p className='home-parragrafh'>+2 years of experience as a
          developer. Delivering premium digital solutions. Achieving
          excellent user experience through performance and usability.
          Providing scalable and customized web solutions.
        </p>
        <div className='portfolio-header-icon'>
          <IconLink
            alt='Descargar Portfolio'
            src={PortfolioSvg}
            href={pdfConstant}
            classN='portfolio-icon'
          />
          <a
            href={pdfConstant}
            target='_blank' className='portfolio-text' rel='noreferrer'
          >View CV
          </a>
        </div>
      </div>
      <div className='img-avatar-container'>
        <picture>
          <img className='avatar' src={imgMe} alt='Profile Picture' />
        </picture>
      </div>
    </section>
  )
}
