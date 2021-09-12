import React from 'react';
import ContactDetails from './ContactDetails';

const Contact = () => {
    return (
     <div className="contact_info">
       <div className="container-fluid" style={{border:"1px solid red"}}>
       <div className="row justify-content-center" >
           <div className="col-md-3 col-12 m-1" style={{border:"1px solid green"}}>
             Phone
             <br />
             9835113943
           </div>
           <div className="col-md-3 col-12 m-1" style={{border:"1px solid green"}}>
            Email
            <br />
             nitesh@gmail.com
           </div>
           <div className="col-md-3 col-12 m-1" style={{border:"1px solid green"}}>
             Address
             <br />
             Ghatsila
           </div>
         </div>
       </div>
       <div className="container-fluid" style={{border:"1px solid red"}}>
       <div className="row justify-content-center" >
           <div className="col-md-8 col-12 m-1" style={{border:"1px solid green"}}>
            <ContactDetails />
           </div>
           </div>

      </div>
     </div>
    );
  }
  
  export default Contact;