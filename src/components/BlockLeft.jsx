import React from 'react'
import styled from 'styled-components'
import { Link } from "@reach/router";

const BlockContainer = styled.div`
  .left {
    float : left;
    margin : 2.5% 10% 2.5% 10%;
  }

  .work {
    border-radius : 20px;
    transition : .5s;
    box-shadow: 0 0 10px rgba(0,0,0,0.7);

    background-image: url("");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    :hover {
      transform:scale(1.01);
      box-shadow: 0 0 30px rgba(0,0,0,0.7);
    }
  }
`

const BlockLeft = ({projectName, projectNumber, path, imgPath}) => {

  return (
    <BlockContainer className="aos-item" data-aos='fade-right' data-aos-anchor={`.${projectNumber}`}>
      <Link to={path}>
        <div className={`work left ${projectNumber}`} style={{ backgroundImage: `url(${imgPath})` }}>
          <div className="over">
            <span className="view-project"> {projectName}</span>
          </div>
        </div>
      </Link>
    </BlockContainer>
  )
}

export default BlockLeft
