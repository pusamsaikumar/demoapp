import React from "react";
import "./contactme.css";
import ContactInfoCard from "../ContactInfoCard/ContactInfoCard";
import ContactForm from "../contactForm/ContactForm";

const ContactMe = () => {
    return <section className="contactContainer">
        <h5>Contact Me</h5>
        <div className="contactContent">
             <div style={{flex:1}}>
                <ContactInfoCard 
                    iconUrl={"https://img.icons8.com/?size=100&id=13826&format=png&color=000000"}
                    text={"pusamsaikumar302@gmail.com"}
                />
                <ContactInfoCard iconUrl={"https://img.icons8.com/?size=100&id=52539&format=png&color=000000"} 
                text={"https://github.com/pusamsaikumar/demoapp"}
                />
             </div>
             <div style={{flex:1}}>
                <ContactForm />
             </div>
        </div>
    </section>
}

export default ContactMe;