import React from 'react'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'

import biowoodLogo from './biowood_logo.png'

const NavTopComponent: React.FC = () => {
  return (
    <header>
      <nav className={styles.navBar}>
        <Link to="/">
          <img className={styles.logo} src={biowoodLogo} alt="Biowood Logo" />
        </Link>
      </nav>
    </header>
  )
}

export default NavTopComponent
