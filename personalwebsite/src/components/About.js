import { Container, Row, Col } from "react-bootstrap"; 
import personalpicture from "../assets/img/personal-picture.jpg";
import '../App.css';

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
                            Full Stack Developer / Product Designer
                        </p>
                        <p className="about-description">
                            I've always been drawn to storytelling, starting with my passions for writing and acting—creative pursuits I continue to embrace today.
                            But when I discovered technology, it quickly became my favorite medium to connect with people. 
                            I found myself communicating visual poetry in powerful, innovative ways. Whether through React components, API integrations, or unique front-end designs, 
                            I strive to create software that prioritizes user flow to ensure that users feel recognized and connected. 
                        </p>
                        
                        
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};