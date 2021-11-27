import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Container } from 'postcss'

const Hero = ({ pageTitle, pageHeading, children }) => {
  return (
    <section className="container-md">
      {/* <div className="text-5xl leading-normal font-serif text-center py-4">  
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-400">The Cyborg Naturalist</h1>  
      </div>

      <div>
      <StaticImage 
            className="object-none max-h-screen md:w-auto"
            src="../images/circuit_board_bg.jpg"
            alt="a deerhead mounted on a staff with intricate web design in antlers, decorated with blue bird feathers and peote cactus drawings"
            />
      </div> */}

      {/* <h1 className="text-4xl p-4 text-center"> Write a Subtitle Here</h1> */}
     
      <div class="flex grid-col-2 content-center">
        <div class="w-1/2 text-center font-serif text-4xl pt-6">Miché Lozano
          <figure>
            <div class="pt-6 space-y-4">
              <p class="text-center text-sm">Write a brief introduction and offer some resources or links for the user to investigate further</p>
            </div>
          </figure>
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

