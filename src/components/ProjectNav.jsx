import React from 'react'
import styled from 'styled-components'
import { Link } from "@reach/router";

const NavContainer = styled.div`
  width: 40%;
  margin: auto;
  padding-bottom: 4em;
  opacity: 0;
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: white;
    outline: 0;
    cursor: pointer;
  }

  animation : delayFix 1s ease 1s forwards;

  @keyframes delayFix {
    100% { opacity: 1;}
  }

  @media screen and (max-width: 45em) {
    flex-direction: column-reverse;
    width: 100%;
  }
`

const BackHome = styled.div`
  margin: .6em;
  padding: 1em 4em;
  border: 1px solid rgba(255,255,255, .7);
  border-radius: 50px;
  color: rgba(255,255,255, .8);
  letter-spacing: 1px;
  text-align: center;
  transition: all .4s;

  :hover {
    border: 1px solid transparent;
    background-color: rgba(255,255,255, .8);
    color: rgba(121,0,0,1);
  }

`

const ToTheSite = styled.div`
  margin: .6em;
  padding: 1em 4em;
  border: 1px solid rgba(255,255,255, .7);
  border-radius: 50px;
  color: rgba(255,255,255, .8);
  letter-spacing: 1px;
  text-align: center;
  transition: .4s;

  :hover {
    background-color: rgba(255,255,255, .8);
    color: rgba(121,0,0,1);
  }

`

const NoLive = styled.div`
  background-color: rgba(237, 4, 0, 0.2);
  padding: 3em;
  font-size: 17px;
  letter-spacing: 1px;
  font-weight: 300;
  color: white;
  text-align: center;
  opacity: 0;

  a {
    text-decoration: none;
    color: white;
    outline: 0;
    cursor: pointer;
  }

  div {
    width: 30%;
    margin: 2em auto 0;
  }

  animation : delayFix 1s ease 1s forwards;

  @keyframes delayFix {
    100% { opacity: 1;}
  }

  @media screen and (max-width: 45em) {
    padding: 1.5em;
    font-size: 14px;
  }
`

const ProjectNav = ({ url, noLive }) => {

  return (
    <div>
      { noLive ? (
        <NoLive> This is a private local application for the moment, nothing available publicly !
          <Link to="/">
            <BackHome>
              Back home
            </BackHome>
          </Link>
        </NoLive>
      ) : (
        <NavContainer>
          <Link to="/">
            <BackHome>
              Back home
            </BackHome>
          </Link>
          <a target="_blank" rel="noopener noreferrer" href={url}>
            <ToTheSite>
              Live website
            </ToTheSite>
          </a>
        </NavContainer>

      )}
    </div>
  )
}

export default ProjectNav
