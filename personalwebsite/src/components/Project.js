import { Row, Col, Container, Tab, Nav } from 'react-bootstrap'
import { ProjectCard } from './ProjectCard';
import colorSharp2 from "../assets/img/color-sharp2.png";
import bannerBackground from "../assets/img/bannerbackground.png"; // Importing image

export const Projects = () => {

    const projects = [
        {
            title: "Journal Love",
            description: "Design and Dev",
            imgUrl: bannerBackground, 
            category: "first"
        },
        {
            title: "Spiral Algorithm - AlgoArt Platform",
            description: "Design and Dev",
            imgUrl: bannerBackground,
            category: "first"
        },
        {
            title: "BuddyMap",
            description: "Design and Dev",
            imgUrl: bannerBackground,
            category: "first"
        },
        {
            title: "BLIND",
            description: "Design and Dev",
            imgUrl: bannerBackground,
            category: "second"
        },
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
                                    <Nav.Link eventKey="second"> Development</Nav.Link>
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
                                                {...project}
                                            />
                                        ))}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {projects
                                            .filter(project => project.category === "first")
                                            .map((project, index) => (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                            ))
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                {projects
                                            .filter(project => project.category === "second")
                                            .map((project, index) => (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                            ))
                                        }
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="Background" />
        </section>
    );
}