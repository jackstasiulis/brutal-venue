import { useEffect, useRef } from 'react';
import './ScrollText.scss'
import { motion, useAnimation } from 'framer-motion';

function ScrollText () {
    const text = 'fejifejfiejf. fejifejfiejf. fejifejfiejf. fejifejfiejf. fejifejfiejf.'

    const textRef = useRef(null);
    const controls = useAnimation();
    
    useEffect(() => {
      const textWidth = textRef.current.clientWidth;
      const containerWidth = textRef.current.parentElement.clientWidth;
      const repetitions = Math.ceil(containerWidth / textWidth) + 1;
    
      controls.start({
        x: `-${repetitions * 100}%`,
        transition: { ease: 'linear', duration: repetitions * 1, repeat: Infinity },
      });
    }, [controls, text]);


    return(
        <div className="scroll-text">
        <div className="scroll-text__line"></div>
        <motion.div ref={textRef} className="scroll-text__text" animate={controls}>
          {text}
        </motion.div>
        <div className="scroll-text__line"></div>
      </div>
    )
}

export default ScrollText;
