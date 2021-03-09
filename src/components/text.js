import './text.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Text = () => {
    return (
        <div>
            <p className="header-text1"> INTERACTIVE CONCERT EXPERIENCE </p>
            <p className="text1"> Experience your favourite artists like never before and from the comfort of your own home. </p>
            <Link to='/pricing' className="pr-button"> <p className="pr-text"> TRY IT NOW </p>  </Link> 
        </div>
    )
};

export default Text;