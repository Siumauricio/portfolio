import { GetStaticProps } from "next";
import React from "react";
import { ArticleLayout } from "../../components/layout/article-layout";
import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { BlogLayout } from "../../components/layout/blog-layout";
import { components } from "../../blog/components";
import remarkMdxCodeMeta from "remark-mdx-code-meta";
import rehypeSlug from "rehype-slug";
interface Props {
  source: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
}

const Index = ({ source }: Props) => {
  return (
    <BlogLayout>
      <MDXRemote {...source} components={components} />
    </BlogLayout>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("blog/content"));
  const removedPrefixFiles = files.map(
    (file) => `/blog/${file.replace(".mdx", "")}`
  );
  return {
    paths: removedPrefixFiles,
    fallback: "blocking",
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;
  const baseUrl = path.join(process.cwd(), `blog/content/${slug}.mdx`);
  const sourceFile = fs.readFileSync(baseUrl, "utf8");

  const mdxSource = await serialize(sourceFile, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkMdxCodeMeta, remarkGfm],
      rehypePlugins: [[rehypeSlug]],
    },
  });

  return {
    props: {
      source: mdxSource,
      // sources: JSON.parse(JSON.stringify(frontMatters)),
    },
  };
};

export default Index;
