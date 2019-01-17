import React from 'react'
import styled from 'styled-components'
import uglyshit from '../assets/me.jpg'
import Parallax from 'parallax-js'

const IntroContainer = styled.div`
  width: 100%;
  height: 100vh;
  color: #790000;
`

const ProfilePic = styled.div`
  width: 13%;
  margin: auto;
  padding-top: 4%;
  opacity: 0;

  animation : profile 1s ease .4s forwards;

  @keyframes profile {
    100% { padding: 6%; opacity: 1;}
  }

  img {
    width: 100%;
    border-radius: 200px;
  }
`

class Intro extends React.Component {

  componentDidMount() {
    this.parallax = new Parallax(this.target, {
      invertX: false,
      invertY: false,
      frictionX: 0.075,
      frictionY: 0.075
    })
  }

  componentWillUnmount() {
    this.parallax.disable()
  }

  render () {
    return (
      <IntroContainer ref={el => this.target = el}>
        <ProfilePic data-depth="0.15">
          <img src={uglyshit} />
        </ProfilePic>
      </IntroContainer>
    )
  }

}

export default Intro
