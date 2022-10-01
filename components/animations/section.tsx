import {motion} from 'framer-motion';
import React, {CSSProperties} from 'react';

interface Props {
   children: React.ReactNode;
   delay?: number;
   CSS?: CSSProperties;
}

export const SectionAnimation = ({children, delay = 0.1, CSS}: Props) => {
   return (
      <motion.div
         initial={{y: 10, opacity: 0}}
         animate={{y: 0, opacity: 1}}
         transition={{duration: 0.8, delay}}
         style={CSS}
      >
         {children}
      </motion.div>
   );
};
