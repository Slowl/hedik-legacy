import React from 'react'
import styled from 'styled-components'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ShowcaseContainer = styled.div`
  width: 100%;
  color: white;
  opacity: 0;
  margin-bottom: 4em;

  animation : delayFix 1s ease 1s forwards;

  @keyframes delayFix {
    100% { opacity: 1;}
  }
`

const StyledCarousel = styled(Carousel)`
  width: 80%;
  margin: auto;
  padding: 2em;
  border-radius: 20px;
  -moz-user-select: none; -webkit-user-select: none; -ms-user-select:none; user-select:none;-o-user-select:none;

  @media screen and (max-width: 45em) {
    width: 90%;
    margin: 5em auto;
    padding: 0em;
  }

  div {
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.6);

    img {
      border-radius: 20px;
    }

    .slide {
      background-color: transparent;
      .legend {
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
        letter-spacing: 1px;
        border-radius: 5px;
        width: 50%;
        left: 70%;
        background-color: rgba(121,0,0,.75);
        opacity: 0;
      }
    }

    @media screen and (max-width: 45em) {
      box-shadow: 0 10px 10px rgba(0,0,0,0.3);

      .slide {
        .legend {
          font-size: 11px;
          letter-spacing: 1px;
          background-color: rgba(121,0,0,.3);
        }
      }
    }
  }

  .carousel .control-next.control-arrow, .carousel .control-prev.control-arrow {
    width: 150px;
    background-color: transparent;
    opacity: .2;
    transition: ease .5s;
    :hover {
      background-color: rgba(0,0,0, .1);
      opacity: 1;
    }

    @media screen and (max-width: 45em) {
      opacity: 0;
      :hover {
        opacity: 0;
      }
    }
  }

  .carousel .control-next.control-arrow::before {
    content: "➜";
    font-weight: lighter;
    border-left: 0px solid transparent;
  }

  .carousel .control-prev.control-arrow::before {
    content: "➜";
    transform: rotate(180deg);
    border-right: 0px solid transparent;
  }

  button::-moz-focus-inner {
    border: 0;
  }

  }
`
const Showcase = ({ dataImg }) => {

  return (
    <ShowcaseContainer id="showcase">
      <StyledCarousel
        dynamicHeight
        infiniteLoop
        useKeyboardArrows
        emulateTouch
        showStatus={false}
        showThumbs={false}
      >
        {dataImg.map( (datas, key) => {
          return (
            <div key={key}>
              <img src={datas.src} alt={datas.alt} importance={datas.importance} />
              <p className="legend">{datas.legend}</p>
            </div>
          )
        })}
      </StyledCarousel>
    </ShowcaseContainer>
  )
}

export default Showcase
