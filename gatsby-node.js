// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/using-dsg",
//     component: require.resolve("./src/templates/using-dsg.js"),
//     context: {},
//     defer: true,
//   })
// }

// const path = require(`path`)
// const blogPost = require(`./src/templates/blog-post`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
     allNodeArticle {
       edges {
         node {
          drupal_id
         }
       }
     }
    }
  `
  ).then(result => {
    result.data.allNodeArticle.edges.forEach(({ node }) => {
      createPage({
        path: node.drupal_id,
        component: require.resolve(`./src/templates/blog-post.js`),
        context: {
          id: node.drupal_id,
        },
      })
    })
  })
}