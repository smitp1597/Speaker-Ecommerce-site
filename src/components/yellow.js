import './yellow.css';
import React from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
import ScriptTag from 'react-script-tag';

const Yellow = () => {

    const mystyle = {
        width: "814px",
        height: "88px",
        textAlign: "left",
        font: "normal normal bold 50px/90px Helvetica Neue",
        letterSpacing: "7.4px",
        color: "#FFFFFF",
        opacity: "1"
    };

    const mystyle1 = {
        width: "679px",
        height: "121px",
        textAlign: "left",
        font: "normal normal normal 35px/40px Helvetica Neue",
        letterSpacing: "5.1px",
        color: "#191919",
        opacity: "1"
    }

    return(
        
        <div className="y-container">
            <Link to="/pricing" className="try-btn1"> <p className="try-text1"> TRY IT NOW </p> </Link>
            <h1>
            <p style={mystyle}> FRONT ROW SEATS </p>
            <p style={mystyle1}>Experience concerts up close and personal.</p></h1>
            <span className="cursor"></span>
            <button className="demo-btn1"> <p className="demo-txt1"> SEE DEMO </p> </button>
            <ScriptTag isHydrating={true} type="text/javascript" src="yellow-js.js" />
        </div>
       
    )
}

export default Yellow;