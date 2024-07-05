import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import pic1 from "../assets/courses/1.jpg";
import pic2 from "../assets/courses/2.jpg";
import pic3 from "../assets/courses/3.jpg";
import pic4 from "../assets/courses/4.jpg";
import certificateheader from "../assets/certificateheader.jpg";
import courses from "../assets/courses.png";
//import pic5 from "../assets/courses/5.jpg";
import "../style.css"
//import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";
export default function RunningCards() {
    const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
    };
    return <>
        <div className="container-fluid"><br/><br/>
        <div className="row"><img src={courses} className="img-fluid" alt="Announcements"></img></div>
        <br/><br/>
            <div className="min"></div>
            <Carousel responsive={responsive} transitionDuration={2000}  containerClass="carousel-container" autoPlaySpeed={3000} draggable={true} centerMode={false}  autoPlay={true} infinite={true}  swipeable={true}>

            <div className="w-60 p-1 bg-white text-black m-4 rounded-3 border custom-border">
      <img className="img-thumbnail " src={pic1} alt="card1" />
      <h6 className="p-4"> <strong>Azure Data Engineering</strong> <br/><br/><br/>Job Assistance || Real-Time Projects || Live classes<br/><br/>   Duration : 3 Months <br/> <br/><strong>Fees: Rs 19,999/-<br/><br/></strong>Starts from 1st June 2024 <br/><br/>  Registrations Open </h6>
      <p className="fs-sm"></p>
      <div className="button-row p-4">
        <button className="btn custom-explore-button w-50 me-2" type="button">Explore</button>
        <a href="https://rzp.io/l/RwigF3Ds9" className="w-50">
          <button className="btn custom-pay-button w-100" type="button">Pay Now</button>
        </a>
      </div>
    </div>

        <div className="w-60 p-1 bg-white text-black m-4 rounded-3 border custom-border">
    <img className="img-thumbnail " src={pic2} alt="card1" />
    <h6 className="p-4"> <strong>Python Programming</strong><br/> <br/>Python from zero to hero course || Hands-On Training  ||Assignments  ||Recordings  <br/> <br/> Duration: 2 Months <br/><br/><strong>Fees: Rs 4,999/-</strong><br/> <br/>New Batch starting soon <br/> <br/>Registration Open</h6>
    <p className="fs-sm"></p>
    <div className="button-row p-4">
      <button className="btn custom-explore-button w-50 me-2" type="button">Explore</button>
      <a href="https://rzp.io/l/yOT3UZjG" className="w-50">
         <button className="btn custom-pay-button w-100" type="button">Pay Now</button>
        </a>
      </div>
    </div>

    <div className="w-60 p-1 bg-white text-black m-4 rounded-3 border custom-border">
      <img className="img-thumbnail " src={pic3} alt="card1" />
      <h6 className="p-4"> <strong>Master In SQL</strong><br/><br/>  Explore the Power of SQL <br/>Ticket to fast-track growth in data science <br/><br/> Duration : 2 Months  <strong><br/><br/>Fees: Rs 4,999/- </strong><br/><br/>New Batch starting soon <br/><br/>  Registration Open<br/></h6>
      <p className="fs-sm"></p>
      <div className="button-row p-4">
        <button className="btn custom-explore-button w-50 me-2" type="button">Explore</button>
        <a href="https://rzp.io/l/o0ATyl4" className="w-50">
          <button className="btn custom-pay-button w-100" type="button">Pay Now</button>
        </a>
      </div>
    </div>

    <div className="w-60 p-1 bg-white text-black m-4 rounded-3 border custom-border">
      <img className="img-thumbnail " src={pic4} alt="card1" />
      <h6 className="p-4"> <strong>Data Science Program</strong> <br/> <br/><br/>Job Assistance || Real- Time hands on project || Ticket to fast-track growth in data science  <br/><br/> Duration : 3 Months  <br/><br/> <strong> Fees: Rs 19,999/-</strong> <br/><br/>  Registration Open<br/><br/> </h6>
      <p className="fs-sm"></p>
      <div className="button-row p-4">
        <button className="btn custom-explore-button w-50 me-2" type="button">Explore</button>
        <a href="https://rzp.io/l/f4iP34VN" className="w-50">
          <button className="btn custom-pay-button w-100" type="button">Pay Now</button>
        </a>
      </div>
    </div>

   
    

                
            </Carousel>
        </div>
        <br/><br/><br/><br/>
        <div className="row"><img src={certificateheader} className="img-fluid" alt="Responsive image"></img></div>
    </>
};
