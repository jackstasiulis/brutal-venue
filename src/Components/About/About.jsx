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

            <ul className='about__text--container'>
                <li className='about__text'>&#x2022; Concerts, art sales, album parties, fashion.</li>
                <li className='about__text'>&#x2022; If it's creative, we want it. </li>
                <li className='about__text'>&#x2022; Send us your ideas, lets make it happen.</li>
            </ul>
        </section>
    )
}

export default About;