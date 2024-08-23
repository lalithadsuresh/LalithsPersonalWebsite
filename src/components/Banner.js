import {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import { useTypewriter, Cursor } from 'react-simple-typewriter'




export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["I am a Full Stack Developer, Product Designer, and Artist"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(200 - Math.random() * 100);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { 
            clearInterval(ticker);
        };
    }, [text]); 

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

    }



    return (

        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs = {12} md={6} xl={7}>
                        <span className="tagline" >
                            Hi! My name is Lalith. 
                            
                        </span>
                        <span className="pronounciation">
                            (luh-leeth)
                        </span>
                        <div className="content-container">
                        <h1>{text} 
                        <span className="cursor-style-wrapper">
                                <Cursor cursorStyle="|" />
                                </span>
                             <span className = "wrap"></span>
                             <div className="characters-container">
                                <div className="character character1"></div>
                                <div className="character character2"></div>
                                <div className="character character3"></div>
                                <div className="character character4"></div>
                            </div>  
                        </h1>
                        </div>

                        
                    </Col>
                    <Col xs={12} md={6} xl={5}>
    
                    </Col>

                </Row>
            </Container>
        </section>
    );
};