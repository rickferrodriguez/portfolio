import { ListKnowledge } from './ListKnowledge.jsx'
// import { ListTecnologies } from './ListTecnologies.jsx'

export function TecnologiesContainer ({ knowledge }) {
  return (
    <>
      <section>
        <h2 className='text-3xl text-roninYellow text-center mb-8'>KNOWLEDGE</h2>
        <ListKnowledge knowledge={knowledge} />
      </section>
    </>
  )
}
