import { useEffect } from 'react';
import certificateimg from "../assets/certificate.jpeg";

import "../style.css"; // assuming you have a stylesheet for custom styles

export default function MyCertificate() {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const animatedText = document.querySelectorAll('.animated-text');
    const windowHeight = window.innerHeight;
    animatedText.forEach(text => {
      const textTop = text.getBoundingClientRect().top;
      if (textTop < windowHeight * 0.8) {
        text.classList.add('fade-in-up');
      } else {
        text.classList.remove('fade-in-up');
      }
    });
  };

  return (
    <>
      <div className="container">
        <br /><br />
        <br /><br />
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="container">
                <p className="animated-text" style={{ fontSize: '24px', fontFamily: "cursive" }}>
                  Certificate of Achievement
                </p>
                <p className="animated-text" style={{ fontWeight: "bold" }}>
                  "Congratulations on completing the Azure Data Constellation: Engineering the Future course!
                  <br />
                
                  <br />
                  A course completion certificate will be given to student on completion of 60% of course.
                  <br />
                  <br></br>
                  This certificate will Enhance your LinkedIn Profile and help you in grabing a good job.
                  <br />
                  <br></br>
                  Best wishes for your future endeavors,
                </p>
                <p className="animated-text" style={{ fontSize: '22px' }}>
                  Best Regards, <br />
                  Arun Kumar
                </p>
              </div>
            </div>
          </div>
          <div className="col-auto h-50 w-50">
            <div className="certificate-wrapper">
              <img src={certificateimg} className="certificate-img" alt="Certificate" />
            </div>
          </div>
        </div>
      </div>
      <br /><br />
      <div className="row">
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        
      </div>
    </>
  );
}
