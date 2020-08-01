import React from 'react'
import styles from './status.module.css'

const Status = () => (
  <div className={styles.status}>
    <h2 className={styles.heading}>Current Schedule</h2>
    <p className={styles.current}>
      <strong>Currently Reading</strong>: 1 - 2 Hours per Day
    </p>
    <div className={styles.reading}>
      <p><a href="https://www.amazon.com/High-Magick-Guide-Spiritual-Practices/dp/1683641345" target="_blank" rel="noreferrer">High Magick</a> by Damien Echols</p>
      <p><a href="https://www.amazon.com/Modern-Magick-Twelve-Lessons-Magickal/dp/0738715786" target="_blank" rel="noreferrer">Modern Magick</a> by Donald Michael Kraig</p>
    </div>
    <section className={styles.grid}>
      <p className={styles.label}>
        <strong>Monday - Friday</strong>
      </p>
      <section>
        <p><strong>07:00</strong></p>
        <p>Solar FF</p>
      </section>
      <section>
        <p><strong>12:00</strong></p>
        <p>Middle Pillar</p>
      </section>
      <section>
        <p><strong>21:00</strong></p>
        <p>Lunar FF</p>
      </section>
      <section>
        <p><strong>3x 5-10 Mins.</strong></p>
        <p>Energy Work</p>
      </section>
      <p className={styles.label}>
        <strong>Saturday - Sunday</strong>
      </p>
      <section>
        <p><strong>08:00</strong></p>
        <p>Seasonal FF</p>
      </section>
      <section>
        <p><strong>21:00</strong></p>
        <p>Middle Pillar</p>
      </section>
      <section>
        <p><strong>3x 5-10 Mins.</strong></p>
        <p>Energy Work</p>
      </section>
    </section>
  </div>
)

export default Status