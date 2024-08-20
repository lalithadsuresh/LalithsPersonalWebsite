import React from 'react';
import { Container } from 'react-bootstrap';
import navIcon2 from "../assets/img/nav-icon2.svg";
import linkicon from "../assets/img/linkicon.png";
import algoart from "../assets/img/algo-art.png";

export const AlgoArt = () => {

  return (
    <Container>
      <div className="paragraph-image">
        <img src={algoart} alt="AlgoArt" />
        <p>
          AlgoArt is a platform designed to help computer scientists and artists
          create Algorithmically Generated Art. During the summer of 2024 as a research
          assistant at Swarthmore College, I decided to create my own drawing algorithm that is 
          currently live on the platform. The Spiral Algorithm generated a dataset of over 400
          images and has received over 1770 reviews. The algorithm is drawn using 
          JavaScript and the Canvas HTML5 API.
          <br />
          Tech Stack: Node.js, JavaScript, Canvas HTML5 API
        </p>
      </div>
  

      <div className="social-icon-algo-art">
          <a href="https://github.com/Algorithmically-Generated-Artwork/Drawing-Program">
            <img src={navIcon2}/>
          </a>
        <div className="social-icon-algo-art-2">
          <a href="https://algoart.org/gallery.html?algid=alg12">
            <img src={linkicon}/>
          </a>
          <div className="social-icon-algo-art-3">
          <a href="https://michaelwehar.wordpress.com/2024/08/02/algoart-10-spirals/">
            <img src={linkicon}/>
          </a>

        </div>
        </div>
        </div>
        
    </Container>
  );
};