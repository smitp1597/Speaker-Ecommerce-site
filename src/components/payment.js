import './payment.css';
import React from 'react';

class Payment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          fname: '',
          address: '',
          city: '',
          postal: '',
          country: '',
          CN: '',
          cNumber: '',
          EMText: '',
          EYText: '',
          CVVText: ''
        }
        this.handlerEvent = this. handlerEvent.bind(this);
        this.isFormValid = this.isFormValid.bind(this);
      }
    
     handlerEvent(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
      }

      isFormValid() {
        const {fname, address, city, postal, country, CN, cNumber, EMText, EYText, CVVText} = this.state;
      
        return fname && address && city && postal && country && CN && cNumber && EMText && EYText && CVVText;
      }

    render(){
    return (
        <div>
            <p className="pymnt">PAYMENT</p>
            <p className="BI">Billing Information</p>
            <p className="FN">FULL NAME</p>
            <input type="text" className="FN-text" defaultValue={this.state.fname} name="fname" onChange={this.handlerEvent} />
            <p className="BA">BILLING ADDRESS</p>
            <input type="text" className="BA-text" defaultValue={this.state.address} name="address" onChange={this.handlerEvent} />
            <p className="city">CITY</p>
            <input type="text" className="cityText" defaultValue={this.state.city} name="city" onChange={this.handlerEvent} />
            <p className="PC">POSTAL </p>
            <input type="text" className="postText" defaultValue={this.state.postal} name="postal" onChange={this.handlerEvent} />
            <p className="cntry">COUNTRY </p>
            <input type="text" className="cntryText" defaultValue={this.state.country} name="country" onChange={this.handlerEvent} />
            <p className="CCI">Credit Card Information</p>
            <p className="CN">CARDHOLDER’S NAME</p>
            <input type="text" className="CNText" defaultValue={this.state.CN} name="CN" onChange={this.handlerEvent} />
            <p className="cardNumber">CARD NUMBER</p>
            <input type="number" className="cardNumberText" defaultValue={this.state.cNumber} name="cNumber" onChange={this.handlerEvent} />
            <p className="EM">EXPIRY MONTH</p>
            <input type="number" className="EMText" defaultValue={this.state.EMText} name="EMText" onChange={this.handlerEvent} />
            <p className="EY">EXPIRY YEAR</p>
            <input type="number" className="EYText" defaultValue={this.state.EYText} name="EYText" onChange={this.handlerEvent} />
            <p className="CVV">CVV</p>
            <input type="number" className="CVVText" defaultValue={this.state.CVVText} name="CVVText" onChange={this.handlerEvent} />
            <button className="download" disabled={!this.isFormValid()}> DOWNLOAD</button>
        </div>
    )}
}

export default Payment;