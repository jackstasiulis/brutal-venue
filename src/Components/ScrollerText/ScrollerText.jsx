import './ScrollerText.scss'
import Marquee from 'react-fast-marquee';

function ScrollerText () {

    const textItem = 'ショーズ・ハペニング・エブリッデー・ステー・イン・ザー・ループ';

    const multipleTexts = Array(5).fill(textItem);

    return(
        <div className='scroller-text'>
                <Marquee speed={40} className='marq'>
                    <div className='scroller-text__bar'>

                        {multipleTexts.map((text, index) => (
                            <h3 key={index} className='scroller-text__text'>
                                {text}
                            </h3>
                        ))}
                        
                    </div>
                </Marquee>
        </div>
    )
}

export default ScrollerText;