import { ListKnowledge } from './ListKnowledge.jsx'
import { ListTecnologies } from './ListTecnologies.jsx'

export function TecnologiesContainer ({ knowledge }) {
  return (
    <>
      <section className='block-know'>
        <h2>KNOWLEDGE</h2>
        <ListKnowledge knowledge={knowledge} />
      </section>
      <section className='block-tec'>
        <h2>TECNOLOGIES</h2>
        <ListTecnologies knowledge={knowledge} />
      </section>
    </>
  )
}
