import React,{useRef} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import emailjs from "emailjs-com";
import Fade from 'react-reveal/Fade';
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsInstagram, BsFillTelephoneFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css'
const Contact = () => {
  const notify = () => toast('✅Message Sent', {
      position: "bottom-left",
      autoClose:  5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      // theme: dark,
      }); 

   const form =useRef();
  function sendEmail(e){
      
     e.preventDefault();
     emailjs.sendForm("service_7tykcpy","template_2kivuss",e.target,"RW7gYanElV1auoOS7").then(res=>{
      console.log(res);
     }).catch(err=>{
      console.log(err);
     });
     e.target.reset();
  }
  return (
    <div id='contact' className='contactpage'>
        <h1 className='contactpagetitle'>Contact Me</h1>
        <span className='contactDesc'>Please fill out the form below to discuss an eork opportunities..</span>
        <form className='contactform' onSubmit={sendEmail} ref={form}>
            <input className='field name'  name='name' type='text' placeholder='your name'/>
            <input className='field email' name="user_email" type='text' placeholder='your email'/>
            <textarea className='field message' name='message' placeholder='your message'></textarea>
            <button onClick={notify} type='submit' value='send' className='submitbtn'>Submit</button>
        </form>

        <Fade left duration={1600}>
        <div className="contactMain">
          <div
            className={"contactcontainer "}
            data-aos="fade-right"
          >
            <a
              href="https://www.linkedin.com/in/nishitha-mohan/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="linkedin" />
            </a>
            <a
              href="https://github.com/Nishitha1615"
              target="_blank"
              rel="noreferrer"
            >
              <VscGithub className="github" />
            </a>
            <a
              href="mailto:nishitham0@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <CgMail className="email" />
            </a>
            <a href="tel:+918660805742" target="_blank" rel="noreferrer">
              <BsFillTelephoneFill className="phone" />
            </a>
          </div>
          <div className="mailNumber" data-aos="fade-right">
            <div>
              <span>
                <CgMail className="email" />
              </span>
              <span>
                <p>nishitham0@gmail.com</p>
              </span>
            </div>
            <div className="iconsCont">
              <span>
                <BsFillTelephoneFill className="phone" />
              </span>
              <span>
                <p>+91 8660805742</p>
              </span>
            </div>
          </div>
        </div>
        </Fade>
    </div>
  )
}

export default Contact