import React, { useState } from 'react';

import { useHistory } from 'react-router';

const LoginForm = (props) =>{

  const history= useHistory();

  // const [login,setLogin] = useState({
  //   email:"",password:""
  // });
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  
  // const onChangeHandler = (e) =>{
  //   name = e.target.name;
  //   value = e.target.value;
  //   setLogin({...login,[name]:value})
  // }

  const loginUser = async (e)=>{
    e.preventDefault();
    const res = await fetch('/signin',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        email,password
      })
    });
    const data = await res.json();
    if(res.status === 400 || !data){
      window.alert("Invalid credential !!");
    }else{
    alert("Login successful!");
      history.push('/')
    }
  }
  
    return(
        <form method="POST">
         <fieldset className="form-group ">
                 
                 <label className="form-label" style={{ opacity: 0.8 }}>Email</label>
                 <input
                 placeholder="name@example.com"
                   type="email"
                   name="email"
                   className="form-control"
                   onChange={(e)=>setEmail(e.target.value)}
                   value={email}
                 />
                 
                  <label className="form-label" style={{ opacity: 0.8 }}>Your Password</label>
                 <input
                 placeholder="Your Password"
                   type="password"
                   name="password"
                   className="form-control"
                   onChange={(e)=>setPassword(e.target.value)}
                   value={password}
                 />
                
                 <div className="row justify-content-center" >
               <input 
               onClick={loginUser}
                type="button" className="btn btn-success col-md-2 col-5 p-1 m-1" value="Login" />
</div>

                
               </fieldset>

        </form>
    )
}

export default LoginForm;