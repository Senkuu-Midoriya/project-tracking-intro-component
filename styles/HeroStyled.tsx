import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 8rem 9rem;
    /* position: relative; */
`
export const New = styled.h5`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    height: 33px;
    width: 68.19px;
    /* position: absolute; */
    /* padding: 5px 17px; */
    font-family: "Barlow Condensed";
    background-color: hsl(230, 29%, 20%);
    border-radius: 20px;
    font-size: 19px;
    text-transform: uppercase;
    letter-spacing: 1px;
`

export const FlexContainer = styled.div`
    display: flex;
    align-items: center;

`

export const HeadingFlexer = styled.div`
    margin-left: 20px ;
    font-family: "Barlow Condensed";
    font-weight: 400;
    letter-spacing: 5px;
    color:hsl(231, 7%, 65%);
    font-size: 19px;
    text-transform: uppercase;
`

export const Body = styled.h1`
    color: hsl(230, 29%, 20%);
    font-size: 90px;
    text-transform: uppercase;
    font-family: "Barlow Condensed";
    width: 50rem;
    margin-top: 2rem;
    line-height: 6rem;
`

export const Desc = styled.span`
    color: hsl(230, 11%, 40%);
    font-size: 20px;
    font-family: "Barlow";
    font-weight: 400;
    width: 22rem;
    margin-top: 1.4rem;

`



export const Button1 = styled.button`
    background-color: hsl(0, 100%, 68%);
    border: transparent;
    text-transform: uppercase;
    color: white;
    width: 14rem;
    border-radius: 5px;
    height: 3.3rem;
    margin-top: 2rem;
    font-family: "Barlow Condensed";
    font-weight: 700;
    font-size: 18px;
    letter-spacing: 1.5px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        background-color:hsl(0, 100%, 68%,0.6) ;
        transition: background-color 0.2s linear;
    }
`

export const Button2 = styled.button`
    margin-top: 2rem;
    background-color: transparent;
    border: transparent;
    color: hsl(231, 7%, 65%);
    letter-spacing: 3px;
    text-transform: uppercase;
    width: 15rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Barlow Condensed";
    margin-left: 0;
    font-weight: 400;
    letter-spacing: 5px;
    font-size: 18px;
    cursor: pointer;


`

