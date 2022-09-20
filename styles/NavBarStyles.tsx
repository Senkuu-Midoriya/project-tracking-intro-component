import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 55px 9rem;

`
export const ImageContainer = styled.div`
    position: relative;
    right: -2rem;
    bottom: -14rem;
`
export const NavLinks = styled.nav`
    list-style: none;
    margin-left: auto;
    margin-right: 2rem;
    z-index: 1;
    display: flex;
    font-family: "Barlow Condensed";
`

export const NavItems = styled.li`
    color: hsl(230, 29%, 20%);
    font-weight: 700;
    font-size: 22px;
    margin-right: 4rem;
    text-transform: uppercase;
    cursor: pointer;
    letter-spacing: 0.8px;
    position: relative;
    &::before{
        content: '';
        background-color:hsl(230, 29%, 20%);
        position: absolute;
        height: 1.6px;
        margin-top: 10px;
        width: 100%;
        bottom: 0;
        transform-origin: left;
        transform:scale(0);
        transition: transform 0.2s linear;
    }
    &:hover::before{
        transform:scale(1);        
        transform-origin: right;
    }
    
`
export const NavItems2 = styled.li`
    color: hsl(231, 7%, 65%);
    font-weight: 700;
    font-size: 22px;
    margin-left: 0rem;
    text-transform: uppercase;
    cursor: pointer;
    letter-spacing: 1px;
    position: relative;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
    /* &::after{
        cursor: auto;
        content: '';
        background-color:hsl(231, 7%, 65%);
        height: 8px;
        width: 8px;
        position: absolute;
        border-radius: 50%;
        left: -62.5px;
        top: 8px;
    } */
    &::before{
        content: '';
        background-color:hsl(231, 7%, 65%);
        position: absolute;
        height: 1.6px;
        width: 100%;
        bottom: 0;
        transform-origin: left;
        transform:scale(0);
        transition: transform 0.2s linear;
    }
    &:hover::before{
        transform:scale(1);        
       
        transform-origin: right;
    }
    /* &:hover::after{
        background-color:hsl(231, 7%, 65%)s ;
    } */
`

export const Dot = styled.div`
    background-color:hsl(231, 7%, 65%);
    height: 8px;
    width: 8px;
    position: absolute;
    left: -4rem;
    border-radius: 50%;
`
export const DotContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`
export const BgContainer = styled.div`
    background-color: hsl(207, 33%, 95%);
    height: 33rem;
    width: 58rem;
    position: absolute;
    top:0;
    right:0;
    border-bottom-left-radius: 100px;
    z-index: 0;
`

export const LinksContainer = styled.div`
    display: flex;
    margin-right: 3rem;
`