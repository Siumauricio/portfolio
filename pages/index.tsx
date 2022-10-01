import type {NextPage} from 'next';
import {Home} from '../components/content/home';
import {ArticleLayout} from '../components/layout/article-layout';

const index: NextPage = () => {
   return (
      <ArticleLayout>
         <Home />
      </ArticleLayout>
   );
};

export default index;
