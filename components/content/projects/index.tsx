import {Card, Row, Text} from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {SectionAnimation} from '../../animations/section';
import {Box} from '../../styles/box';
import {GridContainer} from '../../styles/grid';
import {projects} from './utils';

export const Projects = () => {
   return (
      <Box>
         <Text h2 css={{'@xsMax': {textAlign: 'center'}}}>
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
                  <Link href={project.href} key={index}>
                     <Card
                        isHoverable
                        isPressable
                        css={{
                           height: '100%',
                           display: 'block',
                           backgroundColor: '$backgroundContrast',
                           boxShadow: '$lg',
                           filter: 'none',
                        }}
                     >
                        <Card.Body
                           css={{
                              p: 0,
                              flex: 'auto',
                           }}
                        >
                           <Image
                              src={project.img}
                              width={302}
                              layout="responsive"
                              alt={project.alt}
                              objectFit="cover"
                              height={140}
                              quality={100}
                           />
                        </Card.Body>
                        <Card.Footer css={{justifyItems: 'flex-start'}}>
                           <Row
                              wrap="wrap"
                              justify="space-between"
                              align="center"
                           >
                              <Text b>{project.title}</Text>
                              <Text
                                 css={{
                                    fontFamily: 'inherit',
                                    color: '$accents7',
                                    fontWeight: '$semibold',
                                    fontSize: '$sm',
                                 }}
                              >
                                 {project.description}
                              </Text>
                           </Row>
                        </Card.Footer>
                     </Card>
                  </Link>
               </SectionAnimation>
            ))}
         </GridContainer>
      </Box>
   );
};
