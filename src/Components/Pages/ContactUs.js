import React, {useRef} from "react";

import './ContactUs.css';
const ContactUs = () => {

  const nameRef = useRef("");
  const mailRef = useRef("");
  const phnoRef = useRef("");



    async function submitHandler(event){
       event.preventDefault();
       const Contacts = {
        name: nameRef.current.value,
        email: mailRef.current.value,
        phno: phnoRef.current.value,
       
      };
      const response = await fetch(
        "https://userdetails-bc548-default-rtdb.firebaseio.com/Contacts.json",
        {
          method: "POST",
          body: JSON.stringify(Contacts),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      
    }
    return (
        <React.Fragment>
        <h3 className="tilte_page">CONTACT US</h3>
        <form onSubmit={submitHandler}>
            <div className="details">
            <div className="control">
                <label htmlFor="name">Name</label><br/>
                <input type='text' ref={nameRef} />
            </div>
            <div className="control">
                <label htmlFor="email">E-mail</label><br/>
                <input type='email' ref={mailRef}/>
            </div>
            <div className="control">
                <label htmlFor="number">Contact Number</label><br/>
                <input type='number' ref={phnoRef} />
            </div>
            <button className="submit_button">SUBMIT</button>
            </div>

        </form>
        </React.Fragment>
    );
}

export default ContactUs;
