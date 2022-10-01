import {NextPage, NextPageContext} from 'next';
import {Badge, Link, Text} from '@nextui-org/react';
import {useRouter} from 'next/router';
import React, {useEffect, useState} from 'react';
import {projects} from '../../components/content/projects/utils';
import {ArticleLayout} from '../../components/layout/article-layout';
import {Flex} from '../../components/styles/flex';
import NextLink from 'next/link';
import {GetStaticProps} from 'next';
import {ChevronIcon} from '../../components/icons/chevron-icon';
import Image from 'next/image';
import {Box} from '../../components/styles/box';

type Project = typeof projects[0];

interface Props {
   project: Project;
}

const Index = ({project}: Props) => {
   return (
      <ArticleLayout title={project?.title}>
         <Flex
            direction={'column'}
            css={{
               'gap': '$6',
               '@xsMax': {
                  px: '$10',
               },
            }}
         >
            <Box css={{'& img': {borderRadius: '$lg'}}}>
               <Image
                  src={project.img}
                  width={302}
                  layout="responsive"
                  alt={project.alt}
                  objectFit="cover"
                  height={140}
                  quality={100}
               />
            </Box>

            <Flex css={{gap: '$6'}} align={'center'}>
               <NextLink href={'/projects'}>
                  <Link css={{fontSize: '$xl'}}>Projects</Link>
               </NextLink>
               <ChevronIcon />
               <Text
                  h3
                  css={{
                     '@xsMax': {textAlign: 'center'},
                     'fontSize': '$xl',
                     'my': 0,
                  }}
               >
                  {project?.title}
               </Text>
            </Flex>
            <Text
               span
               css={{
                  fontFamily: 'inherit',
                  display: 'block',
               }}
            >
               {project?.description}
            </Text>
            <Flex css={{gap: '$6'}} align={'center'}>
               <Badge
                  css={{height: 'fit-content'}}
                  variant={'flat'}
                  color={'primary'}
                  borderWeight={'normal'}
               >
                  Platform
               </Badge>
               <Text span>{project?.platform}</Text>
            </Flex>

            <Flex css={{gap: '$6'}} align={'center'}>
               <Badge
                  variant={'flat'}
                  color={'primary'}
                  css={{height: 'fit-content'}}
               >
                  Stack
               </Badge>
               <Text span>{project?.stack}</Text>
            </Flex>
         </Flex>
      </ArticleLayout>
   );
};

Index.getInitialProps = async (ctx: NextPageContext) => {
   const projectExists = projects.find(
      (project) => project.href === ctx.asPath
   );
   if (!projectExists && ctx.res) {
      ctx.res.writeHead(302, {
         Location: '/',
      });
      ctx.res.end();
   }
   return {
      project: projectExists,
   };
};

export default Index;
