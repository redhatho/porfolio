import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import myCv from '../assets/cv.pdf';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(500 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Web", "JavaScript", "React"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome/Bienvenue !</span>
                                    <h1>{`Bonjour ! Je m'appelle Redha ; Je suis D??veloppeur`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web", "JavaScript", "React" ]'><span className="wrap">{text}</span></span></h1>
                                    <p>J'ai d??couvert le monde de la programmation par des amis, mais ce n'est que quelques ann??es plus tard que j'ai d??cid?? de me plonger dedans, d'explorer et finalement d'apprendre. Je suis un jeune d??veloppeur de 29 ans, et je me suis form?? chez OpenClassrooms o?? j'ai pu obtenir mon dipl??me de D??veloppeur Web. Je me sp??cialise surtout sur du JavaScript et du React, et j'ai appris ?? me servir de Node et des bases de donn??es comme MongoDB et MySQL. Je suis assez curieux, ce qui m'am??ne souvent ?? vouloir d??couvrir des choses diff??rentes, voire ?? toucher un peu ?? tout.</p>
                                    <a href={myCv} download><button className="second-download" onClick={() => console.log('connect')}>T??l??charger mon CV<ArrowRightCircle size={25} /></button></a>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={headerImg} alt="Header Img" />
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
