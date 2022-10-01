import {styled} from '@nextui-org/react';

export const GridContainer = styled('div', {
   'display': 'grid',
   'boxSizing': 'border-box',
   '@xsMax': {
      px: '$10',
   },
   'variants': {
      cols: {
         1: {
            gridTemplateColumns: '1fr',
         },
         2: {
            gridTemplateColumns: 'repeat(2, 1fr)',
         },
         3: {
            gridTemplateColumns: 'repeat(3, 1fr)',
         },
         4: {
            gridTemplateColumns: 'repeat(4, 1fr)',
         },
         5: {
            gridTemplateColumns: 'repeat(5, 1fr)',
         },
         6: {
            gridTemplateColumns: 'repeat(6, 1fr)',
         },
      },
      gap: {
         xs: {
            gap: '$xs',
         },
         sm: {
            gap: '$sm',
         },
         md: {
            gap: '$md',
         },
         lg: {
            gap: '$lg',
         },
         xl: {
            gap: '$xl',
         },
      },
      align: {
         start: {
            alignItems: 'start',
         },
         center: {
            alignItems: 'center',
         },
         end: {
            alignItems: 'end',
         },
         stretch: {
            alignItems: 'stretch',
         },
         baseline: {
            alignItems: 'baseline',
         },
      },
      justify: {
         start: {
            justifyItems: 'start',
         },
         center: {
            justifyItems: 'center',
         },
         end: {
            justifyItems: 'end',
         },
         stretch: {
            justifyItems: 'stretch',
         },
         baseline: {
            justifyItems: 'baseline',
         },
      },
   },
});
