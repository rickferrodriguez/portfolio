export function ListKnowledge ({ knowledge }) {
  const filteredKnow = knowledge.filter(t => t.type === 'know')
  return (
    <div className='grid grid-cols-3 gap-4 px-12 md:gap-7 md:px-4'>
      {
        filteredKnow.map((t) => (
          <article
            key={t.id}
            className='grid justify-center items-center bg-fujiYellow rounded-[1rem] py-4
            md:flex md:gap-6'
          >
            <img className='w-[60px] md:block md:object-contain lg:ml-7 md:ml-2  md:p-2 md:bg-winterYellow md:rounded-[1rem]' src={t.img} alt='' />
            <div className='hidden md:w-full md:block md:mr-2'>
              <h3 className='m-0 font-extrabold'>{t.nombre}</h3>
              <p className='m-0'>{t.temas}</p>
            </div>
          </article>
        ))
      }
    </div>
  )
}
