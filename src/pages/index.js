import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import EntryList from '../components/entry-list'

const AppIndex = ({ data, location }) => {
  const entries = data.allMarkdownRemark.edges

  return (
    <Layout location={location}>
      <SEO title="Home" />
      <EntryList entries={entries} />
    </Layout>
  )
}

export default AppIndex

export const entriesQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
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
            title
            date(formatString: "dddd DD MMMM, YYYY")
            description
            moon
            performance
            rituals
            weather
          }
        }
      }
    }
  }
`
