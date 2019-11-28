// const { createFilePath } = require(`gatsby-source-filesystem`)
// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === `MarkdownRemark`) {
//     const slug =  path.basename(node.fileAbsolutePath, '.md')
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     })
//   }
// }

const path = require(`path`)
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`src/templates/posts.js`)
    // Query for markdown nodes to use in creating pages.
    // You can query for whatever data you want to create pages for e.g.
    // products, portfolio items, landing pages, etc.
    // Variables can be added as the second function parameter
    return graphql(`
    query {
      allContentfulContentPost{
        edges{
          node{
            slug
          }
        }
      }
    }
    `, { limit: 1000 }).then(result => {
      if (result.errors) {
        throw result.errors
      }
  
      // Create blog post pages.
      result.data.allContentfulContentPost.edges.forEach(edge => {
        createPage({
          // Path for this page — required
          path: `/posts/${edge.node.slug}`,
          component: blogPostTemplate,
          context: {
              slug: edge.node.slug
            // Add optional context data to be inserted
            // as props into the page component..
            //
            // The context data can also be used as
            // arguments to the page GraphQL query.
            //
            // The page "path" is always available as a GraphQL
            // argument.
          },
        })
      })
    })
}