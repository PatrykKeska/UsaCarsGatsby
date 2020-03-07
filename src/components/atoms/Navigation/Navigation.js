import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import { Link } from 'gatsby';





const NavigationWrapper = styled.nav`
display: flex ; 
justify-content : flex-start; 
align-items : center ; 
font-family:'ubuntu';
position: fixed;
top: 3%; 
left : 2%; 
z-index: 10; 
a{ 
    text-decoration : none; 
    color : inherit; 
}

@media(max-width:900px){ 
flex-direction: column;
justify-content : center; 
width : 100vw; 
height: 100vh; 
background-color: rgba(0,0,0,.8); 
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
    opacity: .5;
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

@media(max-width:900px){ 
    flex-direction: column;
}

`   

const NavigaitonListItem = styled.li`
font-weight : 700; 
font-size : .9em; 
margin-left : 32px; 
color: white;
text-shadow: 2px 2px black;
overflow: hidden;

@media(max-width:900px){ 
    margin : 10px 0 };


a{ 
position: relative;
width: 100%; 
height: 100%; 
padding : 20px 1px;

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

}
`

const BurgerButton = styled.button`
@media(min-width: 900px){ 
    display: none; 
}
width : 80px; 
height: 30px; 
color: white; 
background-color: royalblue;  
text-shadow: 2px 2px black; 
border: none; 
padding : 3px 5px; 
position: fixed; 
top: 2%; 
left: 5%;
z-index: 10;
border-radius: 20px;
font-size: .7em;

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
        const check = ()=> { 
         if(window.innerWidth > 900){ 
             return setNav(true)
         }
        }

        window.addEventListener('resize', check)
    })

        return(
            <>
         <BurgerButton onClick={()=>handleNav()}>menu</BurgerButton>
         {isOpen ? (<NavigationWrapper>
            <Logo ><Link to='/'>KSMAK Cars</Link></Logo>
            <NavigaitonList>
                <NavigaitonListItem onClick={()=>handleNav()}><Link to="/About">O nas</Link></NavigaitonListItem>
                <NavigaitonListItem onClick={()=>handleNav()}><Link to="/Offerts">Oferty</Link></NavigaitonListItem>
                <NavigaitonListItem onClick={()=>handleNav()}><Link to="/Gallery">Galeria</Link></NavigaitonListItem>
                <NavigaitonListItem onClick={()=>handleNav()}><Link to="/Contact">Kontakt</Link></NavigaitonListItem>
            </NavigaitonList>
        </NavigationWrapper > 
        ) : null}
            
        </>
        )
    }

   

export default Navigation
