import * as React from "react"
import Layout from '../components/layout'    
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
    return (
        <Layout pageHeading='A Cyborg, A Naturalist' pageTitle='About'> 
        
        <div className="container bg-white mx-auto px-4 space-y-5">
        <h1 className="text-5xl pt-5 font-serif p-4 text-left"> As a Cyborg Naturalist, I use technology to enhance my aptitude as a naturalist and further my passion for nature conservation. Working from the intersections of natural science, technology, and organizing locally to build a resilient, more sustainable communities. Land stewardship that protects natural resources for present and future generations.</h1>
        <br></br>
       
        <StaticImage 
        src="../images/Miche-apple-orchard.jpg" 
        alt="Miche posing in beatuful green apple orchard"
        />
       
        <h2>A Them in STEM</h2>
        <h3 className="font-bold">Identity Intersections </h3> 
        <p>
          <h1 className="p-4">I self-identify as: </h1>
          <ul>
            <li>A Two-spirit, Transgender, Queer Mutant</li> 
            <li>Indigenous Mexican, a First-generation Immigrant</li>
            <li>Stroyteller, Visionary, Creator</li>
            <li>A Scientist and a Cyborg Naturalist </li>
            </ul>
            </p>
            <br>
            </br>
        
        <StaticImage src="../images/land-and-sea.jpg" 
        alt="a picture of the oregon coast"/>

        <h2>Envrionmental Stewardship through Indigenous Philosophy</h2> 
          <h3>Land Back</h3>
          <p>My work is grounded in declonization, anti-white supremacy, trauma-informed, queer-inclusive, and class-conciousness. My practice is based in an eco-centric environmentalism, recognizing human beings as inherently interconnected to the environment, not separate from it.</p>
        </div>
        </Layout>
          )
}

export default AboutPage