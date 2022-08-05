import { Container, Col, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import skill1 from '../assets/react-icon.svg';
import skill2 from '../assets/javaScript-icon.svg';
import skill3 from '../assets/mySQL-icon.svg';
import skill4 from '../assets/mongoDB-icon.svg';
import skill5 from '../assets/NodeJS-icon.svg';
import colorSharp from '../assets/color-sharp.png';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Compétences</h2>
                            <p>Toutes les compétences que j'ai acquises en réalisant des projets :</p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className="item">
                                    <img src={skill1} alt="React" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={skill2} alt="JavaScript" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={skill3} alt="MySQL" />
                                    <h5>MySQL</h5>
                                </div>
                                <div className="item">
                                    <img src={skill4} alt="MongoDB" />
                                    <h5>MongoDB</h5>
                                </div>
                                <div className="item">
                                    <img src={skill5} alt="NodeJS" />
                                    <h5>NodeJS</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="background" />
        </section>
    )
}