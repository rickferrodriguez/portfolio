import './App.css'
import { Header, IconLink } from './components/header/Header.jsx'
import { PROJECTS, KNOWLEDGE } from './constants.js'
import { ProjectCard } from './components/projects/ProjectCard.jsx'
import PortfolioSvg from '/portfolio.svg'

const pdfPortfolio = 'https://www.canva.com/design/DAFcc-zuYcU/VlfoBZ5sISVq2qro62-5tw/view?utm_content=DAFcc-zuYcU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'

const Projects = () => {
  const handleLink = (url) => {
    return window.open(url)
  }
  return (
    <>
      <h2>PROJECTS</h2>
      <div className='projects-container'>
        {
          PROJECTS.map((pr) => (
            <ProjectCard
              key={pr.id}
              name={pr.name}
              repo={pr.repo}
              img={pr.img}
              href={pr.href}
              handleLink={handleLink}
            />
          ))
        }
      </div>
    </>
  )
}

const BlockKnoledge = () => {
  const filteredKnow = KNOWLEDGE.filter(t => t.type === 'know')
  return (
    <div className='array-know'>
      {
        filteredKnow.map((t) => (
          <div key={t.id} className='block-know-card'>
            <picture className='know-img-container'>
              <img className='know-img' src={t.img} alt='' />
            </picture>
            <div className='know-title'>
              <h3 className='tittle-3'>{t.nombre}</h3>
              <p className='p-themes'>{t.temas}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

const BlockTecnologies = () => {
  return (
    <div className='array-tec'>
      {
        KNOWLEDGE.map(k => (
          <picture key={k.id} className='tec-img-container'>
            <img className='tec-img' src={k.img} alt={k.nombre} />
          </picture>
        ))
      }
    </div>

  )
}

const Tecnologies = () => {
  return (
    <>
      <section className='block-know'>
        <h2>KNOWLEDGE</h2>
        <BlockKnoledge />
      </section>
      <section className='block-tec'>
        <h2>TECNOLOGIES</h2>
        <BlockTecnologies />
      </section>
    </>
  )
}

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
      </div>
      <main>
        <section className='home-main-content'>
          <h1>Hi I'm <a href='https://www.linkedin.com/in/richard-rodriguez-13a334267/' target='_blank' className='myName' rel='noreferrer'>RickFeR</a> <span className='emoji-header'>🏋🏼‍♂️</span></h1>
          <p className='home-principal-text'>Web developer building their own version of a digital world. </p>
        </section>
        <section className='knowledge' id='knowledge'>
          <Tecnologies />
        </section>
        <section className='projects' id='projects'>
          <Projects />
        </section>
      </main>
    </>
  )
}

export default App
