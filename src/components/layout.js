import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styles from './layout.module.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          title
        }
      }
    }
  `)

  const title = `${data.site.siteMetadata.title} - ${data.site.siteMetadata.author}`

  const header = (
    <h1 class={styles.heading}>
      <Link to={`/`}>
        {title}
      </Link>
    </h1>
  )
  const nav = (
    <React.Fragment>
      <Link to={'/ritual/'}>Rituals</Link>
      <Link to={'/dream/'}>Dreams</Link>
      <Link to={'/blog/'}>Blog</Link>
      <Link to={'/blog/2020/lighting-the-way-ahead/'}>About</Link>
    </React.Fragment>
  )
  return (
    <div className={styles.app}>
      <div className={styles.content}>
        <header>{header}</header>
        <nav className={styles.nav}>{nav}</nav>
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout