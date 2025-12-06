import './vdo.css'
import { Link } from 'react-router-dom'

function MyVid() {
    return (
        <div className='vid-section'>

            <h1 className='summer'>Summer Collection</h1>
            <div className="hover-effect">
                <Link to={'/women'}><button className='dicoverMore-button' onClick={() => window.scrollTo(0, 0)}>Discover More</button></Link>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="hero-video"
                >
                    <source src="\videos\video.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default MyVid;