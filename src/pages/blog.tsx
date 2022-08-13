import * as React from "react"
import {graphql, Link} from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"



// @ts-ignore
const BlogListing = ({data}) => (
  <Layout spa={false}>
    <Seo title="Home" />
    <div id="zespol" className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8  py-8 md:py-16">
      <h2 className="text-lg text-kgk-gold uppercase py-8">Blog</h2>
      <div className="divide-y divide-solid">
        {
            // @ts-ignore
            data.allContentfulPost.nodes.map((post, idx) => (<BlogEntry
              key={idx}
              title={post.title}
              excerpt={post.excerpt?.excerpt}
              slug={post.slug}
            />))
        }
      </div>

    </div>
  </Layout>
)

export default BlogListing

const BlogEntry = (props: {title: string, excerpt: string, slug: string}) => (
  <Link to={props.slug} className="block pt-8 prose md:prose-lg lg:prose-xl prose-slate">
      <h2>{props.title}</h2>
      <p className="">{props.excerpt}</p>
      <span className="cursor-pointer block pb-8 text-kgk-gold">Czytaj dalej</span>
  </Link>
)



export const pageQuery = graphql`
    query {
      allContentfulPost {
        nodes {
          excerpt {
            excerpt
          }
          title
          slug
        }
      }
    }`
