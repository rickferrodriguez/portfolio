import './App.css'
import { Header } from './components/header/Header.jsx'
import { PROJECTS, KNOWLEDGE, PDFPORTFOLIO } from './constants.js'
import { MainContent } from './components/home/MainContent.jsx'
import { ProjectContainer } from './components/projects/ProjectContainer.jsx'
import { TecnologiesContainer } from './components/tecnologies/TecnologiesContainer.jsx'

function App () {
  return (
    <>
      <Header />
      <main>
        <MainContent pdfConstant={PDFPORTFOLIO} />
        <section className='projects' id='projects'>
          <ProjectContainer projects={PROJECTS} />
        </section>
        <section className='knowledge' id='knowledge'>
          <TecnologiesContainer knowledge={KNOWLEDGE} />
        </section>
      </main>
    </>
  )
}

export default App
