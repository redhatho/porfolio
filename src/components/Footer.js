import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/logo.svg";
import navIcon1 from '../assets/nav-icon1.svg';
import navIcon2 from '../assets/test4.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://fr.linkedin.com/in/redha-ngono-stcd42400"><img src={navIcon1} alt="linkedin" /></a>
                            <a href="https://github.com/redhatho"><img src={navIcon2} alt="github" /></a>
                        </div>
                        <p>Copyright 2022. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
