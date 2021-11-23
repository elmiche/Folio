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
          <div className="text-5xl font-sans text-center py-4"> 
              <h1 className="bg-clip-text text-white hover:text-blue-800 bg-gradient-to-r from-green-400 to-purple-400">The Cyborg Naturalist</h1>
              {/* turned the text white to see, but TODO: make text clip the background gradient */}
          </div>

        <main>
          
          {children}
        </main>
    </div>
    

  )
}

export default Layout