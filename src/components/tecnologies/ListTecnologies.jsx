
export function ListTecnologies ({ knowledge }) {
  return (
    <div className='array-tec'>
      {
        knowledge.map(k => (
          <picture key={k.id} className='tec-img-container'>
            <img className='tec-img' src={k.img} alt={k.nombre} />
          </picture>
        ))
      }
    </div>

  )
}
