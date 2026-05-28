import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import { AlgoArt } from './AlgoArt';  
import { AlbumWallGenerator } from './AlbumWall';  
import SpiralAlg from '../assets/img/alg-COVER.gif';
import AlbumWallImg from '../assets/img/album2.png'; 

export const Projects = () => {
  const projects = [
    {
      title: 'Album Wall Generator',
      description: 'Design and Development',
      imgUrl: AlbumWallImg,
      modalContent: <AlbumWallGenerator />
    },
    {
      title: 'Spiral Algorithm - AlgoArt Platform',
      description: 'Design and Development',
      imgUrl: SpiralAlg,
      modalContent: <AlgoArt />  
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <Row>
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  imgUrl={project.imgUrl}
                  modalContent={project.modalContent}
                />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
