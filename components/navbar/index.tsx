import React, {useEffect, useState} from 'react';
import {Navbar, Link, Text} from '@nextui-org/react';
import {LogoIcon} from '../icons/logo-icon';
import {Toggle} from './toggle';
import {useRouter} from 'next/router';
import NextLink from 'next/link';

export const NavbarWrapper = () => {
   const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
   const [activeMenu, setActiveMenu] = useState();
   const router = useRouter();
   const collapseItems = ['About', 'Projects', 'Blog'];

   useEffect(() => {
      // @ts-ignore
      document.body.style.overflow = null;
      isSideMenuOpen && (document.body.style.overflow = 'hidden');
   }, [isSideMenuOpen]);

   const HandleSideMenu = (flag = false, index = undefined) => {
      setActiveMenu(index);
      flag && setIsSideMenuOpen(!isSideMenuOpen);
      isSideMenuOpen && setIsSideMenuOpen(false);
   };
   return (
      <Navbar
         variant="floating"
         maxWidth={'sm'}
         css={{
            'bg': 'none',

            '& .nextui-navbar-container': {
               'mt': '$0',
               // 'mx': '$6',
               '--nextui--navbarContainerMaxWidth': '800px',
            },
            '@xsMax': {
               '& .nextui-navbar-container': {
                  mx: '$0',
                  borderTopRightRadius: '0',
                  borderTopLeftRadius: '0',
                  ...(isSideMenuOpen && {
                     borderBottomRightRadius: '0',
                     borderBottomLeftRadius: '0',
                  }),
               },
            },
         }}
      >
         <Navbar.Toggle
            showIn="xs"
            isSelected={isSideMenuOpen}
            onChange={() => HandleSideMenu(true, activeMenu)}
         />
         <NextLink href="/">
            <Navbar.Brand
               css={{
                  'cursor': 'pointer',
                  'transition': 'all 0.1s ease-in-out',
                  '&:hover': {
                     'color': '$accents8',
                     '& svg': {
                        transform: 'rotate(20deg)',
                     },
                  },
               }}
            >
               <LogoIcon />
               <Text b color="inherit">
                  Mauricio Siu
               </Text>
            </Navbar.Brand>
         </NextLink>
         <Navbar.Content
            enableCursorHighlight
            activeColor="default"
            hideIn="xs"
            variant="highlight"
         >
            <NextLink href="/">
               <Navbar.Link isActive={router.pathname === '/'}>
                  About
               </Navbar.Link>
            </NextLink>
            <NextLink href="/projects">
               <Navbar.Link
                  href="#"
                  isActive={router.pathname.includes('/projects')}
               >
                  Projects
               </Navbar.Link>
            </NextLink>

            <NextLink href="/blog">
               <Navbar.Link href="#" isActive={router.pathname === '/blog'}>
                  Blog
               </Navbar.Link>
            </NextLink>
         </Navbar.Content>
         <Navbar.Content
            css={{
               '@xs': {
                  w: '12%',
                  jc: 'flex-end',
               },
            }}
         >
            <Toggle />
         </Navbar.Content>
         <Navbar.Collapse isOpen={isSideMenuOpen}>
            {collapseItems.map((item, index) => (
               <Navbar.CollapseItem
                  key={item}
                  isActive={
                     (item === 'About' && router.pathname === '/') ||
                     (item === 'Projects' && router.pathname === '/projects') ||
                     (item === 'Blog' && router.pathname === '/blog')
                  }
               >
                  <NextLink
                     href={(item === 'About' && '/') || item.toLowerCase()}
                  >
                     <Link
                        onClick={() => HandleSideMenu()}
                        color="inherit"
                        css={{
                           minWidth: '100%',
                        }}
                        href="#"
                     >
                        {item}
                     </Link>
                  </NextLink>
               </Navbar.CollapseItem>
            ))}
         </Navbar.Collapse>
      </Navbar>
   );
};
