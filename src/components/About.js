import React from 'react'

const About = () => {
    return (
        <div className="container" style={{border:"2px solid red"}}>
            <h1>About page</h1>
            <form method="">
                <div className="row">
                    <div className="col-md-4">
                        <img src="" alt="profile" />
                    </div>
                    <div className="col-md-6">
                        <div className="justify-content-center" style={{direction:"column"}}>
                        <h5 className="col-md-4 col-12">
                            Nitesh Kumar
                        </h5>
                        <h6 className="col-md-4 col-12">
                           Web developer
                        </h6>
                        <p>Ranking:<span>1/10</span></p>
                        {/* <ul className="nav nav-tabs " role="tablist">
                            <li className="nav-item">
                                <a  className="nav-link " id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="home-tab" >home</a>
                            </li>
                            <li className="nav-item">
                            <a  className="nav-link" id="profile-tab" data-toggle="tab" role="tab" href="#profile" aria-controls="profile" aria-selected="profile-tab" >profile</a>

                            </li>
                        </ul> */}

                        
                        </div>
                        </div>
                        <div className="col-md-2">
                           <input type="submit" name="btnAddMore" value="Edit Profile" />
                        </div>    
                    </div>
                    <div className="row">
                        <div className="col-md-4 nav-item ">
                          <p>Work Link</p>
                          <span className="d-flex justify-content-around">
                          <a href="www.google.com" target="_nitesh">youtube</a><br />
                          <a href="www.google.com" target="_nitesh">youtube</a><br />
                          <a href="www.google.com" target="_nitesh">youtube</a><br />
                          <a href="www.google.com" target="_nitesh">youtube</a><br />
                          <a href="www.google.com" target="_nitesh">youtube</a><br />
                          </span>
                        </div>
                        
                        <div className="col-md-8 pl-5">
                        <ul className="nav nav-tabs " role="tablist">
                            <li className="nav-item">
                                <a  className="nav-link " id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="home-tab" >home</a>
                            </li>
                            <li className="nav-item">
                            <a  className="nav-link" id="profile-tab" data-toggle="tab" role="tab" href="#profile" aria-controls="profile" aria-selected="profile-tab" >profile</a>

                            </li>
                        </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane tab-content fade show active" id ="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-6">
                                            <label>User Id</label>
                                        </div>
                                        <div className="col-6">
                                            <p>123456</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-6">
                                            <p>Nitesh</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-6">
                                            <p>nitesh@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <label>Phone</label>
                                        </div>
                                        <div className="col-6">
                                            <p>9985662524</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <label>Profession</label>
                                        </div>
                                        <div className="col-6">
                                            <p>Web Developer</p>
                                        </div>
                                    </div>
                                </div>



                                <div className="tab-pane fade" id ="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="row">
                                        <div className="col-6">
                                            <label>Experience</label>
                                        </div>
                                        <div className="col-6">
                                            <p>Expert</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <label>Hourly Rate</label>
                                        </div>
                                        <div className="col-6">
                                            <p>10 USD</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <label>Total Projects</label>
                                        </div>
                                        <div className="col-6">
                                            <p>210</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <label>English Level</label>
                                        </div>
                                        <div className="col-6">
                                            <p>Expert</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <label>Availablity</label>
                                        </div>
                                        <div className="col-6">
                                            <p>6 month</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                        
            </form>
        </div>
    )
}

export default About;
