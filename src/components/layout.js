import * as React from 'react'
import { Link } from 'gatsby'
import './layout.css'
import {
    heading,
    navLinks,
    navLinkItem,
    navLinkText
  } from './layout.module.css'

const Layout = ({ pageTitle, pageHeading, children }) => {
  return (
    <div className="m-auto font-family-sans">
        <title>{pageTitle}</title>
          <nav>
            <ul className={navLinks}>
              <li className={navLinkItem}>
                  <Link to="/" className={navLinkText}>Home</Link></li>
              <li className={navLinkItem}>
                  <Link to="/about" className={navLinkText}>About</Link></li>
              <li className={navLinkItem}>
                  <Link to="/projects" className={navLinkText}>Projects</Link></li>
              <li className={navLinkItem}>
                  <Link to="/offerings" className={navLinkText}>Offerings</Link></li>
              <li className={navLinkItem}>
                  <Link to="/contact" className={navLinkText}>Contact</Link></li>
            </ul>
          </nav>

        <main>
          <h1 className= "font-sans decoration-clone text-center text-4xl bg-gradient-to-r from-green-300 to-purple-400">The Cyborg Naturalist</h1>
        
          {children}
        </main>
    </div>
    

  )
}

export default Layout