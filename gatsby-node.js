exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const path = require("path");
  const blogPost = path.resolve("./src/templates/blog-post.tsx");

  const result = await graphql(`
    query {
      allContentfulPost {
        nodes {
          title
          slug
        }
      }
    }`)

  if (result.errors) {
    reporter.panicOnBuild(`There was an error loading your blog posts`, result.errors);
    return;
  }

  const posts = result.data.allContentfulPost.nodes;

  if (posts.length > 0) {
    posts.forEach((post, index) => {

      createPage({
        path: `/blog/${post.slug}`,
        component: blogPost,
        context: {
          slug: post.slug,
        },
      });

    });
  }

 /* createPage({
    path: "/blog",
    component: blogPost,
    context: {},
    defer: true,
  })*/
}

