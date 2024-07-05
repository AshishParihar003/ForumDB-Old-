import ImageCarousel from './image_carousel';
import RunningCards from './running_cards';
import ImportantUpdates from './important_updates';
// import Highlights from './highlights';
import ImgSummary from './About_Arun_summary';
import MyCertificate from './certificate';
import StudentReview from './student_review';
import Mentors from './mentors';
import Video from './video'




export default function Home() {
  const updates = [
    'New Batch for Azure data engineering is starting on 1st June 2024',
    'Python and SQL test to start soon , top 3 scorers to get free course for Azure data engineering',
    'Regristrations are open for all courses!! Enroll now.',
    // Add more updates as needed
  ];
  return (
    <>
      <ImageCarousel />
     
      <ImportantUpdates updates={updates} />

     <ImgSummary />
      <RunningCards /><MyCertificate/>
      
      
      
      
      <Mentors /><StudentReview/><Video />
      
      

    
      

    </>
  )
};
