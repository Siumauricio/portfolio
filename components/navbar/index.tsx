import React from 'react';
import {Navbar, Button, Link, Text, Dropdown, Avatar} from '@nextui-org/react';
import {LogoIcon} from '../icons/logo-icon';
import {Toggle} from './toggle';

export const NavbarWrapper = () => {
   const collapseItems = ['About', 'Projects', 'Blog'];
   return (
      <Navbar
         variant="floating"
         maxWidth={'sm'}
         css={{
            'bg': 'none',

            '& .nextui-navbar-container': {
               'mt': '$0',
               '--nextui--navbarContainerMaxWidth': '800px',
            },
         }}
      >
         <Navbar.Toggle showIn="xs" />
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
         <Navbar.Content
            enableCursorHighlight
            activeColor="default"
            hideIn="xs"
            variant="highlight"
         >
            <Navbar.Link href="#">About</Navbar.Link>
            <Navbar.Link href="#">Projects</Navbar.Link>
            <Navbar.Link href="#">Blog</Navbar.Link>
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
         <Navbar.Collapse>
            {collapseItems.map((item, index) => (
               <Navbar.CollapseItem key={item} isActive={index === 2}>
                  <Link
                     color="inherit"
                     css={{
                        minWidth: '100%',
                     }}
                     href="#"
                  >
                     {item}
                  </Link>
               </Navbar.CollapseItem>
            ))}
         </Navbar.Collapse>
      </Navbar>
   );
};
//   <Navbar
//          isBordered
//          variant="sticky"
//          css={{
//             '& .nextui-navbar-container': {
//                borderBottom: 'none',
//             },
//          }}
//       >
//          <Navbar.Brand
// css={{
//    'cursor': 'pointer',
//    'transition': 'all 0.1s ease-in-out',
//    '&:hover': {
//       'color': '$accents8',
//       '& svg': {
//          transform: 'rotate(20deg)',
//       },
//    },
//             }}
//          >
//             <Navbar.Toggle aria-label="toggle navigation" showIn={'sm'} />
//             <LogoIcon />
//             <Text b color="inherit">
//                Mauricio Siu
//             </Text>
//          </Navbar.Brand>
//          <Navbar.Content
//             enableCursorHighlight
//             hideIn="xs"
//             variant="default"
//             css={{
//                pr: '$10',
//             }}
//          >
//             <Navbar.Link isActive href="#">
//                Works
//             </Navbar.Link>
//             <Navbar.Link href="#">Posts</Navbar.Link>
//          </Navbar.Content>
//          <Navbar.Content>
//             <Navbar.Item>
//                <Toggle />
//             </Navbar.Item>
//          </Navbar.Content>
//          <Navbar.Collapse>
//             {collapseItems.map((item, index) => (
//                <Navbar.CollapseItem key={item}>
//                   <Link
//                      color="inherit"
//                      css={{
//                         minWidth: '100%',
//                      }}
//                      href="#"
//                   >
//                      {item}
//                   </Link>
//                </Navbar.CollapseItem>
//             ))}
//          </Navbar.Collapse>
//       </Navbar>
