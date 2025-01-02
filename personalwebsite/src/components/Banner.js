import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Cursor } from "react-simple-typewriter";
import lala1 from "../assets/img/lala1.svg";
import lala2 from "../assets/img/lala2.svg";
import lala3 from "../assets/img/lala3.svg";
import lala4 from "../assets/img/lala4.svg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["I am a Full Stack Developer, Product Designer, and Artist"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

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
      setDelta((prevDelta) => prevDelta / 2);
    }
  };

  // Define the characters array as a constant
  const characters = [lala1, lala2, lala3, lala4];

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Hi! My name is Lalith.</span>
            <h1>
              {text}
              <span className="cursor-style-wrapper">
                <Cursor cursorStyle="|" />
              </span>
              <span className="wrap"></span>
              <div className="characters-container" style={{ marginTop: "60px" }}>
                {characters.map((image, index) => (
                  <div
                    key={index}
                    className="character"
                    style={{
                      backgroundImage: `url(${image})`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      width: "400px",
                      height: "400px",
                      animationDelay: `${index * 10}s`, 
                      animation: "fadeIn 1s ease-in-out forwards", 
                    }}
                  ></div>
                ))}
              </div>
            </h1>
          </Col>
          <Col xs={12} md={6} xl={5}></Col>
        </Row>
      </Container>
    </section>
  );
};
