
export function ListKnowledge ({ knowledge }) {
  const filteredKnow = knowledge.filter(t => t.type === 'know')
  return (
    <div className='grid grid-cols-3 gap-4 px-4'>
      {
        filteredKnow.map((t) => (
          <article key={t.id} className='grid justify-center bg-boatYellow rounded-[1rem] py-4'>
            <img className='w-[80px]' src={t.img} alt='' />
            <div className='hidden'>
              <h3 className='tittle-3'>{t.nombre}</h3>
              <p className='p-themes'>{t.temas}</p>
            </div>
          </article>
        ))
      }
    </div>
  )
}
