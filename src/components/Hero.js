import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Container } from 'postcss'

const Hero = ({ pageTitle, pageHeading, children }) => {
  return (
    <section className="container-md bg-white ">
      <h1 className="text-4xl p-4 text-center"> Write a Subtitle Here</h1>
     
      <div class="flex grid-col-2 content-center">
        <div class="w-1/2 text-center font-sans text-4xl">side container add content here, words, et
        </div>
        <div class="w-1/2 justify-center">
          <StaticImage 
            className="object-none max-h-screen w-3/5"
            src="../images/deerhead-peote-ceremony.jpg" 
            alt="a deerhead mounted on a staff with intricate web design in antlers, decorated with blue bird feathers and peote cactus drawings"
            />
        </div>
      </div>
    </section>

  )
}

export default Hero

