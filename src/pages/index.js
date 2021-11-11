import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const HomePage = () => {
  return (
    <Layout pageHeading='Home' pageTitle='Home Page'> 
    <p>Welcome to my virtual space!</p>
    {/* <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      /> */}
      
    <StaticImage 
    src="../images/pajaritoguava.jpg" 
    alt="below angle of a bird perched on a branch, eating a guava fruit"
    />
    </Layout>
      )
}

export default HomePage