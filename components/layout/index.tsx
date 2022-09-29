import React from 'react';
import {NavbarWrapper} from '../navbar';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

interface Props {
   children: React.ReactNode;
}

export const Layout = ({children}: Props) => {
   return (
      <Flex
         direction={'column'}
         css={{
            backgroundColor: '$accents0',
         }}
      >
         <NavbarWrapper />
         <Flex
            css={{
               maxW: '640px',
               // minWidth: 'min-content',
               ml: 'auto',
               mr: 'auto',
               alignItems: 'center',
               alignContent: 'center',
               justifyItems: 'center',
               justifySelf: 'center',
               alignSelf: 'center',
            }}
         >
            {children}
         </Flex>
      </Flex>
   );
};
