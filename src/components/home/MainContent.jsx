export function MainContent () {
  return (
    <section className='home-main-content'>
      <div className='home-text'>
        <h1>Hi I'm <a href='https://www.linkedin.com/in/richard-rodriguez-13a334267/' target='_blank' className='myName' rel='noreferrer'>RickFeR</a> <span className='emoji-header'>🏋🏼‍♂️</span></h1>
        <p className='home-principal-text'>Web developer building their own version of a digital world. </p>
        <p className='home-parragrafh'>+2 años de experiencia como desarrollador.
          Soluciones digitales de primera calidad. Excelente experiencia de usuario en
          términos de rendimiento y usabilidad. Soluciones web escalables
          y personalizadas.
        </p>
      </div>
      <div className='img-avatar-container'>
        <picture>
          <img className='avatar' src='/me.png' alt='Profile Picture' />
        </picture>
      </div>
    </section>
  )
}
