import React from 'react'
import styled from 'styled-components'
import { Link } from "@reach/router"

const BlockContainer = styled.div`
  .right {
    float : right ;
    margin : 2.5% 10% 2.5% 10%
  }

  .work {
    border-radius : 20px;
    transition : .5s;
    box-shadow: 0 0 10px rgba(0,0,0,0.7);
    background-color: white;

    background-image: url("");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;

    :hover {
      transform:scale(1.01);
      box-shadow: 0 0 30px rgba(0,0,0,0.7);
    }
  }
`

const BlockRight = ({projectName, projectNumber, path, imgPath}) => {

  return (
    <BlockContainer className="aos-item" data-aos='fade-left' data-aos-anchor={`.${projectNumber}`}>
      <Link to={path}>
        <div className={`work right ${projectNumber}`}  style={{ backgroundImage: `url(${imgPath})` }} >
          <div className="over">
            <span className="view-project"> {projectName} </span>
          </div>
        </div>
      </Link>
    </BlockContainer>
  )
}

export default BlockRight
