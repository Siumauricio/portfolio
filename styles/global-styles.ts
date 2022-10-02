import {globalCss} from '@nextui-org/react';

export const globalStyles = globalCss({
   'html, body': {
      margin: 0,
      padding: 0,
      fontFamily: 'Inter, sans-serif',
      backgroundColor: '$accents0',
      transition: 'background-color 0.2s ease',
      // height: '100vh',
   },
   'p': {
      fontFamily: "'Inter', sans-serif",
   },
});
