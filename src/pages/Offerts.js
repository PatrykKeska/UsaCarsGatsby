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
animation: showOfferts .3s linear ; 
@keyframes showOfferts {
0%{ 
    opacity: 0; 
    transform: translateX(30vw); 
}

100%{ 
    opacity :1; 
    transform: translate(0); 
}
}
`

export const query = graphql`
query Offerts {
    allDatoCmsOffert {
        nodes {
          carName
          carDescription
          id
          auctionLink
          carPhoto {
            fluid {
            ...GatsbyDatoCmsFluid_tracedSVG
            src
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
            {data.allDatoCmsOffert.nodes.map(item => <Product key={item.id} data={item}/>)}
        </StyledGrid>
        </StyledWrapper>

)
}
export default Offerts