import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "../style.css"


export function Footer(){
    return <>
    <footer className="text-center text-lg-start bg-body-tertiary text-muted">

    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    
      <div className="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
      </div>
    
      
    
    </section>
  
    <section className="">
      <div className="container text-center text-md-start mt-5">
       
        <div className="row mt-3">
         
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
           
            <h6 className="text-uppercase fw-bold mb-4">
              <i className="fas fa-gem me-3"></i>ForumDE
            </h6>
            <p>
            ForumDE: Simplifying Technology For You.
            </p>
            <p>
            ForumDE has redefined, revolutionized and simplified the way students learn technology whether they are a college student or working professional. Today, it’s one of the top website and institution when it comes to imparting quality content, guidance and teaching with regards to technology.
            </p>
          </div>
  
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          
            <h6 className="text-uppercase fw-bold mb-4">
              LEGAL
            </h6>
            <p>
            <a href="\src\pages\privacy_policy.html" className="text-reset">Privacy Policy</a>
            </p>
            <p>
              <a href="\src\pages\terms_and_condition.html" className="text-reset">Terms and Condition</a>
            </p>
            <p>
              <a href="\src\pages\cancellation_and_refund_policy.html" className="text-reset">Refund & Cancellation Policy</a>
            </p>
            <p>
              <a href="\src\pages\shipping_and_delivery.html" className="text-reset">Shipping and Delivery</a>
            </p>
          </div>
  
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
           
            <h6 className="text-uppercase fw-bold mb-4">
              Useful links
            </h6>
            <p>
              <a href="#!" className="text-reset">Our Courses</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Our Selection</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Help</a>
            </p>
          </div>
         
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p><i className="fas fa-home me-3"></i> B.No 958,Pocket C
  Gurugram,Haryana
  India</p>
            <p>
              <i className="fas fa-envelope me-3"></i>
              arun.kr4712@gmail.com
            </p>
            <p><i className="fas fa-phone me-3"></i> + 91 7870970617</p>
            <p><i className="fas fa-print me-3"></i> + 91 9229092668</p>
          </div>
         
        </div>
       
      </div>
    </section>
    
    <div className="text-center p-4" style={{color: "red"}}>
      © 2024 Copyright:
      <a className="text-reset fw-bold" href="https://forumde.in/">ForumDE</a>
    </div>
   
  </footer>
</>
}
