import React from 'react'
import { Link } from 'gatsby'
import styles from './entry.module.css'

const Entry = ({ entry }) => {
  const title = entry.frontmatter.title || entry.fields.slug

  const {
    date,
    description,
    moon,
    performance,
    rituals
  } = entry.frontmatter

  const collection = entry.fields.collection
    ? `${entry.fields.collection.charAt(0).toUpperCase()}${entry.fields.collection.slice(1)}`
    : null

  return (
    <article key={entry.id} className={styles.backdrop}>
      <header>
        <h2>
          <Link style={{ boxShadow: `none` }} to={entry.fields.slug}>
            {title}
          </Link>
        </h2>
        <section className={`${styles.flex} ${styles.header}`}>
          <small>{date}</small>
          {performance &&
            <small>Performance: {performance} / 10</small>
          }
          <small>Time to Read: {entry.timeToRead} {entry.timeToRead > 1 ? 'minutes' : 'minute'}</small>
        </section>
      </header>
      <section>
        <p className={styles.description}
          dangerouslySetInnerHTML={{
            __html: description || entry.excerpt
          }} />
      </section>
      {(collection || moon || rituals) &&
        <footer className={`${styles.flex} ${styles.footer}`}>
          {collection &&
            <small>{collection}</small>
          }
          {moon &&
            <small>Moon Phase: {moon}</small>
          }
          {rituals &&
            <small>Rituals: {rituals}</small>
          }
        </footer>
      }
    </article>
  )
}

export default Entry