import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "../style.css"
import Course from '../pages/course';
import Home from '../pages/home';
import OurSelection from "../pages/our_selection";
import ContactUs from "../pages/contact_us";
import Blogs from "../pages/blogs";
import  { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


export default function Container(){
  return <>
    
    <div>
       
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/courses/:coursename" component={Course} />
          <Route path="/our-selection" component={OurSelection} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/blogs" component={Blogs} />
        </Switch>
      </Router>
    </div>
  </>
}