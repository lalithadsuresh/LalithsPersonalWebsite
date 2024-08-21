import {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";




export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Software Developer", "UI/UX Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { 
            clearInterval(ticker);
        };
    }, [text]); // The dependency array is correct here

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting 
            ? fullText.substring(0, text.length - 1) 
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false); // Set to false to start typing the next word
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }



    return (

        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs = {12} md={6} xl={7}>
                        <span classsName="tagline">
                            Hi! My name is Lalith.
                        </span>
                        <h1>{'I am a Full Stack Developer, Product Designer, and Artist'}<span className = "wrap"></span></h1>
                        <p> {text} </p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
    
                    </Col>

                </Row>
            </Container>
        </section>
    );
};