import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Container } from 'postcss'

const Hero = ({ pageTitle, pageHeading, children }) => {
  return (
    <section className="container-md">
     
      <div class="flex grid-col-2 content-center">
        <div class="w-1/2 text-center font-serif text-4xl py-20">Hello, my name is Miché
          {/* <figure>
            <div class="pt-6 space-y-4">
              <p class="text-center text-sm">Write a brief introduction and offer some resources or links for the user to investigate further</p>
            </div>
          </figure> */}
          <div class="text-lg text-center py-20 ">
          {/* TODO: Add Buttons links to CV Resume and ABOUT that actually work, with borders and styling */}
          <Link 
          className="rounded-r-lg border-black"
          to="../pages/about.js"
          src="...">About</Link>
          </div>
        </div>
        <div class="w-1/2 justify-center py-20 pl-10">
          <StaticImage 
            className="object-none max-h-screen w-3/5 content-center"
            src="../images/Miche_mug.jpg" 
            alt="a selfie of Miche infront of a yellow foliage"
            />
        </div>
      </div>
    </section>

  )
}

export default Hero

