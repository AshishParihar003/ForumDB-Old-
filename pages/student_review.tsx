import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../style.css'; // assuming you have a stylesheet for custom styles
import pic3 from "../assets/student.jpg";
import pic4 from "../assets/student2.jpg";
import pic5 from "../assets/student1.jpg";
import youtube from "../assets/youtube.jpg"

interface StudentReviewProps {
  name: string;
  image: string;
  review: string;
  rating: number;
  isExTCS: boolean; 
}

const StudentReview: React.FC<StudentReviewProps> = ({ name, image, review, rating, isExTCS }) => {
  return (
    <div className="student-review">
      <img src={image} alt={name} className="student-image" />
      <div className="student-details">
        <h3>{name}</h3>
        {isExTCS && <span className="ex-tcs-tag">Ex TCS</span>}
        <p className="review-text">{review}</p>
        <div className="rating">
          {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
        </div>
      </div>
    </div>
  );
};

const StudentReviews: React.FC = () => {
  const reviews = [
    {
      name: 'Raj Singh',
      image: pic3,
      review: "I am writing to express my deepest gratitude for your exceptional mentorship and support during my Azure Data Engineering course journey. Your guidance and expertise have been instrumental in not only helping me navigate the complexities of the course but also in securing a new job with a remarkable 50% hike. Through your expert guidance, I was able to grasp complex concepts, overcome challenges, and hone my skills in Azure data engineering. Your practical advice and real-world examples have been invaluable in preparing me for the demands of the industry.",
      rating: 5,
      isExTCS: false
    },
    {
      name: 'Sagar Kumar Singh',
      image: pic4,
      review: 'I am immensely grateful for the exceptional mentorship and guidance provided by Mr. Arun Kumar during my journey into Azure data engineering. With his invaluable support, I not only gained a deeper understanding of Azure technologies but also secured a new job with an incredible 150% hike. Thanks to Arun sir mentorship I was able to navigate the complexities of the Azure platform with ease and confidence. His encouragement and support were instrumental in helping me secure a job opportunity that far exceeded my expectations.',
      rating: 5,
      isExTCS: false
    },{
      name: 'Krishan Pal',
      image: pic5,
      review: 'I am incredibly grateful for the guidance and mentorship provided by Mr. Arun Kumar throughout my journey in data engineering. Under his expert tutelage, I not only acquired invaluable skills but also achieved an astounding 180% hike in my career trajectory.I wholeheartedly recommend Mr. Arun Kumar to anyone seeking to embark on a journey in data engineering or advance their existing skills. His expertise, dedication, and genuine passion for empowering others are unparalleled, making him a mentor extraordinaire in every sense of the word.',
      rating: 5,
      isExTCS: false
    },
    
  ];

  return (
    <div className="App">
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <StudentReview key={index} {...review} />
        ))}
      </div>       <br></br> <br></br> <br></br> <br></br>

      <div className="row"><img src={youtube} className="img-fluid" alt="Responsive image"></img></div>

      <div className="row">       

        
      </div>
    </div>
  );
}

export default StudentReviews;
