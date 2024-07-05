
import '../style.css'; // Import your CSS file for styling
import Marquee from './marquee';

export default function ImportantUpdates({updates}: {updates:any}){
  return (
    <div className="container-fluid pt-2 pb-2 px-0">
      <div className="text-center">
        <div className="row">
          <div className="col-12 blank-div"></div>
        </div>
        <div className="row">
          <div className="col-auto bg-warning rounded-div">
            <div className="centered-text">
              <b>Important Updates</b>
            </div>
          </div>
          <div className="col bg-warning-subtle no-pad-mar">
            <div className="min"></div>
            <div><Marquee updates={updates.join("   ***  ")} /></div>
            <div className="min"></div>
          </div>
        </div>
      </div>
    </div>
  );
};