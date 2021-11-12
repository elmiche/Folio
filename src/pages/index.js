import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const HomePage = () => {
  return (
    <Layout pageHeading='The Cyborg Naturalist' pageTitle='Home Page'> 
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