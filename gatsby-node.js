const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const COLLECTIONS = [
  'ritual',
  'blog'
]

const filterEdges = name => edges =>
  edges.filter(edge => edge.node.fields.collection === name);

const buildPagesCollectionGenerator = ({ edges, createPage }) => (name) => {
  const filteredEdges = filterEdges(name)(edges);

  filteredEdges.forEach((edge, index) => {
    const { slug } = edge.node.fields;
    const previous = index === filteredEdges.length - 1 ? null : filteredEdges[index + 1].node;
    const next = index === 0 ? null : filteredEdges[index - 1].node;
    createPage({
      path: slug,
      component: require.resolve(`./src/templates/entry-post.js`),
      context: { slug, previous, next }
    })
  })

  createPage({
    path: `/${name}`,
    component: require.resolve(`./src/templates/${name}-list.js`)
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: {
          frontmatter: { published: { ne: false } }
        }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              collection
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const pagesCollectionGenerator = buildPagesCollectionGenerator({
    edges: result.data.allMarkdownRemark.edges,
    createPage
  })

  COLLECTIONS.forEach(pagesCollectionGenerator)
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const collection = getNode(node.parent).sourceInstanceName;
    const slug = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value: `/${collection}${slug}`,
    })
    createNodeField({
      node,
      name: `collection`,
      value: collection
    })
  }
}
