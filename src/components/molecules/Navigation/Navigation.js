import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { Link } from 'gatsby';
import contactIcon from '../../../assets/icons/contacts.svg'
import galleryIcon from '../../../assets/icons/photograph.svg'
import ofertsIcon from '../../../assets/icons/supermarket.svg'
import aboutIcon from '../../../assets/icons/user.svg'
import hero from '../../../assets/hero/headerMobile.jpg'
import heroLand from '../../../assets/hero/header.jpg'
import NaviLink from '../../atoms/NavLink/NaviLink'
import BurgerButton from '../../atoms/BurgerButton/BurgerButton'



const NavigationWrapper = styled.nav`
display: flex ; 
justify-content : flex-start; 
align-items : center ; 
font-family:'ubuntu';
position: fixed;
top: 3%; 
left : 2%; 
z-index: 10; 
padding : 10px;
a{ 
    text-decoration : none; 
    color : inherit; 
}

@media(max-width:900px){ 
flex-direction: column;
justify-content : flex-start;
padding-top: 60px; 
width : 100vw; 
height: 100vh; 
background-color: rgba(0,0,0,.7); 
top: 0; 
left: 0;
z-index: 5;
animation: showNav .3s linear ; 
::before{ 
    content: ' '; 
    display: block; 
    position: absolute; 
    top: 0; 
    left: 0;
    width :100%; 
    height: 100%; 
    filter: blur(10px)grayscale(.5);
    opacity: 1;
    z-index: -1;
    background-image: url(${hero});
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat;

    @media(orientation : landscape){ 
        background-image: url(${heroLand});
    }
}


@keyframes showNav {
0%{ 
    opacity: 0; 
    transform: translateX(20vw);
}

100%{ 
    opacity :1; 
    transform: translateX(0);
}
}

}


`

const Logo = styled.span`
font-size: 1em;
font-weight : 700;  
margin-right : 10px;
color: white;
text-shadow: 2px 2px black; 

@media(max-width:900px){ 
margin-bottom: 20px;
font-size: 1.5em;

}


`


const NavigaitonList = styled.ul`
margin : 0 ; 
padding : 0 ; 
list-style : none ; 
display : flex; 
justify-content: center; 
align-items: center;
padding :10px;
@media(max-width:900px){ 
    flex-direction: column;
}

`

const NavigaitonListItem = styled.li`
font-weight : 700; 
font-size : .9em; 
color: white;
text-shadow: 2px 2px black;
display: flex;
justify-content: center; 
align-items: center;
@media(max-width:900px){ 
    margin : 10px 0 ;
    width:100%;
}

@media(min-width:901px){
    margin-left : 10px; 
    overflow: hidden;
}

`

const StyledIcon = styled.img`
position : absolute; 
width: 80%;
height: 80%; 
left : -60% ; 
top : 50%; 
transform: translate(0,-50%);
`



const Navigation = () => {

    const [isOpen, setNav] = useState(true)

    const handleNav = () => {
        setNav(!isOpen)
        if (window.innerWidth > 900) {
            setNav(true)
        }
    }

    useEffect(() => {

        const checkWindowWidth = () => {
            if (window.innerWidth > 900) {
                return setNav(true)
            }

        }

        window.addEventListener('resize', checkWindowWidth)

    })

    return (
        <>

            <BurgerButton onClick={() => handleNav()}>{isOpen ? "zamknij" : "menu"}</BurgerButton>
            {isOpen ? (<NavigationWrapper>
                <Logo ><Link to='/'>KSMAK Cars</Link></Logo>
                <NavigaitonList>
                    <NavigaitonListItem onClick={() => handleNav()}><NaviLink path="/About"><StyledIcon src={aboutIcon} />O nas</NaviLink></NavigaitonListItem>
                    <NavigaitonListItem onClick={() => handleNav()}><NaviLink path="/Offerts"><StyledIcon src={ofertsIcon} />Oferty</NaviLink></NavigaitonListItem>
                    <NavigaitonListItem onClick={() => handleNav()}><NaviLink path="/Gallery"><StyledIcon src={galleryIcon} />Galeria</NaviLink></NavigaitonListItem>
                    <NavigaitonListItem onClick={() => handleNav()}><NaviLink path="/Contact"><StyledIcon src={contactIcon} />Kontakt</NaviLink></NavigaitonListItem>
                </NavigaitonList>
            </NavigationWrapper >
            ) : null}

        </>
    )
}



export default Navigation
