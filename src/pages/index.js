import React from "react"
import SEO from "../components/seo"
import styled from 'styled-components'; 
import mobile from '../assets/hero/headerMobile.jpg'
import desktop from '../assets/hero/header.jpg';

const StyledWrapper = styled.div`
width : 100%; 
height: 100vh; 
overflow: hidden;
position: relative;


h1{ 
  margin :0 ;
  color: white;
  position: absolute; 
  bottom: 10%;
  left: 5%;
  font-size: 1.5em;
  /* display: flex; 
  justify-content: center; 
  align-items: center;
  flex-direction: column; */

  
  @media(orientation : landscape){ 
    background-color: rgba(0,0,0,.7);
    height: 20vh;
    text-align: center; 
    line-height: 17vh;
    width: 100%;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
    
  }


}


span{ 
    position : absolute; 
    color : white;
    font-size: .9em;
    width: 100%;
    bottom : 5%; 
    left : 10%;
    margin : 0 ;
  

  @media(orientation : landscape){ 
    text-align: center; 
    width: 100%;
    top: 45%;
    left: 50%;
    transform: translateX(-50%);
    
}}

`

const StyledBackground = styled.div`
width : 100%; 
min-height: 100%; 
background-image: url(${mobile});
background-repeat: no-repeat; 
background-position: center;
background-size: cover; 
align-items: center; 


@media(orientation : landscape){ 

  background-image: url(${desktop});
}
`

const IndexPage = () => (
  <StyledWrapper>
    <SEO title="Home" />
    <StyledBackground><h1>KSMAK Cars</h1> <span>sprowadzamy samochody z USA</span></StyledBackground>
  </StyledWrapper>
)

export default IndexPage
