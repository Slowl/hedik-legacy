import React from 'react'
import styled from 'styled-components'

const DescBloc = styled.div`
  background-color: rgba(0,0,0, .05);
  width: 70%;
  margin: 4em auto;
  padding: 1.2em;
  border-radius: 10px;
  color: rgba(255,255,255, .8);
  font-weight: 300;
  line-height: 1.4;
  text-align:center;
  opacity: 0;

  animation: desc .7s ease .5s forwards;

  @keyframes desc {
    100% { transform: translateY(0px); opacity: 1;}
  }

  @media screen and (max-width: 45em) {
    width: 90%;
    margin: 2em auto;
    font-size: 14px;
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
