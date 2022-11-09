import Head from 'next/head';
import React from 'react';
import {LayoutAnimation} from '../animations/layout';
import {Flex} from '../styles/flex';

interface Props {
   children: React.ReactNode;
   title?: string;
}

export const BlogLayout = ({children, title}: Props) => {
   const t = `${title} - Mauricio Siu`;
   return (
      <LayoutAnimation>
         <Flex
            direction={'column'}
            css={{
               'maxW': '640px',
               'ml': 'auto',
               'mr': 'auto',
               '@xsMax': {
                  px: '$10',
               },
            }}
         >
            {title && (
               <Head>
                  <title>{t}</title>
                  <meta name="twitter:title" content={t} />
                  <meta property="og:title" content={t} />
               </Head>
            )}
            {children}
         </Flex>
      </LayoutAnimation>
   );
};
