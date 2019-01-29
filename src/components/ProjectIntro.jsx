import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import Language from './Language'
import Description from './Description'
import Arrow from './Arrow'

const ProjectContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`

const ProjectIntro = ({ title, js, html, css, firebase, react, webpack, children }) => {

  return (
    <ProjectContainer>
      <Title title={title} />
      <Language js={js} html={html} css={css} firebase={firebase} webpack={webpack} react={react} />
      <Description>
        {children}
      </Description>
      <Arrow selector="showcase" />
    </ProjectContainer>
  )
}

export default ProjectIntro
