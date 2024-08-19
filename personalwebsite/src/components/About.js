import { Container, Row, Col } from "react-bootstrap"; 

export const About = () => {
    return (
        <section className="about-page" id="about">
            <Container>
                <Row>
                    <Col>
                        <h1 className="about-title">About</h1>
                        <p className="about-role">
                            Software Developer / UI+UX Designer
                        </p>
                        <p className="about-description">
                            I've always been drawn to storytelling, beginning with writing and acting—both of which I still do.
                            But when I discovered technology, it quickly became my favorite medium to connect with people. 
                            It allows me to communicate in powerful, innovative ways. Whether it's through dynamic React animations, 
                            engaging API integrations, or unique front-end designs, I love how software can captivate and assist users.
                            As a Full Stack Developer, Product Designer, and Artist, I craft interactive applications with purpose.
                        </p>

                        <h1 className="fun-facts-title">Fun Facts</h1>
                        <ul className="fun-facts-list">
                            <li>I play college tennis!</li>
                            <li>I am an actor, writer, and cinematographer.</li>
                            <li>I love Korean food and Boba!</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};