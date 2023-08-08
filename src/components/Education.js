import { Container,Row ,Col} from "react-bootstrap";
import {EducationCard} from './EducationCard';
import { ArrowRightCircleFill } from 'react-bootstrap-icons';

import courseraLogo from "../assets/img/courseraLogo.png";
import schoolLogo from "../assets/img/univertsity.svg";
import nmlLogo from "../assets/img/nmLogo.jpeg";

import DonBoscoUniversity from "../assets/img/Universidad_don_bosco.jpg"

import TrackVisibility from 'react-on-screen';
import 'animate.css';


export const Education = () => {

    const educations = [
        {
            title: 'Universidad Don Bosco',
            description: '4th Year of Computer Science Engineering | January 2020 - At the moment',
            imgUrl: DonBoscoUniversity,
            alt:'Universidad'
        },
        {
            title: 'Coursera -  University of Michigan',
            description: 'Django for Everybody | 2023',
            imgUrl: courseraLogo,
            alt:'coursera1'
        },
        {
            title: 'Coursera -  University of Michigan',
            description: 'Python for Everybody | 2022',
            imgUrl: courseraLogo,
            alt:'coursera2'
        },
        {
            title: 'Coursera - IBM ',
            description: 'Python for Data Science and AI | 2022',
            imgUrl: courseraLogo,
            alt:'coursera3'
        },
        {
            title: 'Coursera - Vanderbilt University',
            description: 'Java for Android | 2022',
            imgUrl: courseraLogo,
            alt:'coursera4'
        },
        {
            title: 'Colegio Hispano - américa',
            description: 'High School | November 2019',
            imgUrl: schoolLogo,
            alt:'school1'
        },
        {
            title: 'Colegio Hispano - américa',
            description: 'English Diploma | November 2019',
            imgUrl: schoolLogo,
            alt:'school2'
        },
        {
            title: 'New Millennium ',
            description: 'Diploma in Computer Maintenance and Repair. | 2019',
            imgUrl: nmlLogo,
            alt:'insaforp1'
        },
        {
            title: 'New Millennium ',
            description: 'Diploma in Maintenance and Update of cell phones. | 2018',
            imgUrl: nmlLogo,
            alt:'insaforp2'
        },
    ];

    return (
        <section className="education" id="education">
            <Container>
                <Row className="align-items-center">
                    <Col  size={12} md={12} xl={4}>
                        <TrackVisibility>    
                            {({isVisible}) =>
                                <div className={isVisible ? "animate__animated animate__headShake" : ""}>
                                   
                                    <h2 className="mt-3">Education</h2>
                                    
                                    <p>
                                        Passionate about Technology, Programming and Web Development. 
                                        I define myself for being a person with many desire to learn and with
                                        desire to develop all my talents and abilities.<br/>
                                        Proactive, determined and responsible.
                                    </p>
                                   
                                    <div className="link">
                                        <div className="text-center">
                                            <a  href="https://drive.google.com/file/d/1JcUjhAjmeigBP04rnvxgz_OIyQfpRmpA/view?usp=sharing" target='_blank' rel='noopener noreferrer'><span>View Full Résumé <ArrowRightCircleFill size={25} /></span></a>
                                        </div>
                                    </div>
                                    
                                </div>
                            }
                        </TrackVisibility>  
                    </Col>
                    <Col size={12} md={12} xl={8}>
                        <div className="education-bx">
                            <Row>
                            
                                {
                                    educations.map((education, index) => {
                                        return (
                                            <EducationCard
                                                key={index}
                                                {...education}
                                                />
                                        )
                                    })
                                }
                                
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}