import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Container } from 'postcss'

const Hero = ({ pageTitle, pageHeading, children }) => {
  return (
    <div className="container-md bg-light-blue-300 ...">
      <h1 className="text-4xl p-4 ">Interweaving the natural world with the world wide web</h1>
      <StaticImage 
          className="object-none h-auto md:w-auto "
          src="../images/deerhead-peote-ceremony.jpg" 
          alt="a deerhead mounted on a staff with intricate web design in antlers, decorated with blue bird feathers and peote cactus drawings"
          />
    </div>


  )
}

export default Hero

