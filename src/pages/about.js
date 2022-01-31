import * as React from "react"
import Layout from '../components/layout'    
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
    return (
        <Layout pageHeading='A Cyborg, A Naturalist' pageTitle='About'> 
        
        <div className="container bg-white mx-auto px-4 space-y-5">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-green-500 to-blue-800 text-xl text-green pt-5 font-serif text-center p-4"> As a Cyborg Naturalist, I use technology to enhance my aptitude as a naturalist  and further my passion for nature conservation. <br></br> Working from the intersections of natural science, technology, and organizing locally to build resilient, more sustainable communities. <br></br> I serve to protect natural resources for present and future generations.</h1>
        <br></br>
       
        {/* <StaticImage 
        src="../images/Miche-apple-orchard.jpg" 
        alt="Miche posing in beatuful green apple orchard"
        />
        <StaticImage 
            className="object-none w-3/5 h-full content-center"
            src="../images/Miche_mug.jpg" 
            alt="a selfie of Miche infront of a yellow foliage"
            /> */}
       
        <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-purple-700 text-3xl text-green pt-5 font-serif text-center p-4" >A Them in STEM</h2>
        <h3 className="font-bold text-center">Identity & Background </h3> 
        {/* <p>
          <h1 className="p-4">I self-identify as: </h1>
          <ul>
            <li>A Two-spirit, Transgender, Queer Mutant</li> 
            <li>Indigenous Mexican, a First-generation Immigrant</li>
            <li>Stroyteller, Visionary, Creator</li>
            <li>A Scientist and a Cyborg Naturalist </li>
            </ul>
            </p> */}
            <br>
            </br>
        
        {/* <StaticImage src="../images/land-and-sea.jpg" 
        alt="a picture of the oregon coast"/> */}
<div class="container mx-auto p-4 lg:grid-cols-6 sm:grid-cols-1 grid grid-cols-1 gap-4 text-center">
<div class="col-span-1 col-start-2 sm:grid-cols-1 col-end-4">
    <p className="text-3xl p-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-purple-600">Nice to Meet You</p>
    <p className="text-left p-y-4">Miché Lozano grew up as a child of immigrants in southeast Arizona, with cultural roots in Mexico. It was their childhood love of Natural Science that led them to earn a degree in Environmental Science with an emphasis in Natural Resource Management. Their Gender-Queer identity was instrumental in laying the foundation for a life-long mission to build and connect with underrepresented communities from all backgrounds. </p>
    
     <br>
     
     </br>

    <p className="text-left p-y-4"> “I see myself sort of like a family counselor, between the land, nature, humans, and society."
    I ask, ‘where does it hurt?’ and ‘how can I get everyone to connect?’ “ </p>
     <br></br>    

     <p className="text-left p-y-4" > My job has always been to serve. 
      As someone who exists between the realms that are often at odds with eachother:
      American or immigrant, multi-cultural or dominant culture, masculine or feminine, societal vs the sacred natural. I serve as a bridge between interdisciplinary realms and I try to create opportunities for connection, especially for people, things, and places which might be overlooked.
<br></br> </p>
  </div>
  <div class="col-span-1 sm:grid-cols-1 col-start-4 col-end-6 "> 
  <StaticImage 
        src="../images/Miche-apple-orchard.jpg" 
        alt="Miche posing in beatuful green apple orchard"
        />
  </div>
</div>

</div>


        
        </Layout>
          )
}

export default AboutPage