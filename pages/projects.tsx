import type {NextPage} from 'next';
import {Projects} from '../components/content/projects';
import {ArticleLayout} from '../components/layout/article-layout';

const index: NextPage = () => {
   return (
      <ArticleLayout title="Projects">
         <Projects />
      </ArticleLayout>
   );
};

export default index;
