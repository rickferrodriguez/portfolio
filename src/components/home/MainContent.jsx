import imgMe from '/me.png'

export function MainContent () {
  return (
    <section className='home-main-content'>
      <div className='home-text'>
        <h1>Hi I'm <a href='https://www.linkedin.com/in/richard-rodriguez-13a334267/' target='_blank' className='myName' rel='noreferrer'>RickFeR</a> <span className='emoji-header'>🏋🏼‍♂️</span></h1>
        <p className='home-principal-text'>Web developer building their own version of a digital world. </p>
        <p className='home-parragrafh'>+2 years of experience as a
          developer. Delivering premium digital solutions. Achieving
          excellent user experience through performance and usability.
          Providing scalable and customized web solutions.
        </p>
      </div>
      <div className='img-avatar-container'>
        <picture>
          <img className='avatar' src={imgMe} alt='Profile Picture' />
        </picture>
      </div>
    </section>
  )
}
