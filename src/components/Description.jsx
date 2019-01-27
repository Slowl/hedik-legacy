import React from 'react'
import styled from 'styled-components'

const DescBloc = styled.div`
  background-color: rgba(0,0,0, .15);
  width: 70%;
  margin: 4em auto;
  padding: 1.2em;
  border-radius: 10px;
  color: rgba(255,255,255, .8);
  font-weight: 300;
  line-height: 1.4;
  text-align:center;

  opacity: 0;
  animation : svg-arrow .7s ease forwards .7s;

  @keyframes svg-arrow {
  100% {opacity: 1;}
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
