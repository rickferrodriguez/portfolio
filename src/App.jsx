import './App.css'
import { Header, IconLink } from './components/header/Header.jsx'
import { PROJECTS, KNOWLEDGE } from './constants.js'
import { ProjectContainer } from './components/projects/ProjectContainer.jsx'
import { TecnologiesContainer } from './components/tecnologies/TecnologiesContainer.jsx'
import PortfolioSvg from '../public/portfolio.svg'

const pdfPortfolio = 'https://www.canva.com/design/DAFcc-zuYcU/VlfoBZ5sISVq2qro62-5tw/view?utm_content=DAFcc-zuYcU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'

function App () {
  return (
    <>
      <Header />
      <div className='portfolio-header-icon'>
        <IconLink
          alt='Descargar Portfolio'
          src={PortfolioSvg}
          href={pdfPortfolio}
          classN='portfolio-icon'
        />
        <a
          href={pdfPortfolio}
          target='_blank' className='portfolio-text' rel='noreferrer'
        >Revisar CV
        </a>
      </div>
      <main>
        <section className='home-main-content'>
          <h1>Hi I'm <a href='https://www.linkedin.com/in/richard-rodriguez-13a334267/' target='_blank' className='myName' rel='noreferrer'>RickFeR</a> <span className='emoji-header'>🏋🏼‍♂️</span></h1>
          <p className='home-principal-text'>Web developer building their own version of a digital world. </p>
        </section>
        <section className='knowledge' id='knowledge'>
          <TecnologiesContainer knowledge={KNOWLEDGE} />
        </section>
        <section className='projects' id='projects'>
          <ProjectContainer projects={PROJECTS} />
        </section>
      </main>
    </>
  )
}

export default App
