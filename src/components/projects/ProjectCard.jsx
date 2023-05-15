export const ProjectCard = ({ name, repo, href, img }) => {
  return (
    <a
      className='max-w-[330px] flex justify-center overflow-hidden rounded-t-[1rem] no-underline'
      href={href}
      target='_blank'
      rel='noreferrer'
    >
      <article className='w-full flex flex-col gap-4 justify-center items-center bg-sumiInko1 rounded-[1rem]'>
        <img
          className='w-[400px] aspect-[4/3] object-cover '
          src={img}
          alt={name}
        />
        <h3 className='text-lg text-center font-bold text-oldWhite m-1'>
          {name}
        </h3>
        <section className='flex gap-2 justify-center'>
          {[
            ['View code', repo],
            ['Visite site', href]
          ].map(([title, ref], index) => (
            <a
              key={index}
              className='text-sumiInko bg-oldWhite rounded-[1rem] py-1 px-4 mb-6 no-underline
              hover:bg-boatYellow'
              href={ref}
              target='_blank'
              rel='noreferrer'
            >
              {title}
            </a>
          ))}
        </section>
      </article>
    </a>
  )
}
