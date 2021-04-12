import React from 'react'

import styles from '../styles/Home.module.css'
import ShouldRender from '../components/shouldrender'

const Card = (props) => {
  const { id, title, description, beat  } = props

  return (
    <React.Fragment>
      <aside id={id} className={styles.card}>
        <a className={styles.code} href={`#${id}`}>#{id}</a>

        <h2>{title}</h2>

        <iframe
          className={styles.iframe}
          width="100%"
          height="300"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${beat.trackId}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}>
        </iframe>

        <p className={styles.description}>
          {description}
        </p>
        
        <p className={styles.description}>
          <ShouldRender when={!!beat.midi}>
            <code className={styles.code}>
              <a href={beat.midi} target="_blank" title="Download project file">
                project file
              </a>
            </code>
          </ShouldRender>
        </p>
      </aside>
    </React.Fragment>
  )
}

export default Card