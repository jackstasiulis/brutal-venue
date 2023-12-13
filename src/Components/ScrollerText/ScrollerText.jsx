import './ScrollerText.scss'
import Marquee from 'react-fast-marquee';

function ScrollerText () {


    return(
        <div className='scroller-text'>
                <Marquee>
                    <div className='scroller-text__bar'>
                        <div className='scroller-text__text--container'>
                            <h3 className='scroller-text__text'>SHOWS HAPPENING EVERYDAY, STAY IN THE LOOP.</h3>
                        </div>
                        <div className='scroller-text__text--container'>
                            <h3 className='scroller-text__text'>SHOWS HAPPENING EVERYDAY, STAY IN THE LOOP.</h3>
                        </div>
                        <div className='scroller-text__text--container'>
                            <h3 className='scroller-text__text'>SHOWS HAPPENING EVERYDAY, STAY IN THE LOOP.</h3>
                        </div>
                        <div className='scroller-text__text--container'>
                            <h3 className='scroller-text__text'>SHOWS HAPPENING EVERYDAY, STAY IN THE LOOP.</h3>
                        </div>
                        <div className='scroller-text__text--container'>
                            <h3 className='scroller-text__text'>PLEASE COME TO THE SHOW.</h3>
                        </div>
                    </div>
                </Marquee>

            
        </div>
    )
}

export default ScrollerText;