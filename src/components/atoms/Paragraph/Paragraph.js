import React from 'react'
import styled from 'styled-components';

const StyledParagraph = styled.p`
font-size : .7em; 
text-align : center; 
color : white; 
position: absolute; 
top :40%; 
left: 50%; 
z-index: 4;
width : 70%;
transform: translate(-50%,-50%);
font-weight: 700;

@media(max-width: 1000px)and (orientation:landscape){ 
    top: 45%; 
}

@media (min-width: 1000px){
    top : 40%; 
left: 30%; 
z-index: 4;
width : 40%;
}
`

const Paragraph = ({children}) => (
    <>
        <StyledParagraph>{children}</StyledParagraph>
    </>
)


export default Paragraph; 