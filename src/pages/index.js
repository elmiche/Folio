import * as React from "react"
import Layout from '../components/layout'
import Hero from '../components/Hero'
import { StaticImage } from 'gatsby-plugin-image'

const HomePage = () => {
  return (
    <Layout pageTitle='Home Page'> 
      
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