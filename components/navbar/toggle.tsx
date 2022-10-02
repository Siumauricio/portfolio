import {useTheme as useNextTheme} from 'next-themes';
import {LightIcon} from '../icons/light-icon';
import {DarkIcon} from '../icons/dark-icon';
import {useTheme} from '@nextui-org/react';
import {AnimatePresence, motion} from 'framer-motion';

export const Toggle = () => {
   const {setTheme, resolvedTheme} = useNextTheme();
   const {isDark, type} = useTheme();

   const toggleTheme = () => {
      const audio = new Audio(isDark ? '/switch-on.mp3' : '/switch-off.mp3');
      audio.play();
      setTheme(isDark ? 'light' : 'dark');
   };

   return (
      <AnimatePresence exitBeforeEnter initial={false}>
         <motion.div
            style={{display: 'inline-block', cursor: 'pointer'}}
            key={isDark ? 'dark' : 'light'}
            initial={{y: -20, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            exit={{y: 20, opacity: 0}}
            transition={{duration: 0.2}}
            onClick={toggleTheme}
            aria-label="Dark mode toggle"
         >
            {isDark ? <DarkIcon /> : <LightIcon />}
         </motion.div>
      </AnimatePresence>
   );
};
