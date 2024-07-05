import '../style.css'; // Import CSS file for styling


export default function Marquee({updates}: {updates:any}) {
    return (
        <div className="marquee-container">
            <div className="marquee-content">
                {updates}
            </div>
        </div>
    );
}