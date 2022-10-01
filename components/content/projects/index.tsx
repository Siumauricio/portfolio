import {Card, Col, Link, Row, Text} from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';
import {SectionAnimation} from '../../animations/section';
import {Box} from '../../styles/box';
import {Flex} from '../../styles/flex';
import {GridContainer} from '../../styles/grid';
import {projects} from './utils';

export const Projects = () => {
   return (
      <Box>
         <Text h3 css={{'@xsMax': {textAlign: 'center'}}}>
            Work
         </Text>
         <GridContainer
            cols={{
               '@xs': 2,
               '@xsMax': 1,
            }}
            gap={'xl'}
            align="start"
         >
            {projects.map((project, index) => (
               <SectionAnimation
                  key={index}
                  delay={project.delay}
                  CSS={{
                     height: '100%',
                     borderRadius: '14px',
                     backgroundColor: 'transparent',
                  }}
               >
                  <Card
                     isPressable
                     css={{
                        height: '100%',
                        display: 'block',
                     }}
                  >
                     <Card.Body
                        css={{
                           p: 0,
                           flex: 'auto',
                        }}
                     >
                        <Card.Image
                           src={project.img}
                           objectFit="cover"
                           width="100%"
                           height={140}
                           alt={project.title}
                        />
                     </Card.Body>
                     <Card.Footer css={{justifyItems: 'flex-start'}}>
                        <Row wrap="wrap" justify="space-between" align="center">
                           <Text b>{project.title}</Text>
                           <Text
                              css={{
                                 color: '$accents7',
                                 fontWeight: '$semibold',
                                 fontSize: '$sm',
                                 fontFamily: 'inherit',
                              }}
                           >
                              {project.description}
                           </Text>
                        </Row>
                     </Card.Footer>
                  </Card>
               </SectionAnimation>
            ))}
         </GridContainer>
      </Box>
   );
};
// <Card
//    isHoverable
//    isPressable
//    key={index}
//    css={{
//       '& img': {borderRadius: '$md'},
//       'maxW': '230px',
//       'mb': '$10',
//    }}
// >
//    <Image
//       src={project.img}
//       width={230}
//       height={130}
//       alt={project.alt}
//    />
//    <Text
//       as={'p'}
//       css={{
//          textAlign: 'center',
//          fontFamily: 'inherit',
//          mt: '$4',
//          fontSize: '$xl',
//       }}
//    >
//       {project.title}
//    </Text>
//    <Text css={{fontSize: '14px', fontFamily: 'inherit'}}>
//       {project.description}
//    </Text>
// </Card>
