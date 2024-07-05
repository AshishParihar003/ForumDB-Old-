import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.min.js'; // Import Bootstrap JavaScript bundle

export default function ImageCard(args: any){
    return<>
        {/* <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <div className="card">
                <img src={args.img_path} className="card-img-top" alt={args.alt_text} />
                <div className="card-body">
                    <h5 className="card-title">{args.title}</h5>
                    <p className="card-text">{args.description}</p>
                </div>
                </div>
            </div>
        </div> */}
        <div className="card">
            <img src={args.img_path} className="card-img-top" alt={args.alt_text} />
            <div className="card-body">
                <h5 className="card-title">{args.title}</h5>
                <p className="card-text">{args.description}</p>
            </div>
        </div>
    </>
}