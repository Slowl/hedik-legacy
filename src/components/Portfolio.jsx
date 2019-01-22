import React from "react"
import styled from "styled-components"
import { useEffect } from 'react';
import AOS from "aos"
import '../assets/css/aos.css'

import BlockRight from './BlockRight'
import BlockLeft from './BlockLeft'

import bsmkPic from "../assets/img/bsmk.jpg"
import linkfluPic from "../assets/img/linkfluence.jpg"

const PortfolioContainer = styled.div`
  overflow:hidden; height:100%;
  margin-bottom : 170px;

  a div {
    width : 700px;
    height: 400px;
  }

  .over {
    display : flex;
    align-items: center;
    justify-content: center;
    transition : .4s;
    border-radius : 20px;
  }

  .over:hover {
    visibility: visible;
    background-color : rgba(0,0,0,0.6);
    border-radius : 20px;
  }

  .view-project {
    visibility:hidden;
    color :#cc0000;
    font-weight: 500;
    font-size : 22px;
    letter-spacing: 1px;
    border : 2px solid #cc0000;
    border-radius : 40px;
    padding : 20px;
  }

  .over:hover .view-project {
    visibility: visible;
  }
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
      <BlockLeft
        projectName="View The Project"
        projectNumber="a"
        imgPath={bsmkPic}
        path="#"
      />
      <BlockRight
        projectName="View The Project"
        projectNumber="z"
        imgPath={linkfluPic}
        path="#"
      />
    </PortfolioContainer>

  )
}

export default Portfolio
