import type {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import {Layout} from '../components/layout';
import {Content} from '../components/content';

const Home: NextPage = () => {
   return (
      <Layout>
         <Content />
      </Layout>
   );
};

export default Home;
