import React from 'react';
import LoginForm from './LoginForm';

const Login = () => {
    return (
      <div className="container col-md-6 col-12 m-auto" style={{border:"2px solid red"}}>
      <h1>Login Page </h1>
    
          <LoginForm />
     </div>
    );
  }
  
  export default Login;