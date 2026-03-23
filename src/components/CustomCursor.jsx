import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  const [hoverState, setHoverState] = useState('default'); // 'default', 'link', 'view'

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.closest('.view-interactive')) {
        setHoverState('view');
      } else if (
        target.closest('.interactive') || 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button'
      ) {
        setHoverState('link');
      } else {
        setHoverState('default');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:flex items-center justify-center overflow-hidden"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: hoverState === 'view' ? 3.5 : hoverState === 'link' ? 1.5 : 1,
          backgroundColor: hoverState === 'view' ? '#ffffff' : hoverState === 'link' ? 'rgba(255,255,255,0.8)' : 'transparent',
          border: hoverState === 'default' ? '1px solid rgba(255,255,255,0.8)' : 'none',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: hoverState === 'view' ? 1 : 0 }}
          className="text-black text-[7px] font-bold tracking-widest font-sans mix-blend-normal"
        >
          VIEW
        </motion.span>
      </motion.div>
    </>
  );
};

export default CustomCursor;
