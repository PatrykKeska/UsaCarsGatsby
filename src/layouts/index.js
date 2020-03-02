
import React from "react"
import GlobalStyle from '../assets/styles/GlobalStyles'
import Navigation from "../components/atoms/Navigation/Navigation"


const MainLayout = ({ children }) => (
    <>
        <GlobalStyle />
        <Navigation />
        {children}
    </>
)

export default MainLayout