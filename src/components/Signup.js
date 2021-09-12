import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';

const Signup = () => {

  const history = useHistory();
  const [user,setUser] = useState({
    name:"",email:"",phone:"",work:"",password:"",cpassword:""
  })

let name,value;
  const onChangeHandler = (e) => {
    name=e.target.name;
    value=e.target.value;
    console.log(e.target.name)
    setUser({...user,[name]:value})

  };

  const postData = async(e) =>{
    let{name,email,phone,work,password,cpassword} = user;
    e.preventDefault();
    if(password !=cpassword){
      alert("Password mismatch")
    }else{
    const res = await fetch('/register',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        name,email,phone,work,password,cpassword
      })
    });
    const data = await res.json();
    
    if(res.status === 422 || !data){
      alert("Invalid")
      console.log("Invalid")
    }else {
      alert("Register successful")
      console.log("successful",data)
      history.push('/login');
    }
  }

  }
    return (
      <div className="container col-md-6 col-12 m-auto" style={{border:"2px solid red"}}>
       <h1>Signup Page </h1>
     
            <fieldset className="form-group ">
                  <label className="form-label" style={{ opacity: 0.8 }}>Name</label>
                  <input
                  placeholder="Enter your name !"
                    type="text"
                    name="name"
                    className="form-control"
                    onChange={onChangeHandler}
                    value={user.name}
                  />
                  <label className="form-label" style={{ opacity: 0.8 }}>Email</label>
                  <input
                  placeholder="name@example.com"
                    type="email"
                    name="email"
                    className="form-control"
                    onChange={onChangeHandler}
                    value={user.email}
                  />
                  <label className="form-label" style={{ opacity: 0.8 }}>Phone</label>
                  <input
                  placeholder="9873652412"
                    type="number"
                    name="phone"
                    className="form-control"
                    onChange={onChangeHandler}
                    value={user.phone}
                  />
                  <label className="form-label" style={{ opacity: 0.8 }}>Your Profession</label>
                  <input
                  placeholder="Your Profession"
                    type="text"
                    name="work"
                    className="form-control"
                    onChange={onChangeHandler}
                    value={user.work}
                  />
                   <label className="form-label" style={{ opacity: 0.8 }}>Your Password</label>
                  <input
                  placeholder="Your Password"
                    type="password"
                    name="password"
                    className="form-control"
                    onChange={onChangeHandler}
                    value={user.password}
                  />
                   <label className="form-label" style={{ opacity: 0.8 }}>Confirm Your Password</label>
                  <input
                  placeholder="Your Password"
                    type="password"
                    name="cpassword"
                    className="form-control"
                    onChange={onChangeHandler}
                    value={user.cpassword}
                  />
                  <div className="row justify-content-center" >
                <input onClick={postData} type="button" className="btn btn-success col-md-2 col-5 p-1 m-1" value="Submit" />
                <input type="button" className="btn btn-danger col-md-2 col-5 p-1 m-1" value="Cancle" />
</div>

                 
                </fieldset>

      </div>
    );
  }
  
  export default Signup;