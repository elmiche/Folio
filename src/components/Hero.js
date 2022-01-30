import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Container } from 'postcss'

const Hero = ({ pageTitle, pageHeading, children }) => {
  return (
    <section className="container-md">
     
      <div class="flex grid-col-2 content-center">
        <div class="w-1/2 text-center font-serif text-4xl py-20">Hello, my name is Miché
         
          <div class="text-lg text-center py-20 ">
          {/* TODO: Add Buttons links to CV Resume and ABOUT that actually work, with borders and styling */}
        <div className="rounded-r-lg border-black">  
          <Link to="/about">About</Link>
          </div>
          </div>
        </div>
        <div class="w-1/2 justify-center py-20 pl-10"> A Nature and Technology Enthusiast with Creative Solutions
          
        </div>
      </div>
    </section>

  )
}

export default Hero

