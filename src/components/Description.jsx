import React from 'react'
import styled from 'styled-components'

const DescBloc = styled.div`
  width: 45%;
  margin: 1em auto;
  padding: 1.2em;
  color: rgba(255,255,255, .8);
  font-weight: 300;
  font-size: 22px;
  line-height: 1.6;
  text-align: justify;
  opacity: 0;
  word-spacing: 1px;

  animation: desc .7s ease .5s forwards;

  @keyframes desc {
    100% { transform: translateY(0px); opacity: 1;}
  }

  @media screen and (max-width: 45em) {
    width: 90%;
    margin: 1em auto;
    font-size: 18px;
  }
`

const Description = (props) => {
  return (
    <DescBloc>
      {props.children}
    </DescBloc>
  )
}

export default Description
