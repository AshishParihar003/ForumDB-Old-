import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { useParams  } from 'react-router-dom'
import Capitalize from "../functions"

interface Params {
    coursename: string;
    // Add other parameters if you have them
  }


export default function Course(){
    let { coursename } = useParams<Params>();
    coursename = Capitalize(coursename);
    return <> 
            <div className="card text-center">
                <div className="card-header">
                </div>
                <div className="card-body">
                    <h5 className="card-title">{ coursename }</h5>
                    <p className="card-text">We are preparing this course for you... This is under construction</p>
                    <a href="/" className="btn btn-primary">Go back home</a>
                </div>
                <div className="card-footer text-muted">
                2 days ago
                </div>
            </div>
        </>
}