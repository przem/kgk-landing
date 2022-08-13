import React from "react";
import {graphql} from "gatsby";
import Seo from "../components/seo";
import Layout from "../components/layout";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


type ArticleProps = {
  title: string,
  excerpt: {excerpt: string},
  description: {raw: any};
}

// @ts-ignore
const BlogPostTemplate = ({data}) => {

  return (
    <Layout spa={false}>
      <Seo title="Home" />
      <div id="zespol" className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8  py-8 md:py-16">
        <h2 className="text-lg text-kgk-gold uppercase py-8">Blog</h2>
        <div className="space-y-8 mt-8">
          {data.allContentfulPost.nodes.map((p:ArticleProps, idx:number) => (<Article key={idx} article={p} />))}
        </div>
      </div>
    </Layout>

    )
}

export default BlogPostTemplate;

const Article = (props: {article: ArticleProps}) => (

  <div className="prose md:prose-lg lg:prose-xl prose-slate">
    <h2>{props.article.title}</h2>
    <p>{props.article.excerpt.excerpt}</p>
    <div>{documentToReactComponents(JSON.parse(props.article.description.raw))}</div>
  </div>


)

export const pageQuery = graphql`
   query ($slug: String) {
    allContentfulPost(filter: {slug: {eq: $slug}}) {
      nodes {
        title
        slug
        description {
          raw
        }
        author
        publishDate
        excerpt {
          excerpt
        }
      }
    }
  }
`
