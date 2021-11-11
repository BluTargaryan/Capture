import React from "react";
import home1 from '../img/matt-collamer-P8Uk8kdx-BE-unsplash.jpg';

const AboutSection = () =>{
    return(
<div>
    <div className="description">
        <div className="title">
            <div className="hide">
                <h2>We work to make</h2>
            </div>
            <div className="hide">
                <h2>your <span>dreams</span> come</h2>
            </div>
            <div className="hide">
                <h2>true</h2>
            </div>
        </div>
        <p>Contact us for exceptional photo, video or design ideas. We have professionals ready to help you out with their amazing skills.</p>
    <button>Contact Us</button>
    </div>

    <div className="img">
<img src={home1} alt="camera guy" />
    </div>
</div>
    )
}

export default AboutSection;