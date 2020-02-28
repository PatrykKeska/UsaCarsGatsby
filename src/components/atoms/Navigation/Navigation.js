import React from 'react';
import styled from 'styled-components'
import { Link } from 'gatsby';

const NavigationWrapper = styled.nav`
display: flex ; 
justify-content : flex-start; 
align-items : center ; 
font-family:'ubuntu';
position: fixed;
top: 5%; 
left : 2%; 
z-index: 10; 
a{ 
    text-decoration : none; 
    color : inherit; 
}
`
    ;
const Logo = styled.span`
font-size: 20px;
font-weight : 700;  
margin-right : 10px;
color: white;


`


const NavigaitonList = styled.ul`
margin : 0 ; 
padding : 0 ; 
list-style : none ; 
display : flex; 

`


const NavigaitonListItem = styled.li`
font-weight : 700; 
font-size : 17px; 
margin-left : 32px; 
color: white;



`



const Navigation = () => (
    <NavigationWrapper>
        <Logo><Link to='/'>KSMAK Cars</Link></Logo>
        <NavigaitonList>
            <NavigaitonListItem><Link to="/About">O nas</Link></NavigaitonListItem>
            <NavigaitonListItem><Link to="/Offerts">Oferty</Link></NavigaitonListItem>
            <NavigaitonListItem><Link to="/Gallery">Galeria</Link></NavigaitonListItem>
            <NavigaitonListItem><Link to="/Contact">Kontakt</Link></NavigaitonListItem>
        </NavigaitonList>
    </NavigationWrapper>
)


export default Navigation
