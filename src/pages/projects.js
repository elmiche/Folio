import * as React from "react"
import Layout from '../components/layout'

const ProjectsPage = () => {
  return (
  <Layout pageHeading='Projects' pageTitle='Projects Page'> 
  
  <p>Various projects and demos</p>

  <br></br>
  <h2>Environmental Restoration</h2>
   
        <li> Endangered Tortoise Enclosure </li>
        <li> Lake Mary Paired Watershed Study</li>
        <li> Biofuels Research on NOx gases</li>
        <li> Endangered Species Managment </li>
      
      <br></br>

  <h2> Outdoor Science Education </h2>
        
        <li> BEETLE'S Institute </li>
        <li> Lady Bug Walks - Early Childhood Environmental Educaiton</li>
        <li> Latino Outdoors Ambassadorship </li>

      <br></br>
  <h2> Software Development and Programming Projects</h2>
      <li>Street Biter - Urban Forager's Friend</li>
      <li>Data Quality Analysis - Non-profit data clean up</li>
      <li> Tarot Night - Online tarot card spreads</li>


  
  
  
  </Layout>
    )
}

export default ProjectsPage