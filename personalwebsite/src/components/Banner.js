import {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";




export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Software Developer", "UI/UX Designer"]
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);  // Place the delay value correctly here
    
        return () => { 
            clearInterval(ticker);
        };    
    }, [text]);  // Add the dependency array correctly here

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting 
            ? fullText.substring(0, fullText.length - 1) 
            : fullText.substring(0, fullText.length + 1);

        
        setText(updatedText);
        if (isDeleting) {
            setDelta(prevDelta => prevDelta/2);
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }
        else if (isDeleting && updatedText === '') {
            setIsDeleting(true);
            setLoopNum(loopNum+1);
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
                        <h1>{'I am a Software Developer, UI/UX Designer, and Artist'}<span className = "wrap"></span></h1>
                        <p> {text} </p>
                        <button onClick={() => console.log('connect')}> Let's connect <ArrowRightCircle size = {25}></ArrowRightCircle> </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" className="small-header-img" />
                    </Col>

                </Row>
            </Container>
        </section>
    );
};