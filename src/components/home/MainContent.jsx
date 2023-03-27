import myPicture from '../../../public/me.png'

const urlLinkedin = 'https://www.linkedin.com/in/richrodriguezdev/'

export function MainContent ({ imgUrl }) {
  return (
    <section className='flex flex-col gap-8 justify-center items-center
      md:flex md:flex-row md:gap-24'
    >
      <div className='flex flex-col gap-4 justify-center items-center md:items-start'>
        <h1 className='text-5xl m-0 text-center'>
          Hi I'm
          <a
            href={urlLinkedin} target='_blank' rel='noreferrer'
            className='no-underline ml-2 text-transparent bg-clip-text bg-gradient-to-r from-autumnRed to-gruvYellow
            hover:from-winterGreen hover:to-autumnGreen'
          >
            RickFeR
          </a>
          <span className='align-[12px] text-6xl'>🏋🏼‍♂️</span>
        </h1>
        <p className='m-0 text-base text-center md:text-left'>+2 years of experience as a
          developer. Delivering premium digital solutions. Achieving
          excellent user experience through performance and usability.
          Providing scalable and customized web solutions.
        </p>
        <ul className='flex gap-4 self-center p-0 md:self-start'>
          {
            imgUrl.map(img => (
              <li
                className='list-none '
                key={img.id}
              >
                <a
                  className='group display block no-underline bg-autumnGreen py-1 px-2 rounded-[1rem]
                  hover:bg-winterGreen ease-in duration-200'
                  href={img.html}
                  target='_blank' rel='noreferrer'
                >
                  <img
                    className='w-[40px]'
                    src={img.src} alt={img.name}
                  />
                  {
                    img.title
                      ? (
                        <span className='ml-1 align-[8px] text-black font-semibold'>
                          {img.title}
                        </span>
                        )
                      : (
                        <></>
                        )
                  }
                </a>
              </li>
            ))
          }
        </ul>
      </div>
      <picture className='w-full order-first md:order-last grid justify-center'>
        <img className='w-64 rounded-[1rem]' src={myPicture} alt='Profile Picture' />
      </picture>
    </section>
  )
}
