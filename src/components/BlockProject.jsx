import React from 'react'
import styled from 'styled-components'
import { Link } from "@reach/router";

const BlockContainer = styled.div`
  display: flex;
  justify-content:space-between;
  flex-direction: ${props => props.reversed ? "row-reverse" : "row"} ;
  width: 90%;
  margin: 5em auto;

  .image {
    width : 700px;
    height: 400px;
    border-radius : 20px;
    transition : .5s;
    box-shadow: 0 0 10px rgba(0,0,0,0.7);

    background-image: url("");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media screen and (max-width: 65em) { /*tablette*/
    .image {
      width : 100%;
      height: 300px;
    }
  }

  @media screen and (max-width: 45em) {
    flex-direction: column;
    margin: 2em auto;

    .image {
      width : 100%;
      height: 200px;
    }
  }
`

const Intro = styled.div`
  width: 40%;
  margin: auto;
  padding: 3em 0;
  color: white;
  border-left: ${props => props.reversed ? "0px solid transparent" : "1px solid rgba(255,255,255, 0.2)"};
  border-right: ${props => props.reversed ? "1px solid rgba(255,255,255, 0.2)" : "0px solid transparent" };

  .title {
    display: block;
    text-decoration: none;
    color: white;
    text-align:center;
    font-size: 38px;
    letter-spacing: 2px;
    font-weight: 200;
    transition: .4s;
}

  .little-nav {
    display: flex;
    justify-content: center;
    padding: 2em;

    a {
      text-decoration: none;
      text-align: center;
      color: white;
      outline: 0;
      padding: 1em;
      width: 50%;
      display: block;
      letter-spacing: 1px;
      font-size: 18px;
      font-weight: 300;
      border: 1px solid rgba(255,255,255, .5);
      border-radius: 50px;
      transition: .4s;

      :hover {
        color: #380c11;
        background-color: rgba(255,255,255, .9);
        border-color: #380c11;
      }
    }
  }

  @media screen and (max-width: 65em) { /*tablette*/
    width: 100%;
    margin-top: 2.5em;
    padding: 2em 0;
    border-left: 0px solid transparent;
    border-right: 0px solid transparent;

    .title {
      font-size: 24px;
      letter-spacing: 0px;
      letter-spacing: 2px;
    }
    .little-nav  a {
        width: 80%;
        font-size: 16px;
        font-weight: 300;
    }
  }

  @media screen and (max-width: 45em) {
    border-left: 0px solid transparent;
    border-right: 0px solid transparent;
    border-top: 1px solid rgba(255,255,255, 0.2);
    width: 100%;
    margin-top: 2.5em;
      padding: 2em 0;

    .title {
      font-size: 24px;
      letter-spacing: 0px;
      letter-spacing: 2px;
    }

    .little-nav  a {
        width: 100%;
        font-size: 16px;
        font-weight: 300;
    }
  }
`

const BlockProject = ({projectName, projectNumber, path, imgPath, reversed, direction}) => {

  return (
    <BlockContainer className="aos-item" data-aos={`fade-${direction}`} data-aos-anchor={`.${projectNumber}`} reversed={reversed}>
      <div className={`image ${projectNumber}`} style={{ backgroundImage: `url(${imgPath})` }}></div>
      <Intro reversed={reversed}>
        <div className="title" to={path}>
          {projectName}
        </div>
        <div className="little-nav">
          <Link to={path}> View the project </Link>
        </div>

      </Intro>
    </BlockContainer>
  )
}

export default BlockProject
