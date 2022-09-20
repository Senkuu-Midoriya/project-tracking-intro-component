import React from 'react'
import { Container,BgContainer, ImageContainer, Dot,NavLinks, NavItems, NavItems2, LinksContainer, DotContainer } from '../styles/NavBarStyles'
import Image from "next/future/image"
import devices from "../public/devices.svg"
import logo from "../public/logo.svg"
const NavBar = () => {
  return (
    <Container>
        <BgContainer>
            <ImageContainer>
                <Image alt='illustration' src={devices} height={600}/>
            </ImageContainer>
        </BgContainer>
        <Image alt='logo' src={logo}/>
        <NavLinks>
            <LinksContainer>
                <NavItems>
                    product
                </NavItems>
                <NavItems>
                    features
                </NavItems>
                <NavItems>
                    pricing
                </NavItems>
            </LinksContainer>
            <DotContainer>
                <NavItems2>
                    login
                </NavItems2>
                <Dot/>
            </DotContainer>
        </NavLinks>
    </Container>
  )
}

export default NavBar