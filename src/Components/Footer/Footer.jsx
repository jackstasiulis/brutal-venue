import './Footer.scss'
import footerImage from '../../Assets/Images/footerImage.png'

function Footer () {


    return(
        <footer className='footer'>
            <div className='footer__image--container'>
                <img className='footer__image' src={footerImage} alt="Footer tag image" />
            </div>

            <div className='footer__options'>
                <article className='footer__options--left'>
                    <p className='footer__option'>contact</p>
                    <p className='footer__option'>work</p>
                </article>

                <article className='footer__options--right'>
                    <p className='footer__option'>find</p>
                    <p className='footer__option'>about</p>
                </article>
            </div>

            <div className='footer__copy--container'>
                <p className='footer__copy'>RACECAR&copy; 2024</p>
            </div>


        </footer>
    )
}

export default Footer;