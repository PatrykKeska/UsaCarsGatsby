import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import { Link } from 'gatsby';
import contactIcon from '../../../assets/icons/contacts.svg'
import galleryIcon from '../../../assets/icons/photograph.svg'
import ofertsIcon from '../../../assets/icons/supermarket.svg'
import aboutIcon from '../../../assets/icons/user.svg'




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
justify-content : center; 
width : 100vw; 
height: 100vh; 
background-color: rgba(0,0,0,.4); 
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
    filter: blur(15px);
    opacity: .7;
    z-index: -1;
    background-color: darkturquoise;
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




@media(min-width:901px){
    margin-left : 10px; 
    overflow: hidden;
    a{ 
    min-width: 100%;
    font-size: .9em;
    padding: 5px 15px;
    border-radius: 20px;
    overflow: hidden;
    
}
}
@media(max-width:900px){ 
    margin : 10px 0 };
    width: 100%;


a{
position: relative;
width: 100%; 
height: 100%; 
text-align: center; 
box-sizing: border-box;
@media(min-width:901px){
    
:hover :before{ 
    transform:translateX(100%);
} 
    ::before{ 
        content: ''; 
        display: block; 
        width : 100%; 
        height: 100%; 
        display: block;
        background : royalblue; 
        position: absolute; 
        top: 0; 
        left: -100%;
        z-index: -1;
        transition: .2s linear; 
    
    }

}}
`

const BurgerButton = styled.button`
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

const StyledIcon = styled.img`
position : absolute; 
width: 80%; 
height: 80%; 
left : -70% ; 
top : 50%; 
transform: translate(0,-50%);
`



const Navigation = ()=> { 

    const [isOpen, setNav] = useState(true)
 
    const handleNav = ()=>{ 
        setNav(!isOpen)
        if(window.innerWidth > 900){ 
         setNav(true)
        }
    }

    useEffect(()=>{ 
      
        const checkWindowWidth = ()=> {    
         if(window.innerWidth > 900){ 
             return setNav(true)
         }

        }
    
        window.addEventListener('resize', checkWindowWidth)
        
    })
    
        return(
            <>
            
        <BurgerButton onClick={()=>handleNav()}>{isOpen ? "zamknij" : "menu"}</BurgerButton>
         {isOpen ? (<NavigationWrapper>
            <Logo ><Link to='/'>KSMAK Cars</Link></Logo>
            <NavigaitonList>
                <NavigaitonListItem onClick={()=>handleNav()}><Link to="/About"><StyledIcon src={aboutIcon}/>O nas</Link></NavigaitonListItem>
                <NavigaitonListItem onClick={()=>handleNav()}><Link to="/Offerts"><StyledIcon src={ofertsIcon}/>Oferty</Link></NavigaitonListItem>
                <NavigaitonListItem onClick={()=>handleNav()}><Link to="/Gallery"><StyledIcon src={galleryIcon}/>Galeria</Link></NavigaitonListItem>
                <NavigaitonListItem onClick={()=>handleNav()}><Link to="/Contact"><StyledIcon src={contactIcon}/>Kontakt</Link></NavigaitonListItem>
            </NavigaitonList>
        </NavigationWrapper > 
        ) : null}
            
        </>
        )
    }

   

export default Navigation
