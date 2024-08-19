import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import { JournalLove } from './JournalLove';  
import { AlgoArt } from './AlgoArt';  
import { Quest } from './Quest';  
import { BuddyMap } from './BuddyMap';  
import JournalLove2 from '../assets/img/journal-love.png';
import bannerBackground from '../assets/img/bannerbackground.png';
import SpiralAlg from '../assets/img/algo-art.png';
import BuddyMap2 from '../assets/img/buddymap.png';
import Quest2 from '../assets/img/quest.png';





export const Projects = () => {

  <img 
        src={JournalLove2}  
        style={{ width: '1972px', height: '1229px' }} 
        alt="Journal Love" 
      />

    
  const projects = [
    {
      title: 'Journal Love',
      description: 'Design and Dev',
      imgUrl: JournalLove2,
      category: 'second',  // Category for "Development"
      modalContent: <JournalLove />  
    },
    {
      title: 'Spiral Algorithm - AlgoArt Platform',
      description: 'Design and Dev',
      imgUrl: SpiralAlg,
      category: 'second',  // Category for "Development"
      modalContent: <AlgoArt />  
    },
    {
        title: 'BuddyMap',
        description: 'Design and Dev',
        imgUrl: BuddyMap2,
        category: 'second',  // Category for "Development"
        modalContent: <BuddyMap />
      },
      {
        title: 'QUEST',
        description: 'Design and Dev',
        imgUrl: Quest2,
        category: 'third',  // Category for "Design"
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
                <Tab.Pane eventKey="second">
                  <Row>
                      {projects
                          .filter(project => project.category === "second")
                          .map((project, index) => (
                              <ProjectCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                imgUrl={project.imgUrl}
                                modalContent={project.modalContent}  
                              />
                          ))
                      }
                  </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
              <Row>
                      {projects
                          .filter(project => project.category === "third")
                          .map((project, index) => (
                              <ProjectCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                imgUrl={project.imgUrl}
                                modalContent={project.modalContent}  
                              />
                          ))
                      }
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