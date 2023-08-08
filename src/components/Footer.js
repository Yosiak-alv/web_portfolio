import { Container, Row, Col } from "react-bootstrap";

import linkedinIcon from '../assets/img/linkedin.svg';

import instaIcon from '../assets/img/insta.svg';
import githubIcon from '../assets/img/github.svg';
export const Footer = () => {
    return (
        <footer className="footer">
            <Container className="py-5">
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        {/* <img src={logo} alt="Logo" /> */}
                        <span className='text-white h1'>JOSIAS</span>

                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/josías-alvarenga-314920238" target='_blank' rel='noopener noreferrer'><img src={linkedinIcon} alt="Icon1"/></a>
                            <a href="https://github.com/Yosiak-alv" target='_blank' rel='noopener noreferrer'><img src={githubIcon} alt="Icon3"/></a>
                            <a href="https://www.instagram.com/josias_rom/" target='_blank' rel='noopener noreferrer'><img src={instaIcon} alt="Icon4"/></a>
                        </div>
                        <p>Copyright 2023. All Rights Reserved.<br/> @Josias-Alv</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}