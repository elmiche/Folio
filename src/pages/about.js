import * as React from "react"
import Layout from '../components/layout'    
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
    return (
        <Layout pageHeading='A Cyborg, A Naturalist' pageTitle='About'> 
        <p>Miché is working from the intersections of natural science and technology to build a better future for our planet and future generations.</p>
        <br></br>
        
        <StaticImage 
        src="../images/Miche-apple-orchard.jpg" 
        alt="Miche posing in beatuful green apple orchard"
        />
        <h3>Identity Intersections </h3> 
        <p>I exist as a multi-cultural multi-faceted life form, self-identify as: 
          <ul>
            <li>Two spirit, Transgender, Queer</li> 
            <li>an Indigenous, Latinx, First-generation immigrant</li>
            <li>Stroyteller, facilitator, musician, creator</li>
            <li>a scientist, a cyborg, and a naturalist </li>
            </ul>
            </p>
            <br>
            </br>
        <h2>Land Back</h2>
        <StaticImage src="../images/land-and-sea.jpg" alt="a picture of the oregon coast"/>

        <h2>Envrionmental stwardship </h2> 
          <br></br>
          <p>My work is grounded in declonization, anti-white supremacy, trauma-informed, queer-inclusive, class-conciousness & based in a human-centric approach, recognizing human beings as inherently interconnected to the environment.</p>

        </Layout>
          )
}

export default AboutPage