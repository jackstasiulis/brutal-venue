import './ScrollerText.scss'
import Marquee from 'react-fast-marquee';

function ScrollerText () {

    return(
        <div className='scroller-text'>
                <Marquee speed={40} className='marq'>
                    <div className='scroller-text__bar'>
                        <h3 className='scroller-text__text'>ショーズ・ハペニング・エブリッデー・ステー・イン・ザー・ループ</h3>
                        <h3 className='scroller-text__text'>ショーズ・ハペニング・エブリッデー・ステー・イン・ザー・ループ</h3>
                        <h3 className='scroller-text__text'>ショーズ・ハペニング・エブリッデー・ステー・イン・ザー・ループ</h3>
                        <h3 className='scroller-text__text'>ショーズ・ハペニング・エブリッデー・ステー・イン・ザー・ループ</h3>
                        <h3 className='scroller-text__text'>ショーズ・ハペニング・エブリッデー・ステー・イン・ザー・ループ</h3>
                    </div>
                </Marquee>
        </div>
    )
}

export default ScrollerText;