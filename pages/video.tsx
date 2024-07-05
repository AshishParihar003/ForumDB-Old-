import "react-multi-carousel/lib/styles.css";

function video(){
    return(
        <div className="App ml-20">
<div className="row">
       
      </div>
        <iframe
            title="random-youtube-video"
            width="90%"
            height="500 em"
            src={'https://www.youtube.com/embed/QGm2ENy9wIo?si=dZ2ZR5e_hH6O7Sb3'}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    </div>
    );


}

export default video;


