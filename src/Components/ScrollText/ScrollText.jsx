import { useEffect, useRef } from 'react';
import './ScrollText.scss';
import { motion, useAnimation } from 'framer-motion';

function ScrollText() {
  const text = 'fejifejfiejf.'; // Change this to the word you want to repeat

  const textRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const textWidth = textRef.current.clientWidth;
    const containerWidth = window.innerWidth; // Get the width of the window
    const repetitions = Math.ceil(containerWidth / textWidth) + 1;

    controls.start({
      x: containerWidth, // Start from the right edge
      transition: {
        x: {
          ease: 'linear',
          duration: containerWidth * 0.02, // Adjust the duration as needed
          repeat: Infinity,
          repeatType: 'loop',
        },
      },
    });
  }, [controls, text]);

  return (
    <div className="scroll-text">
      <div className="scroll-text__line"></div>
      <motion.div ref={textRef} className="scroll-text__text" animate={controls}>
        {Array.from({ length: 10 }, (_, index) => (
          <span key={index}>{text}</span>
        ))}
      </motion.div>
      <div className="scroll-text__line"></div>
    </div>
  );
}

export default ScrollText;
