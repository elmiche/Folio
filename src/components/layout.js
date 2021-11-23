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
            <ul className="flex w-screen justify-center items-center text-center list-none pl-4">
              <li className="pr-8 pt-4">
                  <Link to="/" className="text-black">Home</Link></li>
              <li className="pr-8 pt-4">
                  <Link to="/about" className="text-black">About</Link></li>
              <li className="pr-8 pt-4">
                  <Link to="/projects" className="text-black">Projects</Link></li>
              <li className="pr-8 pt-4">
                  <Link to="/offerings" className="text-black">Offerings</Link></li>
              <li className="pr-8 pt-4">
                  <Link to="/contact" className="text-black">Contact</Link></li>
            </ul>
          </nav>

        <main>
          <div className= "text-5xl font-sans font-extrabold text-center py-4"> 
              <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-400">The Cyborg Naturalist</h1>
          </div>
          {children}
        </main>
    </div>
    

  )
}

export default Layout