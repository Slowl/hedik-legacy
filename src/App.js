import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { Router, Location } from "@reach/router"
import posed, { PoseGroup } from 'react-pose';
import DontLookAtMe from './components/DontLookAtMe'
import Home from './pages/Home'
import Bsmk from './pages/Bsmk'
import Linkfluence from './pages/Linkfluence'
import Page404 from './pages/Page404'
import NotreDam from './pages/NotreDam'
import { FiChevronDown } from 'react-icons/fi'

const RoutesContainer = posed.div({
  enter: { opacity: 1, delay: 200, beforeChildren: true },
  exit: { opacity: 0 }
});

const RootContainer = styled.div`
  width: 100%;
  background-color: #380c11;
`

const App = () => {

  useEffect(
    () => { document.title = " ~ hedik/"},
    []
  )

  return (
    <RootContainer>
      <AlertBanner />
      <Location>
        {({ location })=> (
          <PoseGroup>
            <RoutesContainer key={location.key}>
              <Router location={location} primary={false}>
                <Home path="/" />
                <Bsmk path="bsmk" />
                <Linkfluence path="linkfluence" />
                <Page404 default />
                <NotreDam path="aidez-moi" />
              </Router>
            </RoutesContainer>
          </PoseGroup>
        )}
      </Location>
      <DontLookAtMe />
    </RootContainer>
  );
}

export default App;

const AlertBannerContainer = styled.div`
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0px;
  background-color: rgba(0, 0, 0, 0.3);
  border-bottom: 6px solid rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(50px);
  width: 100%;
  transform: ${({ isCollapsed }) => isCollapsed ? 'translateY(-100%)' : 'translateY(0%)'};
  transition: .3s;

  strong {
    font-weight: bold;
  }

  .message {
    padding: 2rem 1rem;
    font-size: 1.6rem;
    color: white;
    line-height: 2.3rem;
    text-align: center;
  }

  .collapser {
    cursor: pointer;
    position: absolute;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    border-radius: 50%;
    color: white;
    font-size: 1.7rem;
    background-color: rgba(0, 0, 0, 0.8);
    bottom: ${({ isCollapsed }) => isCollapsed ? '-50px' : '-21px'};
    transition: .3s;
    svg {
      transform: ${({ isCollapsed }) => isCollapsed ? 'translateX(1px) translateY(0px) rotate(0deg)' : 'translateX(1px) translateY(-1px) rotate(-180deg)'};
      transition: .3s;
    }
  }
`
const AlertBanner = () => {

  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <AlertBannerContainer isCollapsed={isCollapsed}>
      <div className='message'>
        <span role='img' aria-label='warning'>⚠️</span>
        This website was made in <u>2018</u> and is highly <strong>outdated</strong> (code, content, design) !
        <span role='img' aria-label='warning'>⚠️</span>
      </div>
      <div className='collapser' onClick={() => setIsCollapsed((prevCollapseState) => !(prevCollapseState))}>
        <FiChevronDown />
      </div>
    </AlertBannerContainer>
  )
}
