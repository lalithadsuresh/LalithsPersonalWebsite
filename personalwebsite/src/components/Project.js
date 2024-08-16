import { Row, Col, Container } from 'react-bootstrap'

export const Projects = () => {

    const projects = [
        {
            title: "Business Startup",
            description: "Design and Dev",
            imgUrl: 0,
        },
        {
            title: "Business Startup",
            description: "Design and Dev",
            imgUrl: 0,
        },
        {
            title: "Business Startup",
            description: "Design and Dev",
            imgUrl: 0,
        },
        {
            title: "Business Startup",
            description: "Design and Dev",
            imgUrl: 0,
        },

    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p> This my project </p>
                    </Col>
                </Row>
            </Container>
        </section>


    )

}