import React from 'react';
import styled, { css } from 'styled-components';
import Image from 'gatsby-image'


const StyledWrapper = styled.div`
width: 100%; 
height: 80vh;
position : relative;
`

const StyledImage = styled(Image)`
width: 100%; 
height: 100%; 
object-fit: cover; 
position: relative;
filter: blur(2px);

@media (orientation:portrait) and (max-width: 500px){
${({ mobile }) => mobile && css`
::before{ 
    display : block; 
    content : ''; 
    position : absolute; 
    width : 100%; 
    height : 100%; 
    background-repeat: no-repeat; 
    background-size : cover; 
    background-position : center;
    background-image : url(${({ background }) => background});
    z-index : 2; 
    filter: blur(2px); 
    background-position : bottom 10px right -130px; 
    }
`}
}

::after{ 
    width : 100%; 
    height: 100%; 
    position : absolute; 
    content:''; 
    display : block; 
    background-color: rgba(0,0,0,.6); 
    z-index: 3; 
    top: 0; 
    left :0;
}
`
const MainSection = ({ children, background, mobile, fluid }) => (
    <StyledWrapper>
        {children}
        <StyledImage background={background} mobile={mobile} fluid={fluid} />
    </StyledWrapper>
)



export default MainSection