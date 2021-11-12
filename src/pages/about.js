import * as React from "react"
import Layout from '../components/layout'    
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
    return (
        <Layout pageHeading='A Cyborg, A Naturalist' pageTitle='About'> Miché is working from the intersections of natural science and technology to build a better future for our planet and future generations.
        
        

        <StaticImage 
        src="../images/Miche-apple-orchard.jpg" 
        alt="Miche posing in beatuful green apple orchard"
        />
        
        </Layout>
          )
}

export default AboutPage