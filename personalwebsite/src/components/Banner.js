import {Container, Row, Col} from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs = {12} md={6} xl={7}>
                        <span classsName="tagline">
                            Welcome to my Portfolio!
                        </span>
                        <h1>{'Hi Am Webdecoded'}<span className = "wrap"> Web Developer</span></h1>
                        <p> Hi cunts </p>
                        <button onClick={() => console.log('connect')}> Let's connect </button>
                    </Col>

                </Row>
            </Container>
        </section>
    );
};