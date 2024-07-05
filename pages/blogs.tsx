import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import constructionPic from "../assets/download.png"


export default function Blogs(){
    let link_name = "Blogs";
    return <> 
            <div className="card e-center">
                <img src={ constructionPic } className="card-img-top h-center" alt="..." />
                <div className="card-body h-center">
                    <h5 className="card-title h-center">{ link_name }</h5>
                    <p className="card-text h-center">This site is under construction.</p>
                    <a href="/home" className="btn btn-primary h-center">Go Home</a>
                </div>
            </div>
        </>
}