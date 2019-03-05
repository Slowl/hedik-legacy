import React from "react"
import styled from "styled-components"
import { useEffect } from 'react';
import AOS from "aos"
import '../assets/css/aos.css'

import BlockProject from './BlockProject'

import bsmkPic from "../assets/img/bsmk.jpg"
import linkfluPic from "../assets/img/linkfluence.jpg"

const PortfolioContainer = styled.div`
  overflow:hidden; height:100%;
  margin-bottom : 50px;
`

const Portfolio = () => {
  useEffect( () => {
    AOS.init({
            offset: 300,
            duration: 500,
            easing: 'ease',
            delay: 0,
    });
  })

  return (
    <PortfolioContainer>
      <BlockProject
        projectName="Bsmk Photography"
        projectNumber="a"
        direction="right"
        imgPath={bsmkPic}
        path="bsmk"
      />
      <BlockProject
        projectName="Linkfluence Styleguide"
        projectNumber="z"
        direction="left"
        imgPath={linkfluPic}
        path="linkfluence"
        reversed
      />
    </PortfolioContainer>

  )
}

export default Portfolio
