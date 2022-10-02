import React from 'react';
import {Svg} from '../styles/svg';

export const ChevronIcon = () => {
   return (
      <Svg
         width="20"
         height="20"
         viewBox="0 0 24 24"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         css={{
            '& path': {
               stroke: '$primary',
            },
         }}
      >
         <path
            d="M8.5 5L15.5 12L8.5 19"
            stroke="#200E32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
      </Svg>
   );
};
