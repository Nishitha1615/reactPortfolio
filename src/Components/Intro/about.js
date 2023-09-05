import React from "react";
import Type from './Type'
import resume from "../../assets/Nishitham_Resume.pdf"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
// import DescriptionIcon from "@material-ui/icons/Description";
// import PublicIcon from "@material-ui/icons/Public";
import Skill from "../Skills/Skill.js";
import  Introduction  from "./Introduction";
import Fade from 'react-reveal/Fade';
import './about.css'
const About = () => {
  return (
    <>
    <Fade left duration={1600}>
      <div data-aos="fade-right" className="abouthome center" id="home">
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am <span className="about__name">Nishitha M</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          Passionate and Dedicated Full Stack Web Developer hands-on Experience in
          Personal Project. Attired with a variety of tools & technologies and keen to
          learn new one.
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/Nishitha1615"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:nishitham0@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+918660805742"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="www.linkedin.com/in/nishitha-mohan"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>

        <a href={resume} download="Resume">
          <button className="btnResume">Resume</button>
        </a>
      </div>
      </Fade>
      <Introduction />
      <section id="#skills">
        <Skill/>
      </section>
    </>
    
  )
}

export default About
