import React from "react";
import "./contactform.css";

const ContactForm = () => {
    return (
        <div className="contactFormContainer" >
            
          <form>
        
            <div className="name-container">
                    <input type="text" name="firstname" placeholder="First Name" />
                    <input type="text" name="lastname" placeholder="Last Name" />
            </div>
            <input type="email" name="email" placeholder="Email" />
            <textarea type="text" name="message" placeholder="Message" rows={3}></textarea>
            <button type="button">Send</button>
          </form>
        </div>
    )
}

export default ContactForm;