import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState,useEffect } from 'react';

import linkedinIcon from '../assets/img/linkedin.svg';
import instaIcon from '../assets/img/insta.svg';
import githubIcon from '../assets/img/github.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('information');
    const [scrolled,setScrolled] = useState(false);

    useEffect(()=>{
        const onScroll = () =>{
            ((window.scrollY > 50) ? setScrolled(true): setScrolled(false));
        }

        window.addEventListener("scroll",onScroll);

        return () => window.removeEventListener("scroll",onScroll);
    }, []);

    const onUpdatedActiveLink =(linkName) =>{
        setActiveLink(linkName);
    }
    return (
        <Navbar expand="lg" className={ scrolled ? 'scrolled': '' }>
            <Container> 
                <Navbar.Brand href="#information" >
                    {/* <img src={logo} alt='Logo'/> */}
                    <span className='text-white h1'>JOSIAS</span>
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#information" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdatedActiveLink('information')}>Information</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdatedActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#education" className={activeLink === 'education' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdatedActiveLink('education')}>Education</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href="https://www.linkedin.com/in/josías-alvarenga-314920238" target='_blank' rel='noopener noreferrer'><img src={linkedinIcon} alt="Icon1"/></a>
                            <a href="https://github.com/Yosiak-alv" target='_blank' rel='noopener noreferrer'><img src={githubIcon} alt="Icon3"/></a>
                            <a href="https://www.instagram.com/josias_rom/" target='_blank' rel='noopener noreferrer'><img src={instaIcon} alt="Icon4"/></a>
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}