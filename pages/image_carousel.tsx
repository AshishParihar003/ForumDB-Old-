import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.min.js'; // Import Bootstrap JavaScript bundle
import pic1 from "../assets/nono/1.jpg";
import pic2 from "../assets/nono/2.jpg";
import pic3 from "../assets/nono/3.jpg";
import pic4 from "../assets/nono/4.jpg";

export default function ImageCarousel() {
    return (
        <>
        <div className="min bg-dark"></div>
        <div className="min bg-dark"></div>
        <div className="pt-5">
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="true"> {/* // carousel for automatic */}
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="3000">
                        <img src={pic1} className="d-block w-100" alt="pic1" />
                        <div className="carousel-caption d-none d-md-block">
                           
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src={pic2} className="d-block w-100" alt="pic2" />
                        <div className="carousel-caption d-none d-md-block">
                            {/* <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p> */}
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src={pic3} className="d-block w-100" alt="pic3" />
                        <div className="carousel-caption d-none d-md-block">
                            {/* <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p> */}
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src={pic4} className="d-block w-100" alt="pic4" />
                        <div className="carousel-caption d-none d-md-block">
                            {/* <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p> */}
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        </>
    );
};