import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import { JournalLove } from './JournalLove';  
import { AlgoArt } from './AlgoArt';  
import { Quest } from './Quest';  
import { BuddyMap } from './BuddyMap';  
import bannerBackground from '../assets/img/bannerbackground.png';

export const Projects = () => {
  const projects = [
    {
      title: 'Journal Love',
      description: 'Design and Dev',
      imgUrl: bannerBackground,
      category: 'first',
      modalContent: <JournalLove />  
    },
    {
      title: 'Spiral Algorithm - AlgoArt Platform',
      description: 'Design and Dev',
      imgUrl: bannerBackground,
      category: 'first',
      modalContent: <AlgoArt />  
    },
    {
        title: 'BuddyMap',
        description: 'Design and Dev',
        imgUrl: bannerBackground,
        category: 'first',
        modalContent: <BuddyMap />
      },
      {
        title: 'QUEST',
        description: 'Design and Dev',
        imgUrl: bannerBackground,
        category: 'second',
        modalContent: <Quest />
      },
    // Additional projects...
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>This is my project</p>
            <Tab.Container id="project-tabs" defaultActiveKey="first">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link eventKey="first">All Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Development</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Design</Nav.Link>
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
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
