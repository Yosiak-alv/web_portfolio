import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container,Row ,Col} from "react-bootstrap";

import phpIcon from '../assets/img/php.svg';
import laravelIcon from '../assets/img/laravel.svg';
import inertiaIcon from '../assets/img/inertia.svg';
import vuejsIcon from '../assets/img/vue.svg';
import javaIcon from '../assets/img/java.svg';
import csharpIcon from '../assets/img/csharp.svg';
import djangoIcon from '../assets/img/django.svg';
import pythonIcon from '../assets/img/python.svg';
import webDevIcon from '../assets/img/webdev.svg';
import sqlIcon from '../assets/img/sql.svg';

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
        <section className="skills" id="skills">
             <Container className="mb-5">
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>  
                            I have a certain amount of skills throughout my current studies, 
                            which has led me to focus on web development, some of my skills are:
                            </p> 
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                {/* DJANGO, PHP, LARAVEL, PYTHON, JAVA, C#, WEB DEVELOPMENT , VUEJS, Inertiajs ,REACTJS, SQL */}
                                <div className="item">
                                    <img src={phpIcon} alt="Image1" />
                                    <h5>PHP</h5>
                                </div>
                                <div className="item">
                                    <img src={laravelIcon} alt="Image2" />
                                    <h5>Laravel</h5>
                                </div>
                                <div className="item">
                                    <img src={vuejsIcon} alt="Image3" />
                                    <h5>Vue.js</h5>
                                </div>
                                <div className="item">
                                    <img src={inertiaIcon} alt="Image4" />
                                    <h5>Inertia.js</h5>
                                </div>
                                <div className="item">
                                    <img src={csharpIcon} alt="Image5" />
                                    <h5>C#</h5>
                                </div>
                                <div className="item">
                                    <img src={javaIcon} alt="Image6" />
                                    <h5>Java</h5>
                                </div>
                                <div className="item">
                                    <img src={djangoIcon} alt="Image7" />
                                    <h5>Django</h5>
                                </div>
                                <div className="item">
                                    <img src={pythonIcon} alt="Image8" />
                                    <h5>Python</h5>
                                </div>
                               
                                <div className="item">
                                    <img src={sqlIcon} alt="Image9" />
                                    <h5>SQL</h5>
                                </div>
                                <div className="item">
                                    <img src={webDevIcon} alt="Image10" />
                                    <h5>WEB-DEVELOPMENT (HTML,CSS,JAVASCRIPT)</h5>
                                </div>
                            </Carousel> 
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* <img className="background-image-left" alt="background" src={colorSharp} /> */}
        </section>
    );
}