import React, {useEffect} from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  color: white;
  background-image: url(https://images.unsplash.com/photo-1507491910083-29fad9a7778e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80);
  background-size:cover;
  background-position: bottom;
  span {
    display: block;
    background-color: rgba(0,0,0, .5);
    width: 100%;
    min-height: calc(100vh - 2.25em);
  }
`

const CatchPhrase = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  padding: 1em 2em 0em 2em;
  text-align: center;
  font-size: 58px;
  letter-spacing: 1px;
  transform: translateY(10px);
  opacity: 0;

  animation: delays .7s ease .5s forwards;

  @keyframes delays {
    100% { transform: translateY(0px); opacity: 1;}
  }

  @media screen and (max-width: 45em) {
    padding: 1em .5em 1em;
    text-align: center;
    font-size: 32px;
    letter-spacing: 1px;
  }
`

const Bullshit = styled.div`
  background-color: rgba(0,0,0,0.1);
  font-weight: 400;
  letter-spacing: 1px;
  line-height: 1.2;
  padding: 1em;
  width: 60%;
  font-size: 19px;
  margin: 2em auto 4em;
  text-align: center;
  transform: translateY(10px);
  opacity: 0;
  animation: delays .7s ease .57s forwards;

  @keyframes delays {
    100% { transform: translateY(0px); opacity: 1;}
  }

  @media screen and (max-width: 45em) {
    letter-spacing: 1px;
    line-height: 1.2;
    padding: 1em;
    width: 90%;
    font-size: 17px;
    margin: 2em auto 2em;
  }
`

const Support = styled.a`
  display: block;
  background-color: #3abaf7;
  color: white;
  text-decoration: none;
  padding: 1.5em 2.5em;
  width: 15%;
  text-align: center;
  margin: auto;
  font-size: 22px;
  letter-spacing: 2px;
  border-radius: 60px;
  border: 3px solid #3abaf7;
  transition: .4s;
  transform: translateY(-20px);
  opacity: 0;
  animation: delays .7s ease .6s forwards;

  @keyframes delays {
    100% { transform: translateY(0px); opacity: 1;}
  }

  :hover {
    background-color: rgba(0,0,0,.3);
    border: 3px solid #3abaf7;
  }

  :focus {
    outline: none;
  }

  @media screen and (max-width: 45em) {
    padding: 1em 0em;
    width: 90%;
    text-align: center;
    font-size: 18px;
    letter-spacing: 2px;
  }
`

const IntroWords = styled.div`
  padding : 0%;
  text-align: center;
  font-size : 48px;
  font-weight: 200;
  letter-spacing: 3px;
  word-spacing: 10px;
  color: white;

:after {
  display : block;
  content:'';
  width : 0px;
  height: 2px;
  margin : 2% auto;
  background-color : white;
  animation: yes .5s ease .6s forwards;

  @keyframes yes {
    100% { width: 150px}
  }
}
`

const Footer = styled.div`
  background-color: #0c0c0e;
  padding: 1em;
  display: flex;
  justify-content: center;
  font-size: 12px;

  div {
    margin: 0em 1em;
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
  }
`


const NotreDam = () => {

  useEffect( () => {
    document.title = " ~ hedik/Reconstruisez moi"
    return () => document.title = " ~ hedik/"
  })

  return (
      <Container>
        <span>
          <CatchPhrase>
            Faites un don pour reconstruire Notre-Dame de ma Personne.
          </CatchPhrase>
          <IntroWords id="projects"></IntroWords>
          <Bullshit>
            A la suite de l’incendie ayant ravagé une partie de Notre-Dame de Paris,
            les actions se sont multipliées pour récolter des dons en vue de sa reconstruction.
            Comme le président de la République s’y est engagé, Notre-Dame sera rebâtie en intégralité.
            Mais cette reconstruction a un coût. C’est pourquoi nous avons besoin de la générosité de toutes et tous.
          </Bullshit>
          <Support href="https://www.paypal.me/hedikch" target="_blank">
            Repentez vous içi
          </Support>
        </span>
        <Footer>
          <div onClick={() => alert('"Notre-Dame" est un surnom donné à Hedi Kochad, être vivant ravagé par le chômage.')}> Conditions Générales</div>
          -
          <div onClick={() => alert("T'en sauras pas plus.")}> En savoir plus</div>
        </Footer>
      </Container>
  )
}

export default NotreDam
