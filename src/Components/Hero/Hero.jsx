import { useEffect, useState } from 'react';
import './Hero.scss'
import heroImage from '../../Assets/Images/hero.jpg'


function Hero () {

    // const [fontIndex, setFontIndex] = useState(0);
    const fontOptions = ['Redaction', 'Redaction10', 'Redaction20', 'Redaction35', 'Redaction50', 'Redaction70', 'Redaction100'];

    const [fontIndex, setFontIndex] = useState(fontOptions.length - 1);

    useEffect(() => {
        const interval = setInterval(() => {
          setFontIndex((prevIndex) => {
            const newIndex = (prevIndex - 1 + fontOptions.length) % fontOptions.length;
            if (newIndex === 0) {
              clearInterval(interval); // this stops the interval when our first font is reached
            }
            return newIndex;
          });
        }, 80); // Interval at which our font change loads in with
    
        return () => clearInterval(interval);
      }, []);

    const handleMouseMove = (event) => {
      const titleElement = document.getElementById('heroText');
      const mouseX = event.clientX;
      const rect = titleElement.getBoundingClientRect();
  
      // this checks if the mouse is over the title!
      if (mouseX >= rect.left && mouseX <= rect.right) {
        const percentage = (mouseX - rect.left) / (rect.width || 1);
        const newIndex = Math.floor(percentage * fontOptions.length);
        setFontIndex(newIndex);
      }
    };

    return(
        <body className='hero'>
            <div className='hero__content'>
                <article className='hero__image--container'>
                    {/* <div className='hero__image--overlay'></div> */}
                    <img className='hero__image' src={heroImage} alt="DO THIS LATER" />
                </article>
                
                <article id='heroText' className='hero__text--container' onMouseMove={handleMouseMove}>
                    <h1 className='hero__text' style={{ fontFamily: fontOptions[fontIndex] }}>here.all.week.</h1>
                </article>
            </div>
        </body>
    )
}

export default Hero;