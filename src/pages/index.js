import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const HomePage = () => {
  return (
    <Layout pageHeading='The Cyborg Naturalist' pageTitle='Home Page'> 
    <h2 class="font-sans">Interweaving the natural world <br> 
    </br>with the world wide web</h2>
    <StaticImage 
    src="../images/deerhead-peote-ceremony.jpg" 
    alt="a deerhead mounted on a staff with intricate web design in antlers, decorated with blue bird feathers and peote cactus drawings"
    />
    
    <p>Welcome to my virtual space</p>
    <p> This site contains some information about my work and my ambitions</p>

    

    {/* <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      /> */}
    
   
    </Layout>
      )
}

export default HomePage