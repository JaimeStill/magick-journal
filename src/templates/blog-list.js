import React from 'react'
import { graphql } from 'gatsby'

import EntryList from '../components/entry-list'
import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogList = ({ data, location }) => {
  const entries = data.allMarkdownRemark.edges

  return (
    <Layout location={location}>
      <SEO title="Blog" />
      <EntryList entries={entries} />
    </Layout>
  )
}

export default BlogList

export const blogsQuery = graphql`
    query {
        allMarkdownRemark(
            filter: {
                fields: { collection: { eq: "blog" } }
                frontmatter: { published: { eq: true } }
            }
            sort: { fields: [frontmatter___date], order: DESC }
        ) {
            edges {
              node {
                id
                excerpt
                timeToRead
                fields {
                  slug
                  collection
                }
                frontmatter {
                  date(formatString: "dddd MMMM, YYYY")
                  title
                  description
                }
              }
            }
        }
    }
`