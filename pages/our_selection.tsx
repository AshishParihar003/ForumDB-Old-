import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "../style.css"


export default function OurSelection(){
    let link_name = "Privacy Policy";
    return <> 
            <div className="card e-center">
                <div className="card-body h-center">
                    <h5 className="card-title h-center">{ link_name }</h5>
                    <p className="text-red-600 h-center">This site is under construction.</p>
                </div>
            </div>
        </>
}