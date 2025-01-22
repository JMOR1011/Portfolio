import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Link } from 'react-scroll'; // Ensure 'react-scroll' is installed
import S1BG from '../assets/S1BG.png';
import AINS from '../assets/AINS.png';
import JMOR from '../assets/JMOR.png';
import EMAIL from '../assets/email.svg';
import DOWNLOAD from '../assets/download.svg';
import resumePDF from '../assets/Romero.pdf';
import T1 from '../assets/tech/t1.svg';
import T2 from '../assets/tech/t2.svg';
import T3 from '../assets/tech/t3.svg';
import T4 from '../assets/tech/t4.svg';
import T5 from '../assets/tech/t5.svg';
import T6 from '../assets/tech/t6.svg';
import T7 from '../assets/tech/t7.svg';
import T8 from '../assets/tech/t8.svg';
import T9 from '../assets/tech/t9.svg';
import T10 from '../assets/tech/t10.svg';
import T11 from '../assets/tech/t11.svg';
import T12 from '../assets/tech/t12.svg';
import T13 from '../assets/tech/t13.svg';
import T14 from '../assets/tech/t14.svg';
import T15 from '../assets/tech/t15.svg';
import T16 from '../assets/tech/t16.svg';
import T17 from '../assets/tech/t17.svg';
import T18 from '../assets/tech/t18.svg';
import T19 from '../assets/tech/t19.svg';
import T20 from '../assets/tech/t20.svg';
import T21 from '../assets/tech/t21.svg';
import T22 from '../assets/tech/t22.svg';
import T23 from '../assets/tech/t23.svg';
import P1 from '../assets/proj/p1.png';
import P2 from '../assets/proj/p2.png';
import P3 from '../assets/proj/p3.png';
import P4 from '../assets/proj/p4.png';
import P5 from '../assets/proj/p5.png';
import P6 from '../assets/proj/p6.png';
import P7 from '../assets/proj/p7.png';

import j1 from '../assets/footer/j1.svg';
import j2 from '../assets/footer/j2.svg';
import j3 from '../assets/footer/j3.svg';
import j4 from '../assets/footer/j4.svg';
import j5 from '../assets/footer/j5.svg';

import '../styles/styles.css';


export default function Home() {
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // Adjust based on how much of the section should be visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id); // Update active link based on visible section
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    // Cleanup on component unmount
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);



  // PROJECT PANEL BOX
  const [centeredBox, setCenteredBox] = useState(null);

  const handleBoxClick = (boxIndex) => {
    setCenteredBox(boxIndex);
  };

  const closeCenteredBox = () => {
    setCenteredBox(null);
  };

  const boxImages = [P1, P2, P3, P4, P5, P6, P7];




  //PROJECT PANEL DESCRIPTION
  const projectDetails = [
    { title: "Medicare Plus", description: "An application built using Flutter/Dart, VS Code, Android Studio, Supabase and Figma. <br />  Project includes a web platform for administrators and a separate app for doctors to manage appointments and timetables. <br /> It simplifies procedures with an intuitive user interface, enabling easy navigation and effective administration for both patients, administrators, and healthcare professionals." },
    { title: "Salon Brands", description: "A dynamic e-commerce platform built on WordPress, hosted via Bluehost, offering a seamless online shopping experience for salon beauty products in the USA. <br /> Utilizing WordPress plugins, custom themes, and Elementor, the website is designed to be user-friendly, visually appealing, and optimized for easy product browsing, making it the go-to destination for beauty enthusiasts" },
    { title: "Vontos", description: "Built with Webflow and powered by Firebase Cloud, this professional website allows users to avail subscription-based services for custom website or application development. <br /> The platform features a user-friendly interface for seamless project inquiries, all backed by Firebase for reliable cloud performance and scalability." },
    { title: "Dezu", description: "A solo project built using React.js, showcasing the products of Dezu's waterjet technologies. <br /> The website features 3D visuals implemented with Spline and smooth animations crafted with CSS, creating an engaging and visually dynamic user experience that highlights the brand's innovative solutions." },
    { title: "Shippingcart", description: "Initially built using Webflow and later converted to Wix. <br /> This landing page serves as the entry point for ShippingCart Australia. It connects seamlessly to related projects, including the Warehouse, Portal, ShippingCart Application, and the Balikbayan Box admin site and application, providing a cohesive and efficient user experience across all platforms." },
    { title: "Shippingcart", description: "Developed using Flutter, Dart, Firebase, and cloud server technology, this application streamlines parcel and balikbayan box shipping from other countries.<br /> It allows users to select delivery options based on urgency, with cargo transported by air or sea. The app ensures efficient and reliable shipment tracking, catering to diverse delivery needs." },
    { title: "Caritas Don Bosco School", description: "Website built with React.js and Tailwind CSS, serving as the main landing page for a comprehensive school platform. <br /> This project is interconnected with other applications, including the School Portal, Admin Site, Parent App, Teacher's App, and Student App. These projects utilize a diverse tech stack, such as Flutter/Dart, React.js, React Native, and CMS tools, creating a cohesive and integrated ecosystem for seamless communication and functionality across the platform." }
  ];
  


