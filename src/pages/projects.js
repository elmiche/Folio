import * as React from "react"
import Layout from '../components/layout'

const ProjectsPage = () => {
  return (
  <Layout pageHeading='Projects' pageTitle='Projects Page'> 
  
  

  {/* <br></br>
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
 */}

{/* Why isn't the rounded borders working? */}
<div class="container mx-auto p-4 lg:grid-cols-6 grid grid-cols-1 gap-4 text-center">
  <div class="col-span-1 rounded-lg text-lg">
    <h1 className="font-bold text-xl p-4">Expertise, Knowledge, and Experiences I proudly bring to the table</h1>
    <p className="text-3xl p-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-purple-600">Leadership</p>
    <p className="text-left p-y-4"> &nbsp; &nbsp; I have a unique multi-disciplinary background, as a skilled technician with an extensive background in community organizing, and deep interests in natural science, technology, decolonization, and the creative arts. My commitment to social and environmental justice is at the heart of my work; which spans across the technology, conservation, and non-profit sectors. I practice uplifting communities through mutual aid, advocacy, direct actions, and leadership. I’ve spent nearly a decade as a volunteer, providing underserved communities with resources and opportunities, while to building resilience and environmental literacy in my communities. </p>
  </div>
  <div class="col-span-1">
    <p className="text-3xl p-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-purple-600">Environmental Science</p>
    <p className="text-left p-y-4">Endangered Tortoise Rehabilitation Project Enclosure <br></br>
      Lake Mary Paired Watershed Study <br></br>
      Biofuels Research on NOx gases <br></br>
      Cocopah Wetlands Photo monitoring<br></br>
      Herpetology Embalming  and Preservation Techniques <br></br>
      Yuma West Wetlands Ecological Restoration<br></br> </p>
      <p className="text-left"> 
        <br></br>
        <h1 className="text-xl">Wildlife Technician | Various Conservation Organizations (2013 – 2017)</h1>
      Performed surveys on protected and endangered wildlife species in remote mountain terrain across dozens of unique biological regions mostly in the western United States and northern Mexico. Involved backcountry navigation skills and careful handling of wildlife. Sometimes provided education to constituents and conducted public outreach at events. Provided additional resources to communities with language barriers on information related to environmental laws and regulations, and local natural resources.
</p>
  </div>
  <div class="col-span-1">    
    <p className="text-3xl p-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-purple-600">Education & Stewardship</p>
    <p className="text-left p-y-4"> Certified Outdoor Science instructor | BEETLES (2017) - Better Environmental Education, Teaching, Learning & Expertise Sharing (BEETLES) through the Lawrence Hall of Science. Implementing Next generation Science Standards (NGSS) for outdoor science education and enhancing existing outdoor education programs. BEETLES resources are based on current research and understandings about how people learn, and tested by dozens of programs in diverse settings all over the country. 
 </p></div>
  {/* <div class="col-start-1 col-end-7 ..."> */}
  <div class="col-span-1">
    <p className="text-3xl p-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-purple-600">Community Organizing & <br></br> Mutual Aid</p>
    <p className="text-left p-y-4"> 
    <h1 className=""> Helping Keep Vulnerable Communities and the Natural Environment Safe, Healthy, and Clean
    Portland, Oregon - Houseless community trash clean ups, Guerrilla Gardening, Tiny homes Turf wars. (The conditions of unhoused people is a biproduct/function of the state, which refuses to do anything to help when it absolutely has the resources to do so.)</h1>
    <br></br>

    Yuma, Arizona - Border Wall, Refugee Support and Environmental clean up. 
    Two birds with one stone. Cleaning up the areas where migrants are often *forced* to leave their belongings behind by Immigration solves two problems. On the one hand you get to maintain a clean, more natural, healthier environment: protecting wildlife and ecosystems from human-caused pollution. On the other hand, since many people will unfairly judge immigrants for literally being forced to leave personal items behind, these judgements perpetuate racist beliefs and uphold harmful stereotypes of immigrants, when the reality is far more complicated. 
    Where the state fails to provide these services, community steps in to support the most vulnerable and protect our natural resources.
 </p>
  </div>
</div>
  
  
  
  </Layout>
    )
}

export default ProjectsPage