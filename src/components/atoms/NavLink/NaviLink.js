import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby';

const StyledLink = styled(Link)`
  text-decoration : none; 
    color : inherit;
    position: relative;
    width: 100%; 
    height: 100%; 
text-align: center; 
box-sizing: border-box;
font-size: 1.3em;

    @media(min-width:901px){
    overflow: hidden;
    min-width: 100%;
    font-size: .9em;
    padding: 5px 15px;
    border-radius: 20px;
    overflow: hidden;
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
        border-radius:20px;
    
    }

    :hover :before{ 
    transform:translateX(100%);
} 
}
`


const NaviLink = ({ children, path }) => (
  <StyledLink to={path}>{children}</StyledLink>
)


export default NaviLink; 