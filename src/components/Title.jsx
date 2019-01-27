import React from 'react'
import styled from 'styled-components'

const TitleContainer = styled.div`
  margin : auto;
  padding-top: 2em;
  text-align: center;
  font-weight: 200;
  color : white;
  font-size : 64px;
  word-spacing: 15px;
  letter-spacing: 4px;
  opacity: 0;
  transform: translateY(-40px);

  animation: title .7s ease .5s forwards;

  @keyframes title {
    100% { transform: translateY(0px); opacity: 1;}
  }

  :after {
    content: "";
    display: block;
    width: 0px;
    height: 1px;
    margin: .5em auto;
    background-color: rgba(255,255,255, .7);

    animation: bar .7s ease .4s forwards;

    @keyframes bar {
      100% { width: 240px ;}
    }
  }
`

const Title = ({ title }) => {

  return (
    <TitleContainer>{title}</TitleContainer>
  )
}

export default Title
