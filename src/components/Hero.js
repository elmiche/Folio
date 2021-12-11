import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Container } from 'postcss'

const Hero = ({ pageTitle, pageHeading, children }) => {
  return (
    <section className="container-md">
     
      <div class="flex grid-col-2 content-center">
        <div class="w-1/2 text-center font-serif text-4xl pt-6">Miché Lozano
          <figure>
            <div class="pt-6 space-y-4">
              <p class="text-center text-sm">Write a brief introduction and offer some resources or links for the user to investigate further</p>
            </div>
          </figure>
        </div>
        <div class="w-1/2 justify-center pt-6">
          <StaticImage 
            className="object-none max-h-screen w-3/5"
            src="../images/Miche_mug.jpg" 
            alt="a deerhead mounted on a staff with intricate web design in antlers, decorated with blue bird feathers and peote cactus drawings"
            />
        </div>
      </div>
    </section>

  )
}

export default Hero

