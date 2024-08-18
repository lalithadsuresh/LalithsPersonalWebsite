import React from 'react';
import { Container } from 'react-bootstrap';

export const AlgoArt = () => {

  return (
    <Container>
      <p>
        AlgoArt is a platform designed to help computer scientists and artists
        create Algorithmically Generated Art. During the summer of 2024 as a research
        assistant at Swarthmore College, I decided to create my own drawing algorithm that is 
        currently live on the platform. The Spiral Algorithm generated a dataset of over 400
        images and has received over 1770 reviews. The algorithm is drawn using 
        Javascript and the Canvas HTML5 API. 
        
        Tech Stack: Node.js, Javascript, Canvas HTML5 API
        
      </p>

      <img 
        src={require('../assets/img/header-img.svg').default} 
        alt="Header Image" 
        style={{ width: '100%', height: 'auto' }} 
      />
    </Container>
  );
};