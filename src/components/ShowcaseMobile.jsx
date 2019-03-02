import React from 'react'
import styled from 'styled-components'

const MobileContainer = styled.div`
  display:none;
  min-width: 95%;
  max-width: 95%;
  margin : 1em auto 3.5em;
  opacity: 0;

  animation : delayFix 1s ease 1s forwards;

  @keyframes delayFix {
    100% { opacity: 1;}
  }

  @media screen and (max-width: 45em) {
    display: none;
  }

  @media screen and (max-width: 45em) {
    display: block;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }

  div {
    width: 95%;
    margin: auto;
    padding: .5em;
    text-align: center;
    font-size: 14px;
    font-weight: 300;
    border-radius: 5px;
    color: white;
    background-color: rgba(0,0,0,0.5);
  }
`

const ShowcaseMobile = ({ dataImg }) => {
  return (
    <div>
      {dataImg.map((datas, key) => (
        <MobileContainer key={key}>
          <img src={datas.src} alt={datas.alt} importance={datas.importance} />
          <div>{datas.legend}</div>
        </MobileContainer>
      ))}
    </div>
  )
}

export default ShowcaseMobile
