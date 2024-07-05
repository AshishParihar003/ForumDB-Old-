import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.min.js'; // Import Bootstrap JavaScript bundle
import img1 from "../assets/men_cards/1.jpg";
import img2 from "../assets/men_cards/2.jpg";
import img3 from "../assets/men_cards/3.jpg";
import img4 from "../assets/men_cards/4.jpeg";
import facebookicon from "../assets/facebook.png";
import twittericon from "../assets/twitter.png";
import linkedinicon from "../assets/linkedin.png";
import testimonial from "../assets/testimonial.jpg"

import mentor from "../assets/mentors (1).png";
const mentors: React.FC = () => {
        interface ImageProps{
         src : string;
         alt : string; 
         name : string;
          detail: string; detail2: string;
         facebook: string;
         twitter: string;
         linkedin: string;
        }
        const images: ImageProps[] = [
          { src: img1, alt: 'Description of image 1' , name : "Arun Kumar",detail: "Ex- TCS || Ex-Tredence || Ex-Harman ||   Ex-WNS" ,detail2: "9+ Years of Industry Experience" ,facebook: 'https://www.facebook.com/Forum.DE.Team', twitter: '', linkedin: 'https://www.linkedin.com/in/arun-kumar-19283775/'},
          { src: img2, alt: 'Description of image 1' , name : "Dinesh Kumar",detail: "Ex- TCS || Ex-Persistent Systems || Ex-Cavisson Systems ",detail2: "9+ Years of Industry Experience" ,facebook: 'https://www.facebook.com/Forum.DE.Team', twitter: '', linkedin: 'https://www.linkedin.com/in/dinesh-kumar-2a714574/'},
          { src: img3, alt: 'Description of image 1' , name : "Sudhir Kumar Singh",detail: " B.Tech(IIT Kharagpur), Phd(IIT Kharagpur)",detail2: "5+ Years of Research and Industry Experience in IIT Kharagpur" ,facebook: 'https://www.facebook.com/Forum.DE.Team', twitter: '', linkedin: 'https://www.linkedin.com/in/sudhir-kumar-singh-36b7b59a/'},
          { src: img4, alt: 'Description of image 1' , name : "Akshay Kaushal",detail: "Ex- TCS ",detail2: "5+ Years of Industry Experience" ,facebook: 'https://www.facebook.com/Forum.DE.Team', twitter: '', linkedin: 'https://www.linkedin.com/in/akshay-kaushal-584116109/'},
        ]
        return <>
        <img src={mentor } className="img-fluid mr-10px" alt="Responsive image" />
               <br/><br/>

           <div className="image-grid">
      {images.map((image, index) => (
        <div key={index} className="image-item">
          <img src={image.src} alt= {image.alt}/>
         
         <div className='text-grid' style={{fontSize: 30}}>{image.name}</div>
         <div className='text-grid'>{image.detail}</div><div className='text-grid'>{image.detail2}</div>
         <div className='social-media '>
          
          <a href={image.facebook} rel="noopener noreferrer">
          <img src={facebookicon} alt='facebook'/>
          </a>
          <a href={image.twitter} rel="noopener noreferrer">
          <img src={twittericon} alt='facebook'/>
          </a>
          <a href={image.linkedin} rel="noopener noreferrer">
          <img src={linkedinicon} alt='facebook'/>
          </a>
          
          </div>
        </div>
      ))}
    </div>
    <br/><br/><br/><br/><br/><br/><br/>
    <div className="row"><img src={testimonial} className="img-fluid" alt="Responsive image"></img></div>
           
        </>
    };
    
 

   
  export default mentors;
