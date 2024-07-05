import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Navbar from "./common/navbar";
import { ContainerEndpoints } from "./constants";
import Container from "./common/container";
import  { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Footer } from "./common/footer";

export default function App() {
  const endpoints = ContainerEndpoints;
  
  return (
    <>
      <Navbar />
     
      <Router>
        <Switch>
          {endpoints.map((endpoint, index) => (
            <Route key={index} path={endpoint} component={Container} />
          ))}
        </Switch>
      </Router>
      <Footer />
    </>
  )
}
