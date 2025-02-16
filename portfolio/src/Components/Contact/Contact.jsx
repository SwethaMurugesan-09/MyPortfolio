import React from 'react'
import './Contact.css'
const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "1952d936-2c92-4a85-a80b-8a1b5543dc4a");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
         alert(res.message);
        }
      };
  return (
    <div id="contact" className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
        </div>
        <form onSubmit={onSubmit}className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter your name" name="name" />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder="Enter your email" name="email" />
            <label>Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
            <button type="submit" className='contact-submit'>Submit Now</button>
        </form>
    </div>
  )
}

export default Contact