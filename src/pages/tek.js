import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const TekPage = () => {
    return (
      <Layout pageHeading='Miché the Naturalist' pageTitle='Tek'> 
      <h2>Traditional Ecological Knowledge & Ancestral Wisdom</h2>
    <p> My ancestors, the meso-american peoples of Mexico and Central America were incredibly knowledgeable about the natural world.</p>
    <p> The Mexica (pronounced: me-shi-ka) were incredibly observant and they masterfully engineered the so called "Aztec" calendar, which allowed them to plan, predict, and build societies that flowed seamlessly with the natural world. </p>
    
    <StaticImage 
    src="../images/aztec-cal-carving.jpg" 
    alt="intricate wooden carving of an aztec calendar"
    />

    <p>The city of Tenochtitlan was larger and supported more people than any city in Europe at the time of first contact wtih Europeans. </p>
    
    <StaticImage 
    src="../images/Tenochtitlan-Aztec-City-Architecture.jpeg" 
    alt="a painting of the city of Tenochtitlan, created by the Mexica"
    />

    <p>This was made possible by the engineers, naturalists, and observers that held a deep understanding of the natural world through their non-dualistic nature-based philosophies, which upheld a long pantheon of dieties inspired by the natural world.</p>

    <StaticImage 
    src="../images/chichen-itza-caracol-art.jpeg" 
    alt="a sketch of the anceint astonomy obsevatory in chichen itza"
    />

    <p>My ancestors knowledge came from the direct observation of their natural world and the universe, this is evident by their engineering feats and such remnants as the ancient observatory "el corocal" in Chichen Itza, Mexico.</p>
    <StaticImage 
    src="../images/elcorocal.jpg" 
    alt="the anceint astonomy obsevatory in chichen itza"
    />

    <p>My ancestor's observational and engineering skills allowed them to build agricultural societies that greatly surpassed the limitations of their ecosystem by creating technology and engineering societies that worked with their natural environment. For example, the floating gardens of Tenochtitlan, were essentially an ancient form of an enormous aquaponics system.</p>
    <StaticImage 
    src="../images/aztec-chinampa-anthropogen-com.jpg" 
    alt="the floating gardens of tenochtitlan"
    />

    <p>It is this indigenous perspective that is in direct contrast with many environmental philosophies of the west. </p>
      <p>As indigenous people we understand that we are the engineers and the stewards of the land. however this doesn not mean that one can "own" the land, because mother earth belongs to everyone, and has been so generous to us. Ownership of the land is an entirely western European concept and a capitalistic construct. </p>
      <p>Western schools of thought teach that humans are separate from their environment, they teach a lie about "pristine wilderness" and believe that the elements like land and water are "property" that can be owned and conquered and given a price tag.</p> 
      <p>I denounce this form of environmentalism and proclaim we give the LAND BACK to the original stweards of the land.</p>

      <h2>Supporting Indigenous People is Necessary to Save the Planet</h2>
      <p> Indigenous people make up only about 5% of the global population.</p>
      <p> Yet Indigenous people protect more than 80% of the world's biodiversity.</p>

      </Layout>
      )
}

export default TekPage