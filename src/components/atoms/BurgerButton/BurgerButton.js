import React from 'react'
import styled from 'styled-components';

const StyledButton = styled.button`
@media(min-width: 900px){ 
    display: none; 
}
width : 80px; 
height: 40px; 
color: white; 
background-color: royalblue;  
text-shadow: 2px 2px black; 
border: none; 
padding : 5px 5px; 
position: fixed; 
top: 2%; 
left: 5%;
z-index: 10;
border-radius: 20px;
font-size: .8em;

`


const BurgerButton = ({ children, onClick }) => (
    <StyledButton onClick={onClick}>
        {children}
    </StyledButton>

)


export default BurgerButton; 