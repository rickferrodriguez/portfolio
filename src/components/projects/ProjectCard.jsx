export const ProjectCard = ({ name, repo, href, img }) => {
  return (
    <article>
      <header className='max-w-[330px] overflow-hidden flex justify-center rounded-[1rem] '>
        <img
          className='w-[400px] aspect-[4/3] object-contain '
          src={img} alt={name}
        />
      </header>
      <h3 className='text-lg text-center font-bold text-oldWhite m-1'>{name}</h3>
      <section className='flex gap-2 justify-center'>
        {[
          ['View code', repo],
          ['Visite site', href]
        ].map(([title, ref], index) => (
          <a
            key={index}
            className='text-sumiInko bg-oldWhite rounded-[1rem] py-1 px-4 mb-2 no-underline
              hover:bg-boatYellow'
            href={ref} target='_blank' rel='noreferrer'
          >
            {title}
          </a>
        ))}
      </section>
    </article>
  )
}
