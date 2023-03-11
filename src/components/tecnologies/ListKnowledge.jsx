
export function ListKnowledge ({ knowledge }) {
  const filteredKnow = knowledge.filter(t => t.type === 'know')
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