//PROJECT LINKS
  const projectLinks = [
    "https://play.google.com/store/apps/details?id=com.vontos.medicare_plus",
    "https://salonbrandsusa.com/",
    "https://www.vontos.co/",
    "https://dezu.vercel.app/",
    "https://www.shippingcart.com.au/",
    "https://play.google.com/store/apps/details?id=com.vontos.shipping_cart_au",
    "https://www.cdbs.edu.ph/", 
  ];





  //CONTACT EMAIL SUBMIT
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "86f04ea1-1bd2-459c-aff6-ae1ace93e3bd");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  


  return (
    <div>
      <section id="Profile">
        <div className="section-style">
          <div className="content-style">
            <div className="column-style">
              <h3 className="heading-white small">Hello!</h3>
              <h1 className="heading-white large">
                I'm <b className='heading-white jmor'>John Mark</b>
              </h1>
              <p className="section1-paragraph">
                a Front-End Developer with expertise in web and mobile development, based in the Philippines. <br/> Specializing in creating responsive, user-friendly applications.
              </p>
              <p className="section1-paragraph">
              My expertise lies in crafting seamless UI/UX designs, ensuring intuitive user experiences across devices. I specialize in delivering visually engaging designs and dynamic animations that enhance user interaction, all while optimizing performance for both web and mobile applications.
              </p>
              <div className="button-group">
                <button className="custom-button">MESSAGE ME</button>
                <a className="no-underline" href={resumePDF} download>
                  <button className="custom-button">RESUME</button>
                </a>
              </div>
            </div>
            <div className="column-style">
              <img src={AINS} alt="Profile" className="image-style" />
            </div>
          </div>
          <div className="panel-style">
            <div className="logo-container">
              <img src={JMOR} alt="John Mark" className="logo-image" />
            </div>
            <div className="link-container-style">
              <Link
                to="Profile"
                smooth={true}
                duration={500}
                className={`link-style ${activeLink === 'Profile' ? 'active' : ''}`}
              >
                PROFILE
              </Link>
              <Link
                to="TechStack"
                smooth={true}
                duration={500}
                className={`link-style ${activeLink === 'TechStack' ? 'active' : ''}`}
              >
                TECH STACK
              </Link>
              <Link
                to="Projects"
                smooth={true}
                duration={500}
                className={`link-style ${activeLink === 'Projects' ? 'active' : ''}`}
              >
                PROJECTS
              </Link>
              <Link
                to="Contact"
                smooth={true}
                duration={500}
                className={`link-style ${activeLink === 'Contact' ? 'active' : ''}`}
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </section>







{/* New Section 2*/}
<section id="TechStack" className="section2-style">
        <div className="header-container2">
          <h5 className="heading-with-line2">
            My Tech Stack
            <span className="line2"></span>
          </h5>
          <h1 className="main-header2">Specializing In</h1>
        </div>
        <div className="image-row">
        <img src= {T1} className="tech-icon" />
        <img src= {T2} className="tech-icon" />
        <img src= {T3} className="tech-icon" />
        <img src= {T4} className="tech-icon" />
        <img src= {T5} className="tech-icon" />
        <img src= {T6} className="tech-icon" />
        <img src= {T7} className="tech-icon" />
        </div>

        <div className="image-row">
        <img src= {T8} className="tech-icon" />
        <img src= {T9} className="tech-icon" />
        <img src= {T10} className="tech-icon" />
        <img src= {T11} className="tech-icon" />
        <img src= {T12} className="tech-icon" />
        <img src= {T13} className="tech-icon" />
        <img src= {T14} className="tech-icon" />
        <img src= {T15} className="tech-icon" />
        <img src= {T16} className="tech-icon" />
        </div>

        <div className="image-row">
        
        <img src= {T17} className="tech-icon" />
        <img src= {T18} className="tech-icon" />
        <img src= {T19} className="tech-icon" />
        <img src= {T20} className="tech-icon" />
        <img src= {T21} className="tech-icon" />
        <img src= {T22} className="tech-icon" />
        <img src= {T23} className="tech-icon" />
        </div>
      </section>



 {/* New Section 3 */}
 <section id="Projects" className="section3-style">
        <div className="header-container3">
          <h5 className="heading-with-line3">
            My Projects
            <span className="line3"></span>
          </h5>
          <h1 className="main-header3">Case Studies</h1>
        </div>
  <div className="tech-stack-container">
    <div className="column">
      <div
        className="box"
        style={{ height: '270px' }}
        onClick={() => handleBoxClick(0)}
      >
        <img
          src={P1}
          alt="Box 1"
          style={{ width: '100%', height: '100%', objectFit: 'fill' }}
        />
      </div>
      <div
        className="box"
        style={{ height: '160px' }}
        onClick={() => handleBoxClick(1)}
      >
        <img
          src={P2}
          alt="Box 2"
          style={{ width: '100%', height: '100%', objectFit: 'fill' }}
        />
      </div>
    </div>
    <div className="column">
      <div
        className="box"
        style={{ height: '150px' }}
        onClick={() => handleBoxClick(2)}
      >
        <img
          src={P3}
          alt="Box 3"
          style={{ width: '100%', height: '100%', objectFit: 'fill' }}
        />
      </div>
      <div
        className="box"
        style={{ height: '150px' }}
        onClick={() => handleBoxClick(3)}
      >
        <img
          src={P4}
          alt="Box 4"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>
      <div
        className="box"
        style={{ height: '150px' }}
        onClick={() => handleBoxClick(4)}
      >
        <img
          src={P5}
          alt="Box 5"
          style={{ width: '100%', height: '100%', objectFit: 'fill' }}
        />
      </div>
    </div>
    <div className="column">
      <div
        className="box"
        style={{ height: '270px' }}
        onClick={() => handleBoxClick(5)}
      >
        <img
          src={P6}
          alt="Box 6"
          style={{ width: '100%', height: '100%', objectFit: 'fill' }}
        />
      </div>
      <div
        className="box"
        style={{ height: '160px' }}
        onClick={() => handleBoxClick(6)}
      >
        <img
          src={P7}
          alt="Box 7"
          style={{ width: '100%', height: '100%', objectFit: 'fill' }}
        />
      </div>
    </div>
  </div>

  {centeredBox !== null && (
  <div className="overlay" onClick={closeCenteredBox}>
    <div
      className="centered-panel"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="left-column">
        <img
          src={boxImages[centeredBox]}
          alt={`Box ${centeredBox + 1}`}
          style={{
            width: "400px",
            height: "400px",
            objectFit: "contain",
            borderRadius: "8px",
          }}
        />
      </div>
      <div className="right-column">
        <h2 className="responsive-title">
          {projectDetails[centeredBox].title}
        </h2>
        <p
          className="responsive-description"
          dangerouslySetInnerHTML={{
            __html: projectDetails[centeredBox].description
          }}
        />
        <div className="button-container">
          <button className="btn">
            <a href={projectLinks[centeredBox]}>Visit</a>
          </button>
          <button className="btn" onClick={closeCenteredBox}>
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
)}
</section>




 {/* New Section 4 */}
 <section id="Contact" className="section4-style">
  
  <div className="content-container4">
  <div className="column4 left-column4">
  <div className="header-container4">
    <h5 className="heading-with-line4">
      Contact
      <span className="line4"></span>
    </h5>
    <h1 className="main-header4">Get In Touch</h1>
  </div>

  <form className="contact-form4" onSubmit={onSubmit}>
    <label className="form-label4" htmlFor="name4">NAME</label>
    <input 
      type="text" 
      id="name4" 
      className="form-field4" 
      placeholder="Enter your Name" 
      name='name'
      required
    />

    <label className="form-label4" htmlFor="email4">EMAIL</label>
    <input 
      type="email" 
      id="email4" 
      className="form-field4" 
      placeholder="Username@gmail.com" 
      name='email'
      required
    />

    <label className="form-label4" htmlFor="subject4">SUBJECT</label>
    <input 
      type="text" 
      id="subject4" 
      className="form-field4" 
      placeholder="Company Name" 
      name='subject'
      required
    />

    <label className="form-label4" htmlFor="message4">MESSAGE</label>
    <textarea 
      className="form-field4 message-panel4" 
      placeholder="Type here..." 
      name='message'
      required
    ></textarea>

    <button 
      type="submit" 
      className="submit-button4"
    >
      Submit
    </button>
  </form>
</div>


{/* RIGHT COLUMN */}
    <div className="column4 right-column4">
  <div className="box4">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3865.956106115172!2d120.85705208791853!3d14.313982450399871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33962a927218606d%3A0x19c1a06fc4a09475!2sCiudad%20Verde%20Homes!5e0!3m2!1sen!2sph!4v1737432486680!5m2!1sen!2sph" 
      className="map-iframe"
      style={{ border: "0" }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Ciudad Verde Homes, Paradahan 1, Tanza, Cavite"
    ></iframe>
  </div>
  <p className="paragraph-below-box4">Ciudad Verde Homes, Paradahan 1, Tanza, Cavite</p>
</div>

  </div>
</section>







{/* New Section 2*/}
<section className="section5-style">
  <div className="column">
    <p>© 2025 John Mark Romero - All rights reserved</p>
  </div>
  <div className="column c-right5">
  <div className="image-container">
    <a href="https://www.facebook.com/share/14p9SYcrts/" target="_blank" rel="noopener noreferrer">
      <img src={j1}  alt="Image 1" style={{ width: '25px', height: '25px' }} />
    </a>
    <a href="https://www.instagram.com/jm_o_r?igsh=MXQ4b3IxcjBwZ3V3ZA==" target="_blank" rel="noopener noreferrer">
      <img src={j2} alt="Image 2" style={{ width: '25px', height: '25px' }} />
    </a>
    <a href="https://wa.me/09777636190" target="_blank" rel="noopener noreferrer">
      <img src={j3} alt="Image 3" style={{ width: '25px', height: '25px' }} />
    </a>
    <a href="https://www.linkedin.com/in/john-mark-romero-084622297/" target="_blank" rel="noopener noreferrer">
      <img src={j4} alt="Image 4" style={{ width: '25px', height: '25px' }} />
    </a>
    <a href="https://github.com/JMOR1011" target="_blank" rel="noopener noreferrer">
      <img src={j5} alt="Image 5" style={{ width: '25px', height: '25px' }} />
    </a>
  </div>
</div>

</section>



    </div>
  );
}
