import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'
import { useEffect } from 'react';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  color: white;
`
const WtfContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: .2em;
  font-size: 30em;
  text-align:center;


  @media screen and (max-width: 45em) {
    font-size: 10em;
    flex-direction: column;
  }
`

const LeaveBro = styled(Link)`
  display: block;
  text-align: center;
  color: white;
  padding: 1.5em;
  background-color: rgba(255,255,255, 0.1);
  text-decoration: none;
  letter-spacing: 2px;
  transition: .5s;
  :hover {
    background-color: rgba(255,255,255, 0.2) ;
  }
  :focus {
    outline: 0;
  }
`

const Page404 = () => {

  useEffect( () => {
    document.title = " ~ hedik/ERROR ERROR ERROR ERROR ERROR ERROR ERROR"
    return () => document.title = " ~ hedik/"
  })

  return (
    <Container>
      <div>
        <LeaveBro to="/" > What are you doin here my dude ?  </LeaveBro>
        <WtfContainer>
          <span>
            4
          </span>
          <span>
            0
          </span>
          <span>
            4
          </span>
        </WtfContainer>
      </div>
    </Container>
  )
}

export default Page404
