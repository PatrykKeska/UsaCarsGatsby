import React from 'react'
import styled from 'styled-components'; 
import img from '../../assets/audi.jpg';


const StyledProduct = styled.div`
max-width :450px; 
height: 500px;
background-color: rgba(0,0,0,.4);
padding: 10px 10px 20px 10px; 
border-radius: 20px; 
display: flex; 
justify-content: center; 
align-items : center;
flex-direction: column; 
box-shadow: 0px 0px 5px 2px white;
`

const StyledProductTittle = styled.h3`
font-size: 1em; 
color : white; 
font-weight: bold;
margin : 10px;   
text-align: center;
`
const StyledProductImage = styled.img`
width: 80%; 
max-width: 100%; 
max-width: 100%; 
border-radius:10px;

`

const StyledProductDescription = styled.p`
width : 90%; 
font-size: .5em; 
color : white; 
margin : 5%; 
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
`


const Product = ()=> ( 
<StyledProduct>
        <StyledProductTittle>Tittle</StyledProductTittle>
        <StyledProductImage src={img}/>
        <StyledProductDescription>Ford Escape 2017, Najnowszy model - 2.0 Benzyna ECOBOOST 245 KM. Skrzynia biegów automat, napęd 4X4, Titanium</StyledProductDescription>
        <StyledButton href='#'>Link</StyledButton>
        </StyledProduct>

)


export default Product; 