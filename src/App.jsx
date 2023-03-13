import './App.css'
import { Header, IconLink } from './components/header/Header.jsx'
import { PROJECTS, KNOWLEDGE, PDFPORTFOLIO } from './constants.js'
import { MainContent } from './components/home/MainContent.jsx'
import { ProjectContainer } from './components/projects/ProjectContainer.jsx'
import { TecnologiesContainer } from './components/tecnologies/TecnologiesContainer.jsx'
import PortfolioSvg from '/portfolio.svg'

function App () {
  return (
    <>
      <Header />
      <div className='portfolio-header-icon'>
        <IconLink
          alt='Descargar Portfolio'
          src={PortfolioSvg}
          href={PDFPORTFOLIO}
          classN='portfolio-icon'
        />
        <a
          href={PDFPORTFOLIO}
          target='_blank' className='portfolio-text' rel='noreferrer'
        >View CV
        </a>
      </div>
      <main>
        <MainContent />
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
