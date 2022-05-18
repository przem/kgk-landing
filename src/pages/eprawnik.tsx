import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import MainSlider from "../components/MainSlider";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Team from "../components/Team";
import Testimony from "../components/Testimony";
import LastBlogEntries from "../components/LastBlogEntries";
import ContactUs from "../components/ContactUs";

const BlogPage = () => (
  <Layout  spa={false}>
    <Seo title="Home" />
    <div className="p-36">
        <h3>E-Prawnik</h3>
        <p>Tutaj będziesz mógł skontaktować się z prawnikiem online</p>
    </div>
  </Layout>
)

export default BlogPage
