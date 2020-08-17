import React from 'react'
import styles from './status.module.css'

const Status = () => (
  <div className={styles.status}>
    <h2 className={styles.heading}>Current Schedule</h2>
    <p className={styles.current}>
      <strong>Currently Reading</strong>: 1 - 2 Hours per Day
    </p>
    <div className={styles.reading}>
      <p><a href="https://www.indiebound.org/book/9781683643265" target="_blank" rel="noreferrer">Angels & Archangels</a> by Damien Echols</p>
      <p><a href="https://www.amazon.com/Modern-Magick-Twelve-Lessons-Magickal/dp/0738715786" target="_blank" rel="noreferrer">Modern Magick</a> by Donald Michael Kraig</p>
    </div>
    <section className={styles.grid}>
      <p className={styles.label}>
        <strong>Monday - Sunday</strong>
      </p>
      <section>
        <p><strong>07:00</strong></p>
        <p>Breathing Meditation</p>
      </section>
      <section>
        <p><strong>18:00</strong></p>
        <p>Full LBRP with Middle Pillar</p>
      </section>
      <section>
        <p><strong>21:00</strong></p>
        <p>Breathing Meditation</p>
      </section>
    </section>
  </div>
)

export default Status