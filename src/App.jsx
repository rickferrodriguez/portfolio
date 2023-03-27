import { Header } from './components/header/Header.jsx'
import { PROJECTS, KNOWLEDGE, IMGURL } from './constants.js'
import { MainContent } from './components/home/MainContent.jsx'
import { ProjectContainer } from './components/projects/ProjectContainer.jsx'
import { TecnologiesContainer } from './components/tecnologies/TecnologiesContainer.jsx'

function App () {
  return (
    <>
      <Header />
      <main>
        <MainContent imgUrl={IMGURL} />
        <section className='flex flex-col justify-center items-center' id='projects'>
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
