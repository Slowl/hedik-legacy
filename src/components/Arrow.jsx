import React from 'react'
import styled from 'styled-components'
import ScrollIntoView from 'react-scroll-into-view'

const ArrowBloc = styled.div`
  width: 60px;
  margin : 40px auto;
  cursor: pointer;
  opacity: 0;
  animation : arrow 2.5s ease infinite 1.2s;

  @keyframes arrow {
    0% {transform: translateY(10px); opacity: 1;}
    25% {transform: translateY(0px); opacity: 1;}
    50% {transform: translateY(0px); opacity: 1;}
    75% {transform: translateY(0px); opacity: 1;}
    100% {transform: translateY(10px); opacity : 1;}
  }

  svg {
    opacity: 0;
    animation : svg-arrow 2s ease forwards 1.2s;

    @keyframes svg-arrow {
    100% {opacity: 1;}
    }
  }
`

const Arrow = ({ selector }) => {
  return (
    <ArrowBloc>
      <ScrollIntoView alignToTop selector={`#${selector}`}>
        <svg fill="#FFFFFF" height="48" viewBox="0 0 24 24" width="48">
          <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/>
          <path d="M0-.75h24v24H0z" fill="none"/>
        </svg>
      </ScrollIntoView>
    </ArrowBloc>
  )
}

export default Arrow
