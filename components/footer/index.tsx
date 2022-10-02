import {Spacer, Text} from '@nextui-org/react';
import React from 'react';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Footer = () => {
   return (
      <Box>
         <Spacer css={{pt: '$16', mt: '0 !important'}} />
         <Flex justify={'center'}>
            <Text span>© 2022 Mauricio Siu. All Rights Reserved.</Text>
         </Flex>
         <Spacer y={2} />
      </Box>
   );
};
