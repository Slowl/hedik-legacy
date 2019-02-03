import React from 'react'
import { useEffect } from 'react';
import ProjectIntro from '../components/ProjectIntro'
import Showcase from '../components/Showcase'
import ProjectNav from '../components/ProjectNav'

const BsmkImg = [
    { src: "https://i.ibb.co/QDxZfCz/homepage.jpg", legend:"Homepage", alt:"homepage", importance:"high" },
    { src: "https://i.ibb.co/9h8Mbwy/gallery.png", legend:"First gallery page with a mix of different categories", alt:"gallery", importance:"low" },
    { src: "https://i.ibb.co/9bbWZDc/menu.png", legend:"Side menu with social medias access", alt:"menu", importance:"low" },
    { src: "https://i.ibb.co/ZgCtXhm/contact.png", legend:"Contact page with a quote chosen by the photographer and links to his social medias", alt:"contact", importance:"low" },
    { src: "https://i.ibb.co/k0S1NHt/insta-switch.png", legend:"Modal to allow the visitor to chose between multiple instagram accounts of the photographer", alt:"instagram modal", importance:"low" },
  ]







const Bsmk = () => {

  useEffect( () => {
    window.setTimeout(() => {
      window.scrollTo(0, 0);
    }, 400);

    document.title = " ~ hedik/bsmk"
    return () => document.title = " ~ hedik/"

  })

  useEffect ( () => {

  })

  return (
    <div>
      <ProjectIntro title="Bsmk Photography" js html css firebase>
        Bsmk, a french independant photographer, came to me with a precise idea of what he wanted.
        <div> Well, a precise idea in term of functionalities, since I had to create the design myself with his consent.</div>
        <div>
          Bsmk wanted a unique website were he could show his work and control the content at anytime, also the loading performance wasn't an
          option (Hi WordPress !) and the mobile version of the website was mandatory.
        </div>

      </ProjectIntro>
      <Showcase dataImg={BsmkImg} />
      <ProjectNav url="http://www.bsmkphoto.com/" />
    </div>
  )
}

export default Bsmk
