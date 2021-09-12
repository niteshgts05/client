import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage =(props)=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-10 col-12 m-auto text-center">
                    <h1>404</h1>
                    <h3>We are Sorry, Page not found!</h3>

                    <NavLink to ="/" >Go back to home </NavLink>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage;