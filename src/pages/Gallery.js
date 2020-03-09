import React from 'react'
import styled from 'styled-components';
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
animation: showGallery .3s linear ; 

@keyframes showGallery {
0%{ 
    opacity: 0; 
    transform: translateX(50vw); 
}

100%{ 
    opacity :1; 
    transform: translate(0); 
}
}
`

const StyledGrid = styled.div`
display: grid; 
position: relative;
grid-template-columns: repeat(2, 1fr); 
width: 100%; 
height: 90%;
grid-gap: 20px; 
padding: 50px 10px;  
@media(min-width: 640px){ 
    grid-template-columns: repeat(3, 1fr); 
}

@media(min-width:900px){ 
    grid-template-columns: repeat(4, 1fr); 
}

@media(min-width:1200px){ 
    grid-template-columns: repeat(5, 1fr); 
}
@media(min-width:1600px){ 
    grid-template-columns: repeat(6, 1fr); 
}
@media(min-width:2000px){ 
    grid-template-columns: repeat(8, 1fr); 
}
`


const StyledHeading = styled.h2`
color: white; 
margin: 0;
font-size: 1.5em;
text-align: center;
`
const StyledImage = styled(Image)`
height: 90%;
width: 100%;
max-height: 400px; 
border-radius: 20px;
box-shadow: 0 0 5px 2px black;
transition: .2s linear;

:hover { 
  cursor: pointer;
  box-shadow: 0 0 2px 2px white;
  transform: scale(.95);  
}


`

const StyledLightbox = styled.div`
height:20vh; 

@media(max-width:900px) and (orientation:landscape){ 
    height: 60vh;
}


`

const StyledFrame = styled(Image)`
width : 90vw; 
height: 70vw; 
max-width: 1200px; 
max-height: 800px;
position: fixed !important;
perspective: 1000px;
top: 45%; 
left: 50%; 
z-index: 15;
object-fit: fit;
animation: show .2s linear both;
box-shadow: 0 0 15px 5px white; 
will-change: transform; 

@media(max-width: 1024px) and (orientation: landscape){ 
  top: 45%; 
  width : 65vw; 
height: 70vh; 
}
@media(min-width: 1025px) and (orientation: landscape){ 
  width : 70vw; 
height: 80vh; 
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

const ButtonClosePreview = styled.button`
color : white;
font-family: Ubuntu;
font-weight: bold;  
border : none; 
background: none; 
position: fixed; 
bottom : 8em; 
right: 50%; 
transform: translate(50%,50%);  
font-size: 1em; 
padding: 20px;
border-radius: 20px;
font-size: 1em;
font-weight: lighter; 
z-index: 16;
transition: all .2s linear; 

:hover { 
  cursor: pointer; 
  color: crimson;
}

@media(orientation:portrait)and (max-width:600px){
bottom : 25%;

}

@media(orientation:landscape){ 
  bottom: 5%; 
}
`

export const casrsCms = graphql`
  query photosquery{
    allDatoCmsGallery {
      nodes {
        photos {
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
     src : fluid, 
    })
 }

 closePreview(){ 
   this.setState({ 
     isOpen: false, 
     src : '', 
   })
 }


 componentDidMount(){
 document.addEventListener('keydown',(e)=>{if(e.key==="Escape"){ (this.closePreview())}})
}

componentWillUnmount(){ 
  document.removeEventListener('keydown', ()=>(this.closePreview()) ); 
}
    render(){
    const {data} = this.props; 
        return(
    <>
        {this.state.isOpen  ? <> <StyledBackground onClick={()=>{this.closePreview()}}>
          </StyledBackground> 
          <ButtonClosePreview onClick={()=>(this.closePreview())}>close</ButtonClosePreview>
          <StyledFrame fluid={this.state.src}/> </>: null}
    <StyledWrapper>
        <StyledHeading>Przykładowe modele które sprowadziliśmy</StyledHeading>
        <StyledGrid>

        {data.allDatoCmsGallery.nodes.map(item => item.photos.map(({fluid})=><div key={fluid.src}><StyledLightbox onClick={()=>{this.handlePreview(fluid)}} >
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