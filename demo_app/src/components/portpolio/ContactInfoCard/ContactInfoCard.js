import React from "react";
import './contactinfocard.css';

const ContactInfoCard = ({iconUrl,text}) => {
return (
    <div className="contactDetailsCard">
        <div className="icon"> 
            <img src={iconUrl} alt={text} />
        </div>
        <p>{text}</p>
    </div>
)
}
export default ContactInfoCard;