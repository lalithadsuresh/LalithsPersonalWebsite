import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import { JournalLove } from './JournalLove';  
import { AlgoArt } from './AlgoArt';  
import { Quest } from './Quest';  
import { BuddyMap } from './BuddyMap';  
import { AlbumWallGenerator } from './AlbumWall';  
import JournalLove2 from '../assets/img/journal-love.png';
import bannerBackground from '../assets/img/bannerbackground.png';
import SpiralAlg from '../assets/img/alg-COVER.gif';
import BuddyMap2 from '../assets/img/buddymap.png';
import Quest2 from '../assets/img/quest.png';
import AlbumWallImg from '../assets/img/album2.png'; 

export const Projects = () => {
  const projects = [
    {
      title: 'Album Wall Generator',
      description: 'Design and Development',
      imgUrl: AlbumWallImg,
      category: 'second', 
      modalContent: <AlbumWallGenerator />
    },
    {
      title: 'Journal Love',
      description: 'Design and Development',
      imgUrl: JournalLove2,
      category: 'second', 
      modalContent: <JournalLove />  
    },
    {
      title: 'Spiral Algorithm - AlgoArt Platform',
      description: 'Design and Development',
      imgUrl: SpiralAlg,
      category: 'second', 
      modalContent: <AlgoArt />  
    },
    {
      title: 'BuddyMap',
      description: 'Design and Development',
      imgUrl: BuddyMap2,
      category: 'second', 
      modalContent: <BuddyMap />
    },
    {
      title: 'QUEST',
      description: 'Design',
      imgUrl: Quest2,
      category: 'third', 
      modalContent: <Quest />
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <Tab.Container className="containertab" id="project-tabs" defaultActiveKey="first">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link className="navchoices" eventKey="first">All Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="navchoices" eventKey="second">Development</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="navchoices" eventKey="third">Design</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
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
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects
                      .filter(project => project.category === 'second')
                      .map((project, index) => (
                        <ProjectCard
                          key={index}
                          title={project.title}
                          description={project.description}
                          imgUrl={project.imgUrl}
                          modalContent={project.modalContent}
                        />
                      ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {projects
                      .filter(project => project.category === 'third')
                      .map((project, index) => (
                        <ProjectCard
                          key={index}
                          title={project.title}
                          description={project.description}
                          imgUrl={project.imgUrl}
                          modalContent={project.modalContent}
                        />
                      ))}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
