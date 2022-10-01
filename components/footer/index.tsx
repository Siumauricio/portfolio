import {Spacer, Text} from '@nextui-org/react';
import React from 'react';
import {Flex} from '../styles/flex';

export const Footer = () => {
   return (
      <>
         <Spacer y={2.5} />
         <Flex justify={'center'}>
            <Text span>© 2022 Mauricio Siu. All Rights Reserved.</Text>
         </Flex>
         <Spacer y={2} />
      </>
   );
};
