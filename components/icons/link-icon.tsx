import React from 'react';
import {Svg} from '../styles/svg';

interface Props {
   width?: string | number;
   height?: string | number;
   color?: string;
}

export const LinkIcon = ({
   height = '0.9375em',
   width = '0.9375em',
   color = '$link',
}: Props) => {
   return (
      <Svg
         viewBox="0 0 24 24"
         width={width}
         height={height}
         stroke="currentColor"
         strokeWidth="1.5"
         strokeLinecap="round"
         strokeLinejoin="round"
         fill="none"
         shapeRendering="geometricPrecision"
         css={{
            '& path': {
               stroke: color,
            },
         }}
      >
         <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
         <path d="M15 3h6v6"></path>
         <path d="M10 14L21 3"></path>
      </Svg>
   );
};
