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
          assistant at Swarthmore College, I created my own drawing algorithm that is 
          currently live on the platform. The Spiral Algorithm generated a dataset of over 400
          images and has received over 1770 reviews. The algorithm is drawn using 
          JavaScript and the Canvas HTML5 API.
          <br />
          <em> Tech Stack: Node.js, JavaScript, Canvas HTML5 API</em>
        </p>
      </div>
  

      <div className="social-icon-container">
        <a href="https://github.com/Algorithmically-Generated-Artwork/Drawing-Program">
          <img src={navIcon2} className="social-icon-algoart" alt="GitHub Link"/>
        </a>
        <a href="https://algoart.org/gallery.html?algid=alg12">
          <img src={linkicon} className="social-icon-algoart" alt="AlgoArt Gallery"/>
        </a>
        <a href="https://michaelwehar.wordpress.com/2024/08/02/algoart-10-spirals/">
          <img src={linkicon} className="social-icon-algoart" alt="AlgoArt Spirals"/>
        </a>
      </div>

        
    </Container>
  );
};