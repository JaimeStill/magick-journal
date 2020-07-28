import React from 'react'
import { graphql } from 'gatsby'

import EntryList from '../components/entry-list'
import Layout from '../components/layout'
import SEO from '../components/seo'

const DreamList = ({ data, location }) => {
  const entries = data.allMarkdownRemark.edges

  return (
    <Layout location={location}>
      <SEO title="Dreams" />
      <EntryList entries={entries} />
    </Layout>
  )
}

export default DreamList

export const dreamsQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fields: { collection: { eq: "dream" } }
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
            date(formatString: "dddd DD MMMM, YYYY")
            title
            description
          }
        }
      }
    }
  }
`