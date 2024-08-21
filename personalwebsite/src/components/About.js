import { Container, Row, Col } from "react-bootstrap"; 
import personalpicture from "../assets/img/personal-picture.jpg";

export const About = () => {
    return (
        <section className="about-page" id="about">
            <Container>
                <Row>
                    <Col>
                    <div className = "about-section"> 
                        <img src = {personalpicture} />
                        <h1 className="about-title">About</h1>
                        <p className="about-role">
                            Full Stack Developer / UI+UX Designer
                        </p>
                        <p className="about-description">
                            I've always been drawn to storytelling, beginning with writing and acting—both of which I still do.
                            But when I discovered technology, it quickly became my favorite medium to connect with people. 
                            I found myself communicating visual poetry in powerful, innovative ways. Whether it's through dynamic React animations, 
                            engaging API integrations, or unique front-end designs, I love how software can captivate and assist users through
                            user flow. Most of my work is centered on creating software that tells impactful stories with the goal of making everyone feel 
                            recognized and connected through software. 
                        </p>

                        
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};