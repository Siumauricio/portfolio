import {Card, Col, Row, Text} from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
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
                  <Link href={project.href}>
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
