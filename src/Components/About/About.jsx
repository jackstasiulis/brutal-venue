import './About.scss'

function About () {


    return(
        <section className='about'>
            <span className='about__scroll-point' id='about'></span>
            <div className='about__image--container'>
                <img className='about__image' src="https://placehold.co/500x500" alt="About us image" />
            </div>

            <div className='about__tagline--container'>
                <h1 className='about__tagline'>hello there</h1>
            </div>

            <div className='about__text--container'>
                <p className='about__text'>this is the about section description about us. this is who we are and what we do. read this again to find out more about us.</p>
            </div>

        </section>
    )
}

export default About;