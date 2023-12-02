import './Footer.scss'

function Footer () {


    return(
        <footer className='footer'>
            <div className='footer__image--container'>
                <img className='footer__image' src="https://placehold.co/90x90" alt="Footer tag image" />
            </div>

            <div className='footer__options'>
                <article className='footer__options--left'>
                    <p className='footer__option'>option</p>
                    <p className='footer__option'>option</p>
                </article>

                <article className='footer__options--right'>
                    <p className='footer__option'>option</p>
                    <p className='footer__option'>option</p>
                </article>
            </div>

            <div className='footer__copy--container'>
                <p className='footer__copy'>copy</p>
            </div>


        </footer>
    )
}

export default Footer;