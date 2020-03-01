import React from 'react'
import styled from 'styled-components'; 
import Image from 'gatsby-image';


const StyledProduct = styled.div`
max-width :450px; 
height: 500px;
position: relative;
background-color: rgba(0,0,0,.4);
padding: 10px 10px 20px 10px; 
border-radius: 20px; 
display: flex; 
justify-content: center; 
align-items : center;
flex-direction: column; 
box-shadow: 0px 0px 5px 2px white;
transition: .2s linear ; 
will-change: transform; 
:hover{ 
    transform: scale(.95); 
}
`

const StyledProductTittle = styled.h3`
font-size: 1em; 
color : white; 
font-weight: bold;
margin : 10px;   
text-align: center;
position: absolute;
top: 2%; 
`
const StyledProductImage = styled(Image)`
width: 80%;
max-width: 100%; 
max-width: 100%; 
border-radius:10px;
max-height: 200px; 

`

const StyledProductDescription = styled.p`
width : 90%; 
font-size: .5em; 
color : white; 
margin : 5%; 
text-align: center;
`

const StyledButton = styled.a`
width: 200px; 
height: 50px; 
color : white; 
text-align: center; 
text-decoration: none; 
border: 2px solid #1EBDE0;
background-color: #1EBDE0;
padding: 10px 5px;
border-radius: 20px;
line-height: 25px;
box-shadow: 0 0 5px 2px white;
position: absolute;
bottom: 2%; 
transition: .2s linear; 
will-change: box-shadow;
:hover{ 
    box-shadow: 0 0 5px 5px greenyellow; 
}
`


const Product = ({data, fluid})=> ( 
<StyledProduct>
<StyledProductTittle>{data.nazwaPojazdu}</StyledProductTittle>
        <StyledProductImage fluid={fluid}/>
<StyledProductDescription>{data.opis}</StyledProductDescription>
<StyledButton href={`https://${data.link}`}>Aukcja</StyledButton>
        </StyledProduct>

)


export default Product; 