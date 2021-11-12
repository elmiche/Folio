import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const OfferingsPage = () => {
  return (
  <Layout pageHeading='Offerings' pageTitle='Offerings Page'> 
  <p>Offerings and Services</p>
  <br>
  </br>
  
  <StaticImage 
    src="../images/pajaritoguava.jpg" 
    alt="below angle of a bird perched on a branch, eating a guava fruit"
    />

  </Layout>
    )
}

export default OfferingsPage