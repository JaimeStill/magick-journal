import React from 'react'
import Entry from '../components/entry'

const EntryList = ({ entries }) => entries.length > 0
  ? entries.map(({ node }) => <Entry key={node.id} entry={node} />)
  : <p>There are currently no entries for this topic.</p>

export default EntryList