import { ListKnowledge } from './ListKnowledge.jsx'
// import { ListTecnologies } from './ListTecnologies.jsx'

export function TecnologiesContainer ({ knowledge }) {
  return (
    <>
      <section>
        <h2 className='text-center'>KNOWLEDGE</h2>
        <ListKnowledge knowledge={knowledge} />
      </section>
    </>
  )
}
