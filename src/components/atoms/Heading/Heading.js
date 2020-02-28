import React from 'react'
import styled from 'styled-components';

const StyledHeading = styled.h2`
font-size : 1.5em; 
text-align : center; 
color : white; 
position: absolute; 
top : 20%; 
left: 50%; 
z-index: 4;
transform: translate(-50%,-50%);

@media (min-width: 1000px){
    top : 20%; 
left: 25%; 
z-index: 4;
width : 40%;
}
`

const Heading = ({children}) => (
    <>
        <StyledHeading>{children}</StyledHeading>
    </>
)


export default Heading; 