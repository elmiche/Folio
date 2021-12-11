import * as React from "react"
import Layout from '../components/layout'
import Hero from '../components/Hero'
import { StaticImage } from 'gatsby-plugin-image'

const HomePage = () => {
  return (
    <Layout pageTitle='Home Page'> 
    <section className="flex-auto">
      <div className="text-5xl leading-normal font-serif text-center py-4 ">  
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-purple-600">The Cyborg Naturalist</h1>  
      </div>

      <div>
      
      <StaticImage 
        className="object-none max-h-screen md:w-auto"
        src="../images/Cyborg_tree_Banner.png"
        alt="a circular white logo of a half-oganic half cybernetic tree made up cicuitry superimposed on an image of a starry night over a forest lake "
        /> 


      </div>  
    </section>
    <div>  
    <Hero></Hero>
      <p className="text-center"> Welcome to my virtual space</p>
      <p className="text-center"> This site contains some information about <br></br> my work and my ambitions</p>
    </div>

    <section>
      <p>Yo what up</p>
    </section>

    </Layout>
      )
}

export default HomePage