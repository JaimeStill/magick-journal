import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import EntryList from '../components/entry-list'
import SEO from '../components/seo'

const RitualList = ({ data, location }) => {
  const entries = data.allMarkdownRemark.edges

  return (
    <Layout location={location}>
      <SEO title="Rituals" />
      <EntryList entries={entries} />
    </Layout>
  )
}

export default RitualList

export const ritualsQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fields: { collection: { eq: "ritual" } }
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
            physicalCondition
            rituals
            weather
          }
        }
      }
    }
  }
`