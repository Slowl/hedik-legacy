import React from 'react';
import styled from 'styled-components'
import Home from './pages/Home'

const RootContainer = styled.div`
  width: 100%;
  background: rgb(27,12,7);
  background: linear-gradient(159deg, rgba(22, 9, 5, 1) 24%, rgba(46,1,0,1) 52%, rgba(121,0,0,1) 97%);
`

class App extends React.Component {
  render() {
    return (
      <RootContainer>
        <Home />
      </RootContainer>
    );
  }
}

export default App;
