import * as React from "react"
import Layout from '../components/layout'
import Hero from '../components/Hero'
import { StaticImage } from 'gatsby-plugin-image'

const HomePage = () => {
  return (
    <Layout pageHeading='The Cyborg Naturalist' pageTitle='Home Page'> 
    
    
    <div class="conatiner bg-origin-border rounded-lg p-4 bg-white bg-opacity-95 flex flex-row space-y-5"> 
      <div className="object-cover object-position:left h-60 w-full p-4">
        <div className="object-none">
        <Hero></Hero>
        </div>
      </div>
      <div className="object-none pb-3/4">
        <StaticImage 
          className="object-none h-full md:w-auto "
          src="../images/deerhead-peote-ceremony.jpg" 
          alt="a deerhead mounted on a staff with intricate web design in antlers, decorated with blue bird feathers and peote cactus drawings"
          
          />
        
      </div>
        
    </div>
          <div className=" text-lg rounded-lg container bg-origin-border p-4 bg-white bg-opacity-95 object-top flex flex-col">
            
            <p className="text-center"> Welcome to my virtual space</p>
              <p className="text-center"> This site contains some information about <br></br> my work and my ambitions</p>
          </div>  

    {/* <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      /> */}
    
   
    </Layout>
      )
}

export default HomePage