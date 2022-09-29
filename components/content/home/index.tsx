import {Text, Spacer, Avatar, Card, Button, Link} from '@nextui-org/react';
import Image from 'next/image';
import {ChevronIcon} from '../../icons/chevron-icon';
import {Box} from '../../styles/box';
import {Flex} from '../../styles/flex';
import img from '../../public/1.png';
import {GithubIcon} from '../../icons/github-icon';
import {LinkedinIcon} from '../../icons/linkedin-icon';

export const Home = () => (
   <Box css={{'px': '$12', 'mt': '$8', '@xsMax': {px: '$10'}}}>
      {/* <Image src={img.src} width={300} height={200} /> */}
      <Card variant="flat" css={{marginBottom: '$10'}}>
         <Card.Body css={{backgroundColor: '$accents2'}}>
            <Text css={{fontFamily: 'inherit', textAlign: 'center'}} as={'p'}>
               Hello, I&apos;m Mauricio Siu. I&apos;m a software engineer based
               in Honduras!
            </Text>
         </Card.Body>
      </Card>
      <Flex justify={'between'} css={{pb: '$10'}}>
         <Box css={{alignSelf: 'center'}}>
            <Text h2 css={{my: '$0'}}>
               Mauricio Siu
            </Text>
            <Text css={{fontFamily: 'inherit'}}>
               Software Engineer ( Backend / Frontend / Developer )
            </Text>
         </Box>

         <Avatar
            css={{'--nextui--avatarXl': '7.5rem'}}
            pointer
            bordered
            size={'xl'}
            src="https://www.craftz.dog/_next/image?url=%2Fimages%2Ftakuya.jpg&w=128&q=75"
         />
      </Flex>
      <Box css={{mb: '$10'}}>
         <Text h3>Work</Text>
         <Text
            span
            css={{textIndent: '1em', fontFamily: 'inherit', display: 'block'}}
         >
            Software Engineer with more than 4 years of experience in personal
            projects in development of applications, with solid knowledge in the
            programming area to deliver quality products and on time, I have a
            great motivation to solve problems and I focus every day to learn
            something new and improving on what I am passionate about.
         </Text>

         <Flex justify={'center'} css={{mt: '$8'}}>
            <Button iconRight={<ChevronIcon />}>My portfolio</Button>
         </Flex>
      </Box>

      <Box css={{mb: '$10'}}>
         <Text h3>Bio</Text>

         <Box as={'ul'} css={{m: 0}}>
            <Box as={'li'} css={{textIndent: '-3.4em', pl: '3.4em'}}>
               <Text span css={{mr: '1em'}} weight={'bold'}>
                  1999
               </Text>
               <Text span>Born in Cortes, Honduras.</Text>
            </Box>
            <Box as={'li'} css={{textIndent: '-3.4em', pl: '3.4em'}}>
               <Text span css={{mr: '1em'}} weight={'bold'}>
                  2018 - 2022
               </Text>
               <Text span>
                  Almost complete Bachelor&apos;s degree in Computer Science.
               </Text>
            </Box>
            <Box as={'li'} css={{textIndent: '-3.4em', pl: '3.4em'}}>
               <Text span css={{mr: '1em'}} weight={'bold'}>
                  2022 - Present
               </Text>
               <Text span>Work as a Software Engineer at CodeExitos.</Text>
            </Box>
         </Box>
      </Box>

      <Box css={{mb: '$10'}}>
         <Text h3>I ❤️ </Text>
         <Text as={'span'} css={{textIndent: '1em', fontFamily: 'inherit'}}>
            I love to learn new things, I am passionate about technology and I
            always try to learn something new every day, I love to solve
            problems and I am always looking for new challenges.
         </Text>
      </Box>

      <Box css={{mb: '$10'}}>
         <Text h3>On the Web </Text>
         <Box as={'ul'} css={{m: 0}}>
            <Box as={'li'}>
               <Link
                  block
                  target={'_blank'}
                  color="primary"
                  href="https://github.com/Siumauricio"
               >
                  <Button
                     light
                     color="primary"
                     auto
                     icon={<GithubIcon />}
                     ripple={false}
                     css={{pl: '$3'}}
                  >
                     @Siumauricio
                  </Button>
               </Link>
            </Box>
            <Box as={'li'}>
               <Link
                  block
                  target={'_blank'}
                  color="primary"
                  href="https://www.linkedin.com/in/carlos-mauricio-ortiz-siu-6b9011184/"
               >
                  <Button
                     light
                     color="primary"
                     auto
                     icon={<LinkedinIcon />}
                     ripple={false}
                     css={{pl: '$3'}}
                  >
                     @Mauricio Siu
                  </Button>
               </Link>
            </Box>
         </Box>
      </Box>

      <Spacer y={2.5} />
      <Flex justify={'center'}>
         <Text span>© 2022 Mauricio Siu. All Rights Reserved.</Text>
      </Flex>
      <Spacer y={2} />
   </Box>
);
