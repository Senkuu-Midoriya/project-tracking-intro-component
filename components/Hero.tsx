import React from 'react'
import { Container, FlexContainer, HeadingFlexer, New, Body, Desc,Button1, Button2} from '../styles/HeroStyled'
const Hero = () => {
  return (
    <Container>
      <FlexContainer>
        <New>
          New
        </New>
        <HeadingFlexer>
          monograph dashboard
        </HeadingFlexer>
      </FlexContainer>
      <Body>
        powerful insights into your team
      </Body>
      <Desc>
        Project planning and time tracking for agile teams
      </Desc>
      <FlexContainer>
        <Button1>
          schedule a demo
        </Button1>
        <Button2>
          to see a preview
        </Button2>
      </FlexContainer>
    </Container>
  )
}

export default Hero