import { useEffect } from 'react';
import about_us from "../assets/about_us.jpg";
import profileimage from "../assets/pr01.png";

import "../style.css"; // assuming you have a stylesheet for custom styles

export default function ImgSummary() {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const animatedText = document.querySelectorAll('.animated-text');
    animatedText.forEach(text => {
      const textTop = text.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (textTop < windowHeight * 0.8) {
        text.classList.add('fade-in-up');
      } else {
        text.classList.remove('fade-in-up');
      }
    });
  };

  return (
    <>
      <div className="min"></div>
      <div className="min"></div>
      <div className="row">
        <div className="col-auto mt-5 ">
          <div className="circle-background">
          <br/>
            <img src={profileimage} className="img-fluid sum-img" alt="Summary"></img><br/>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="container"><br/><br/>
              <img src={about_us} className="img-fluid" alt="About us"></img>
            </div>
          </div>
          <div className="row">
            <div className="min"></div>
            <div className="min"></div>
            <div className="min"></div>
            <div className="min"></div>
            <div className="container">
              <p className="animated-text" style={{fontSize: '24px' , fontFamily: "cursive"}}>
                <strong>Dear Students,</strong>
              </p>
              <p className="animated-text" style={{fontWeight: "bold" }}>
                It is with great pleasure that I extend a warm welcome to each and every one of you to ForumDE - your gateway to a world of opportunities in the realm of Information Technology.
                In an age where technology is evolving at an unprecedented pace, the demand for skilled IT professionals has never been higher. We are into providing industry level IT training to the students in the most latest technologies now-a-days like Cloud(Azure,AWS,GCP),Data Engineering,Data Science,Docker and Kubernetes,Data Visualization,Business Analyst,Project Management. At ForumDE, we understand the importance of staying ahead of the curve, constantly adapting, and honing our skills to meet the dynamic needs of the industry.
              </p>
              <p className="animated-text" style={{fontWeight: "bold" }}>
                As you embark on your journey towards a fulfilling career in IT, I encourage you to make the most of the resources and opportunities available here at ForumDE. Whether you are a professional looking to take your career to the next level or a fresh graduate eager to make your mark in the industry, our platform offers a wealth of resources, networking opportunities, and expert guidance to support you every step of the way.
                On behalf of the entire ForumDE team, I wish you the very best in your pursuit of a rewarding and fulfilling career in Information Technology. Together, let us shape the future of technology and create a brighter tomorrow for generations to come.
              </p>
              <p className="animated-text" style={{fontSize: '22px' }}>
                Best Regards, <br />
                Arun Kumar
              </p>
            </div>
          </div>
        </div>
      </div>
      <br/><br/><br/><br/><br/><br/>

      
    </>
  );
}
