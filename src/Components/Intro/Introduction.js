import React from 'react'
import "./Introduction.css";
import Fade from 'react-reveal/Fade';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import profilePic from "../../assets/profile_pic.jpeg";
const Introduction = () => {
  return (
    <>
      <Fade left duration={1600}>
        <section id="about">
          <div className="section" data-aos="fade-right">
            <h2 className="section__title">
              About <span className="different">Me</span>
            </h2>
            <div className={"introduction "}>
              <div className="introduction_logocontainer">
                <img src={profilePic} alt="Images" />
              </div>
              <div className="introduction_datacontainer">
                <h4>
                  Hi Everyone, I am {" "}
                  <span className="different">Nishitha M </span> and from{" "}
                  <span className="different">
                    {" "}
                    Bangalore, Karnataka (India)
                  </span>
                  . I have completed my graduation in BTech (Information Science and Technology)
                  from{" "}
                  <span className="different">
                    Presidency University, Bangalore
                  </span>
                  . Later I have joined full stack web development course at{" "}
                  <span className="different">GUVI</span> a type of IITM Certification course.
                </h4>
                <h4>Terms that can describe me apart form learning :</h4>
                <h4 className="different">
                  <span className="icons">
                    <ExitToAppIcon />
                  </span>
                  Hard Working{" "}
                </h4>
                <h4 className="different">
                  <span className="icons">
                    <ExitToAppIcon />
                  </span>
                  Dedication{" "}
                </h4>
                <h4 className="different">
                  <span className="icons">
                    <ExitToAppIcon />
                  </span>
                  Problem Solving{" "}
                </h4>
                <h4 className="different">
                  <span className="icons">
                    <ExitToAppIcon />
                  </span>
                  Deciplined{" "}
                </h4>
              </div>
            </div>
          </div>
        </section>
      </Fade>
    </>
  )
}

export default Introduction