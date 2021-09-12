import React from 'react';

const ContactDetails =(props)=>{
    return(
        <div>
            <h4 className="mb-5">Get in Touch</h4>
            <div className="row d-flex justify-content-center" >
           <div className="col-md-4 col-12">
                <input
                 placeholder="Your Name"
                   type="text"
                   name="name"
                   className="form-control"
                 />
           </div>
           <div className="col-md-4 col-12">
                <input
                 placeholder="Your Name"
                   type="text"
                   name="name"
                   className="form-control"
                 />
           </div>
           <div className="col-md-4 col-12">
                <input
                 placeholder="Your Name"
                   type="text"
                   name="name"
                   className="form-control"
                 />
           </div>
           <div className="col-12 mt-5">
                <textarea
                cols="30"
                rows="10"
                 placeholder="Message"
                //    name="name"
                   className="form-control"
                 />
           </div>

           <div className="col-3 mt-3">
                <button type="submit" className="btn btn-success">message</button>
           </div>
           </div>
        </div>
    )
}

export default ContactDetails;