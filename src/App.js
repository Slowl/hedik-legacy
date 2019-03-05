import React from 'react';
import styled from 'styled-components'
import { Router, Location } from "@reach/router"
import posed, { PoseGroup } from 'react-pose';
import DontLookAtMe from './components/DontLookAtMe'
import Home from './pages/Home'
import Bsmk from './pages/Bsmk'
import Linkfluence from './pages/Linkfluence'
import Page404 from './pages/Page404'

const RoutesContainer = posed.div({
  enter: { opacity: 1, delay: 200, beforeChildren: true },
  exit: { opacity: 0 }
});

const RootContainer = styled.div`
  width: 100%;
  background-color: #380c11;
`

class App extends React.Component {

  componentDidMount(){
    document.title = " ~ hedik/"
  }

  render() {
    return (
      <RootContainer>
        <Location>
          {({ location })=> (
            <PoseGroup>
              <RoutesContainer key={location.key}>
                <Router location={location} primary={false}>
                  <Home path="/" />
                  <Bsmk path="bsmk" />
                  <Linkfluence path="linkfluence" />
                  <Page404 default />
                </Router>
              </RoutesContainer>
            </PoseGroup>
          )}
        </Location>
        <DontLookAtMe />
      </RootContainer>
    );
  }
}

export default App;
