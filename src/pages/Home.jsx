import React from 'react'
import styled from 'styled-components'
import Intro from '../components/Intro'
import Portfolio from '../components/Portfolio'

const HomeContainer = styled.div`

`

const IntroWords = styled.div`
  padding : 2%;
  margin-top : 1.5%;
  text-align: center;
  font-size : 48px;
  font-weight: 200;
  letter-spacing: 3px;
  word-spacing: 10px;
  color: white;

::after {
  display : block;
  content:'';
  width : 100px;
  height:1px;
  margin : 2% auto;
  background-color : white;
}
`

const Home = (props) => {

  return (
    <HomeContainer>
      <Intro />
      <IntroWords id="projects"> My <span>work</span></IntroWords>
      <Portfolio />
      <IntroWords> Contact me</IntroWords>
    </HomeContainer>
  )
}

export default Home
