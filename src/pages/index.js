import React from "react"
import SEO from "../components/seo"
import styled from 'styled-components'; 


const StyledWrapper = styled.div`
width : 100%; 
height: 100vh; 
background-color : rgba(0,0,0,.6); 
padding : 200px; 

h1{ 
  margin :0 ;
}
`


const IndexPage = () => (
  <StyledWrapper>
    <SEO title="Home" />
    <h1>Strona w przebydowie</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
  </StyledWrapper>
)

export default IndexPage
