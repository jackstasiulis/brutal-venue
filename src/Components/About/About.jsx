import './About.scss'
import newsStand from '../../Assets/Images/newsStand.jpg'

function About () {


    return(
        <section className='about'>
            <span className='about__scroll-point' id='about'></span>
            <div className='about__image--container'>
                <img className='about__image' src={newsStand} alt="About us image" />
            </div>

            <div className='about__tagline--container'>
                <h1 className='about__tagline'>zoom zoom</h1>
            </div>

            <div className='about__text--container'>
                <p className='about__text'>concerts, art sales, album parties, fashion. if its creative, we're into it. send us your ideas and lets make it happen.</p>
            </div>

        </section>
    )
}

export default About;