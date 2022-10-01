import {motion} from 'framer-motion';
import React from 'react';

interface Props {
   children: React.ReactNode;
}

const variants = {
   hidden: {opacity: 0, x: 0, y: 20},
   enter: {opacity: 1, x: 0, y: 0},
   exit: {opacity: 0, x: -0, y: 20},
};

export const LayoutAnimation = ({children}: Props) => {
   return (
      <motion.article
         initial="hidden"
         animate="enter"
         exit="exit"
         variants={variants}
         transition={{duration: 0.4, type: 'easeInOut'}}
         style={{
            position: 'relative',
            marginTop: '1rem',
            backgroundColor: 'inherit',
         }}
      >
         {children}
      </motion.article>
   );
};
