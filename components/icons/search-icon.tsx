import React from 'react';
import {Svg} from '../styles/svg';

export const SearchIcon = () => {
   return (
      <Svg
         fill="none"
         height={24}
         viewBox="0 0 24 24"
         width={24}
         css={{
            '& path': {
               stroke: '$accents6',
            },
         }}
      >
         <path
            d="M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19ZM22 22l-2-2"
            // stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
         />
      </Svg>
   );
};
