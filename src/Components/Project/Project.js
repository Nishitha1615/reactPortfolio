import React from 'react'
import "./Project.css";
import Fade from 'react-reveal'
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import ToDo from "../../assets/todo.png"
import Mail from "../../assets/mail.png";
import Meal from "../../assets/find the meal.png"
import { IoLogoJavascript } from "react-icons/io";
const Project = () => {
  return (
    <>
      <div id='projectsec' className="section animate__animated ">
        <h2 className="section__title different">Projects</h2>
        <Fade left duration={1600}>
          <div className="allProjects">
            <div className="projects_container" data-aos="fade-right">
              <div className="project">
                <div className="project_videocontainer">
                  <div>
                    <img
                      src={ToDo}
                      alt="Rockstar Games"
                    />
                  </div>
                </div>
                <div className="project_information">
                  <h2>ToDo List</h2>
                  <p>
                    ToDo List is an web-application for keeping track of and organizing
                    to-do lists in different categories
                  </p>
                  <div>
                    <SiHtml5 />
                    <DiCss3 />
                    <FaReact />
                    <SiMui />
                  </div>
                  <div>
                    <a
                      href="https://github.com/Nishitha1615/Make-a-note"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span type="button" className="btns onbt">
                        View Code
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="projects_container" data-aos="fade-right">
              <div className="project">
                <div className="project_videocontainer">
                  <div>
                    <img
                      src={Mail}
                      alt="Sk-Weather-App"
                    />
                  </div>
                </div>
                <div className="project_information">
                  <h2>Mail Clone</h2>
                  <p>
                    Developed a Mail clone Project that replicates the main key features an mail System.Implemented email
                    sending functionality.
                  </p>
                  <div>
                    <FaReact />
                    <DiCss3 />
                    <SiHtml5 />
                    <SiNodedotjs />
                    <SiExpress />
                    <SiMongodb />
                  </div>
                  <div>
                    
                    <a
                      href="https://github.com/Nishitha1615/-Frontend-gmail"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span type="button" className="btns onbt">
                        View Code
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="projects_container" data-aos="fade-right">
              <div className="project">
                <div className="project_videocontainer">
                  <div>
                    <img src={Meal} alt="" />
                  </div>
                </div>
                <div className="project_information">
                  <h2>Find The Meal</h2>
                  <p>
                   Web Application for finding meal and recipe application using an API. Designed an user
interface for generating random meal and giving information about the meal
                  </p>
                  <div>
                  <SiHtml5 />
                  <DiCss3 />
                  <IoLogoJavascript/>
                  </div>
                  <div>
                    
                    <a
                      href="https://github.com/Nishitha1615/mini-project"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span type="button" className="btns onbt">
                        View Code
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="projects_container" data-aos="fade-right">
              <div className="project">
                <div className="project_videocontainer">
                  <div>
                    <img
                      src="https://aem.dropbox.com/cms/content/dam/dropbox/www/en-us/branding/dropbox-logo@2x.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="project_information">
                  <h2>DropBox Clone -Backend</h2>
                  <p>
                    Backend API for a google drive like app built using NodeJS,
                    Express, Mongoose, MongoDB Atlas and AWS S3 for storage. CRUD
                    operations for users, files and folders.
                  </p>
                  <div>
                    <SiNodedotjs />
                    <SiExpress />
                    <SiMongodb />
                  </div>
                  <div>
                    <a
                      href="https://drive-system.herokuapp.com/user/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span type="button" className="btns onbt onbt">
                        URL for the API
                      </span>
                    </a>
                    <a
                      href="https://github.com/imbickydutta/file-system-backend"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span type="button" className="btns onbt">
                        View Code
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div> */}


            {/* <div className="projects_container" data-aos="fade-right">
          <div className="project">
            <div className="project_videocontainer">
              <div>
                <img
                  src="https://i.ibb.co/934WpdD/uniqlo-clone.png"
                  alt="Uniqlo-Clone"
                />
              </div>
            </div>
            <div className="project_information">
              <h2>Uniqlo Clone</h2>
              <p>
                UNIQLO is a clothing apparel company, from Japan. They also
                sell their products in online mode through their website. We
                cloned their website.
              </p>
              <div>
                <SiNodedotjs />
                <SiExpress />
                <SiMongodb />
                <SiHtml5 />
                <DiCss3 />
              </div>
              <div>
                <a
                  href="https://uniqlo-clone.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btns onbt onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Shreyasgkhakal100/uniqlo-backend-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btns onbt">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div> */}

          </div>
        </Fade>
      </div>

    </>
  )
}

export default Project