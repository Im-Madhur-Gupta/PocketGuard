import React from "react";
import BG from '../../images/bg.png'
import './Background.css';

function Background() {
    return (
        <div className="background">
            <img src={BG} alt="background-img" />
        </div>
    );
}

export default Background;