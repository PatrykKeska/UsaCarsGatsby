import React from 'react'
import styled from 'styled-components';
import Product from '../components/organism/Prodcut';
import {graphql} from 'gatsby'; 
const StyledGrid = styled.div`
width : 100%; 
min-height: 80%; 
display: grid; 
grid-template-columns: repeat(1, 1fr); 
grid-gap: 20px;
padding : 10px; 

@media(min-width: 640px){ 
    grid-template-columns: repeat(2, 1fr); 
}

@media(min-width:1000px){ 
    grid-template-columns: repeat(3, 1fr); 
}

@media(min-width:2000px){ 
    grid-template-columns: repeat(4, 1fr); 
}
`


const StyledTittle = styled.h2`
font-size: 1.5em; 
color : white; 
font-weight: bold;
margin-top: 0; 
margin-bottom: 50px;  
text-align: center;
`


const StyledWrapper =styled.section`
width : 100vw; 
min-height: 100vh; 
background-color:#1EBDE0;
padding-top: 100px;

`

export const query = graphql`
query Offerts {
    allDatoCmsOferty {
      nodes {
        nazwaPojazdu
        opis
        id
        link
        zdjecie {
            fluid {
                ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
  }
  
`
const Offerts = ({data}) => {

return(
    <StyledWrapper>
        <StyledTittle>Aktualne Oferty</StyledTittle>
        <StyledGrid>
            {data.allDatoCmsOferty.nodes.map(item => <Product key={item.id} fluid={item.zdjecie.fluid} data={item}/>)}
        </StyledGrid>
        </StyledWrapper>

)
}
export default Offerts