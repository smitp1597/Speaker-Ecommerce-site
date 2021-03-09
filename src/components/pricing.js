import './pricing.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
    return(
        <div className="pricing-container">
            <p className="header-text"> PRICING </p>
            <p className="text"> Test out our app today! Choose from three subscription Based payment models. </p>
            <p className="BM"> BASIC MONTHLY </p>
            <hr className="hr" />
            <p className="amt"> $9 </p>
            <p className="para"> Very good Amazing Perfect job Love this It’s so good Features </p>
            <Link to="/payment" className="select-btn"> <p className="select-txt"> SELECT </p> </Link>
        </div>
    )
}

export default Pricing;