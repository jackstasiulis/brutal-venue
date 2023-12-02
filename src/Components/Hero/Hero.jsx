import './Hero.scss'

function Hero () {


    return(
        <body className='hero'>
            <div className='hero__content'>
                <article className='hero__image--container'>
                    <img className='hero__image' src="https://placehold.co/1000x600" alt="DO THIS LATER" />
                </article>
                
                <article className='hero__text--container'>
                    <h1 className='hero__text'>placeholder</h1>
                </article>
            </div>
        </body>
    )
}

export default Hero;