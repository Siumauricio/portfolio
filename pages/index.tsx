import {useTheme as useNextTheme} from 'next-themes';
import {Switch, useTheme} from '@nextui-org/react';
import type {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
   const {setTheme} = useNextTheme();
   const {isDark, type} = useTheme();
   return (
      <div>
         <Switch
            checked={isDark}
            onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
         />
      </div>
   );
};

export default Home;
