import React from 'react'
import styled from 'styled-components'

const ContactContainer = styled.div`
    width : 65%;
    padding-bottom: 12.500em;
    margin : auto;
    text-align: center;
    white-space: pre-line;
    color : white;
    font-size : 18px;
    font-weight: 300;
    letter-spacing: 1px;

  div {
    padding: 2.5em 0 2em 0;
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: white;
    font-size: 15px;
    padding : 0px 10px;
    transition: .5s;
    transform: translateY(5px);
    outline: 0;

    :focus {
      text-decoration: none;
      outline: 0;
    }

    :hover {
      transform: translateY(0px);
    }

    :first-child:after {
      content: "Github";
      padding-top: .5em;
      display: block;
      opacity: 0;
      transform: translateY(-10px);
      transition: .4s;
    }

    :hover:first-child:after {
      transform: translateY(0px);
      opacity: .9;
    }

    :nth-child(2):after {
      content: "LinkedIn";
      padding-top: .5em;
      display: block;
      opacity: 0;
      transform: translateY(-10px);
      transition: .4s;
    }

    :hover:nth-child(3):after {
      transform: translateY(0px);
      opacity: .9;
    }

    :nth-child(3):after {
      content: "Facebook";
      padding-top: .5em;
      display: block;
      opacity: 0;
      transform: translateY(-10px);
      transition: .4s;
    }

    :hover:nth-child(2):after {
      transform: translateY(0px);
      opacity: .9;
    }

    :last-child {
      opacity: 0;
      transition: .4s;
      :hover {
        opacity: 1;
      }
    }

    :last-child:after {
      content: "🤔";
      padding-top: .5em;
      display: block;
      opacity: 0;
      transform: translateY(-10px);
      transition: .4s;
    }

    :hover:last-child:after {
      transform: translateY(0px);
      opacity: .9;
    }

    svg {
      border-radius: 5px;
    }
  }

  span:last-child {
    padding-left: 2.5em;
  }

  .mail {
    display: inline-block;
    border-radius : 40px;
    background-color : rgba(255,255,255,0.15);
    padding : 1em 1em .4em 1em;
    font-size : 23px;
    cursor: pointer;
    transition: background-color  .3s .2s;

    :active {
      background-color: rgba(255,255,255,0.3);
      transition: background-color 0s;
    }

    :after {
      content: "Click to copy";
      display: block;
      font-size: 14px;
      opacity: 0;
      transition: all 0.4s;
    }

    :hover:after {
        opacity: 1;
        transform: translateY(5px);
    }
  }

  @media screen and (max-width: 45em) {
      padding-bottom: 150px;

      span:last-child {
        padding-left: 0em;
      }

      a {
        padding: 0px;
        :last-child {
          display:none;
        }
      }
  }
`

const Contact = () => {

  const copyClick= color => {
    const textField = document.createElement("textarea");
    textField.innerText = color;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  return (
    <ContactContainer>
      <div>Feel free to send me an email if you want to discuss about a project or ask any questions.</div>

      <span className="mail" onClick={() => copyClick("contact@hedik.fr")}>contact@hedik.fr</span>

      <div>Or, you can find me here :</div>

      <span>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Slowl">
          <svg width="28px" height="28px" aria-labelledby="simpleicons-github-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title id="simpleicons-github-icon">GitHub</title><path fill="#FFFFFF" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
        </a>

        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/hedik/">
          <svg width="28px" height="28px" aria-labelledby="simpleicons-linkedin-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title id="simpleicons-linkedin-icon">LinkedIn</title><path fill="#FFFFFF" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>

        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/quest.ce.que.tu.fais.la">
          <svg width="28px" height="28px" aria-labelledby="simpleicons-facebook-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title id="simpleicons-facebook-icon">Facebook</title><path fill="#FFFFFF" d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"/></svg>
        </a>

        <a target="_blank" rel="noopener noreferrer" href="https://steamcommunity.com/id/yesnoyesnoyes/">
          <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24"><path fill="white" d="M24 12c0 6.627-5.373 12-12 12-5.782 0-10.608-4.091-11.744-9.537l4.764 2.003c.285 1.441 1.56 2.547 3.115 2.534 1.723-.017 3.105-1.414 3.116-3.129l.007-.003 3.602-2.684c2.304.024 4.14-1.833 4.14-4.091 0-2.26-1.834-4.093-4.093-4.093-2.234 0-4.048 1.791-4.09 4.015l-2.64 3.693c-.668-.014-1.269.169-1.791.51l-6.294-2.646c.708-5.953 5.765-10.572 11.908-10.572 6.627 0 12 5.373 12 12zm-16.577 5.477l-1.544-.649c.38.858 1.236 1.461 2.249 1.457 1.346-.012 2.422-1.11 2.41-2.455-.012-1.329-1.104-2.41-2.432-2.41-.287.001-.57.05-.86.16l1.542.648c.898.378 1.319 1.411.941 2.308-.376.896-1.409 1.318-2.306.941zm7.484-5.602c-1.533 0-2.781-1.249-2.781-2.782 0-1.534 1.248-2.782 2.781-2.782 1.534 0 2.781 1.248 2.781 2.782 0 1.533-1.247 2.782-2.781 2.782zm0-.682c1.159 0 2.1-.942 2.1-2.101 0-1.158-.94-2.102-2.1-2.102s-2.102.943-2.102 2.102c.001 1.159.943 2.101 2.102 2.101z"/></svg>
        </a>
      </span>
    </ContactContainer>
  )
}

export default Contact
