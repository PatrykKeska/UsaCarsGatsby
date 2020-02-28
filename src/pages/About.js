import React from 'react'
import { graphql } from 'gatsby';
import LookingFor from '../components/organism/LookingFor';
import Delivrence from '../components/organism/Delivrence';
import mainBackground4 from '../assets/images/mainBackground4.jpg'; 
import Repair from '../components/organism/Repair';
import Experince from '../components/organism/Experince';
export const aboutQuery = graphql`
{
    allImageSharp(sort: {fields: original___src, order: ASC}){
    nodes {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
 `
const description = { 
  sectionOneTitle : 'Wyszukujemy', 
  sectionOneParagraph : "DORADZAMY W WYBORZE, ANALIZUJEMY AUKCJE POD KĄTEM STANU TECHNICZNEGO POJAZDU ORAZ OPŁACALNOŚCI NAPRAW.",

  sectionTwoTitle : 'Sprowadzamy', 
  sectionTwoParagraph : " ZAŁATWIAMY FORMALNOŚCI W USA ORAZ ORGANIZUJEMY WYSYŁKĘ DO POLSKI. ZAJMUJEMY SIĘ WSZYSTKIMI DOKUMENTAMI ZWIĄZANYMI Z CŁEM, AKCYZĄ I VATEM.",

  sectionThreeTitle : 'Pomagamy w Naprawie', 
  sectionThreeParagraph : " DOBIERAMY ORAZ SPROWADZAMY ODPOWIEDNIE CZĘŚCI, ZAJMUJEMY SIĘ KOMPLEKSOWĄ NAPRAWĄ.",
  
  sectionFourTitle : 'DOŚWIADCZENIE', 
  sectionFourParagraph : "MAMY ZA SOBĄ WIELOLETNIE DOŚWIADCZENIE, DZIESIĄTKI SPROWADZONYCH SAMOCHODÓW ORAZ GRONO ZADOWOLONYCH KLIENTÓW. Z NAMI MASZ PEWNOŚĆ UDANEGO I BEZPIECZNEGO ZAKUPU.",
}


const About = ({ data}) => {

    const indexFluid = data.allImageSharp.nodes.map(({ fluid }) => fluid)

    return (
        <>
            <LookingFor description={description} fluid={indexFluid[0]} />
           <Delivrence description={description} fluid={indexFluid[1]} />
           <Repair description={description} fluid={indexFluid[2]} />
           <Experince description={description}  fluid={indexFluid[3]} mobile background={mainBackground4}/>
        </>

    )
}
export default About