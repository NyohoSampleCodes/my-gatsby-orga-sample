import React from 'react'
import { Link } from 'gatsby'
import { container } from './_style.module.css'

const Header = () => (
  <div className={container}>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'gray',
            textDecoration: 'none',
          }}
        >
          ニョート
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
