import React from 'react'
import { Link, graphql } from 'gatsby'
import styles from './entry-post.module.css'

import Layout from '../components/layout'
import SEO from '../components/seo'

const EntryTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  const {
    title,
    date,
    description,
    emotions,
    moon,
    performance,
    physicalCondition,
    rituals,
    weather
  } = post.frontmatter

  return (
    <Layout location={location}>
      <SEO
        title={title}
        description={description || post.excerpt}
      />
      <article>
        <header>
          <h1 className={styles.heading}>
            {post.frontmatter.title}
          </h1>
          <section className={styles.meta}>
            <small>{date}</small>
            <small>Time to Read: {post.timeToRead} {post.timeToRead > 1 ? 'mins.' : 'min.'}</small>
          </section>
        </header>
        {(
          rituals ||
          moon ||
          weather ||
          physicalCondition ||
          emotions ||
          performance
        ) &&
          <section className={styles.grid}>
            {rituals &&
              <section>
                <h4>Rituals Performed</h4>
                <p>{rituals}</p>
              </section>
            }
            {moon &&
              <section>
                <h4>Moon Phase</h4>
                <p>{moon}</p>
              </section>
            }
            {weather &&
              <section>
                <h4>Weather</h4>
                <p>{weather}</p>
              </section>
            }
            {physicalCondition &&
              <section>
                <h4>Physical Condition</h4>
                <p>{physicalCondition}</p>
              </section>
            }
            {emotions &&
              <section>
                <h4>Emotions</h4>
                <p>{emotions}</p>
              </section>
            }
            {performance &&
              <section>
                <h4>Performance</h4>
                <p>{performance} / 10</p>
              </section>
            }
          </section>
        }
        <section className={styles.markdown}
          dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
      {(previous || next) &&
        <React.Fragment>
          <hr className={styles.rule} />
          <nav>
            <ul className={styles.list}>
              <li>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </React.Fragment>
      }
    </Layout>
  )
}

export default EntryTemplate

export const entryQuery = graphql`
  query EntryBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "dddd DD MMMM, YYYY")
        description
        emotions
        moon
        performance
        physicalCondition
        rituals
        weather
      }
    }
  }
`
