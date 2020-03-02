import React from 'react'
import styled, {css} from 'styled-components';
import {graphql} from 'gatsby'; 
import Image from 'gatsby-image';

const StyledWrapper = styled.div`
width: 100%; 
min-height: 100vh; 
background-color: #1EBDE0;
padding: 100px 10px; 
display: flex; 
justify-content: flex-start; 
align-items: center; 
flex-direction: column;
`

const StyledGrid = styled.div`
display: grid; 
position: relative;
grid-template-columns: repeat(1, 1fr); 
width: 100%; 
height: 90%;
grid-gap: 20px; 
padding: 50px 10px;  
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


const StyledHeading = styled.h2`
color: white; 
margin: 0;
font-size: 1.5em;
text-align: center;
`
const StyledImage = styled(Image)`
height: 100%;
width: 100%;
max-height: 400px; 
border-radius: 20px;
box-shadow: 0 0 5px 2px black;
transition: .2s linear;



`

const StyledLightbox = styled.div`
height:40vh; 

@media(max-width:800px) and (orientation:landscape){ 
    height: 50vh;
}

`

const StyledFrame = styled.div`
width : 95vw; 
height: 80vw; 
max-width: 1200px; 
max-height: 800px;
position: fixed;
perspective: 1000px;
top: 45%; 
left: 50%; 
transform: translate(-50%,-50%); 
z-index: 15;
background-size: cover;
background-position: center; 
background-repeat: no-repeat; 
background-image: url(${({src})=> src}); 
animation: show .2s linear both;
box-shadow: 0 0 10px 5px white; 
will-change: transform; 

@media(max-width: 1024px) and (orientation: landscape){ 
  top: 50%; 
  width : 80vw; 
height: 80vh; 
}
@media(min-width: 1025px) and (orientation: landscape){ 
  width : 95vw; 
height: 80vw; 
}


@keyframes show {
  0%{ 
opacity: 0;
transform: translate(-50%,-50%)scale(.6);
  }

  100%{ 
    opacity: 1;
    transform:translate(-50%,-50%)scale(1);
  }
}


`

const StyledBackground = styled.div`
position: fixed; 
top: 0%;
left : 0%;
background-color: rgba(0,0,0,.85); 
width : 100vw; 
height: 100%; 
z-index: 10; 
`

const ButtonXLightbox = styled.button`
color : crimson; 
border: none ;
background: none; 
position: absolute; 
top: -1%;
right: -1%;
transform:translate(30%,-40%); 
font-size: 1em; 
padding : 5px;
border-radius: 20px;
font-size: 2em;

`

export const casrsCms = graphql`
  {
    allDatoCmsCarsgallery {
      nodes {
        carphotos {
          fluid {
            src
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
  }
`



class Gallery extends React.Component{

    state = { 
    src : '', 
    isOpen : false, 
}

  handlePreview(fluid){ 
    this.setState({ 
     isOpen: true, 
     src : fluid.src, 
    })
 }

 closePreview(){ 
   this.setState({ 
     isOpen: false, 
     src : '', 
   })
 }
    render(){
    const {data} = this.props; 
        return(
    <>
        {this.state.isOpen  ? <> <StyledBackground onClick={()=>{this.closePreview()}}>
          </StyledBackground> 
          <StyledFrame src={this.state.src}>  <ButtonXLightbox onClick={()=>(this.closePreview())}>X</ButtonXLightbox></StyledFrame> </>: null}
    <StyledWrapper>
        <StyledHeading>Przykładowe modele które sprowadziliśmy</StyledHeading>
        <StyledGrid>

        {data.allDatoCmsCarsgallery.nodes.map(item => item.carphotos.map(({fluid})=><div key={fluid.src}><StyledLightbox onClick={()=>{this.handlePreview(fluid)}} >
        <StyledImage fluid={fluid}/>
             </StyledLightbox>
             </div>
             ))}

        </StyledGrid>
    </StyledWrapper>
</>
        )
}}


export default Gallery