import "./layout.css"

import { Link } from "gatsby"
import { Navlinks } from "."
import PropTypes from "prop-types"
import React from "react"
import { useSiteMetadata } from "../hooks"

const Layout = ({ location, children }) => {
  const { title } = useSiteMetadata()

  return (
    <>
      <header className="header padding">
        <Link to="/" className="nav-link">
          <h1 className="site-title">{title}</h1>
        </Link>
        <Navlinks location={location} />
      </header>

      <main className="main">{children}</main>

      <footer className="footer padding">
        <Link to="/" className="nav-link">
          <h4 className="site-title text--md">{title}</h4>
        </Link>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
