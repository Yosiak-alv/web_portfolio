import { useState,useEffect } from 'react';

import { Container,Row ,Col} from "react-bootstrap";
import { Github } from 'react-bootstrap-icons';
import HeaderBannerImg from '../assets/img/star.png';

// animataciones y track el scroll para mas animaciones
import TrackVisibility from 'react-on-screen';
import 'animate.css';


export const Banner = () => {
    // ----- Change text Effect ------
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const toRotate = [ "Web Developer", "On track to becoming a Full-Stack Developer" ];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
          tick(); 
        }, delta);
    
        return () => { clearInterval(ticker) };
    }, [text]);
    
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
          
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setDelta(500);
        } 
    }
   
    return (
        <section className="banner" id="information">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7} >
                        <TrackVisibility>    
                            {({isVisible}) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Hi I'm Josias </span>
                                    <h1><span className="wrap">{text}</span></h1>
                                    <p>  
                                        Computer enthusiast,technology and programming with the main objective of starting my career as a 
                                        Backend Developer, with the desire to apply my acquired knowledge and, over time, 
                                        evolve towards a Full Stack Developer profile.
                                    </p> 
                                    <a href="https://github.com/Yosiak-alv" target='_blank' className='text-decoration-none' rel='noopener noreferrer'><span>See my Projects <Github size={25} /></span></a>
                                    
                                </div>    
                            }  
                        </TrackVisibility>
                    </Col>
                    <Col  xs={12} md={6} xl={5} >
                        <img src={HeaderBannerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}