import React from 'react'
import accountbg from '../../src/images/accountbg.png'
import fblogo from '../../src/images/fblogo.png'




function Intro(props) {
    // Import result is the URL of your image
    return (
        <div>
            <div className="col-sm-12 Intro" id="intro">
                <div className="Introinner">
                    <h2>Computer Engineering</h2>
                    <h3>142,765 Computer Engineers follow this</h3>
                </div>

            </div>
            <div class="nav2">
            <nav className="navbar navbar-expand-lg navbar-light bg-black">
                <div className="container-fluid navbar" >
                <p class="navbar-brand" href="#">
                All Posts(32)
                </p>
                
                    <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav2" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        Filter: All <i className="fas fa-caret-down headarrow"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav2">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#intro" aria-disabled="true">Article</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#intro" aria-disabled="true">Event</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#intro" tabIndex="-1" aria-disabled="true">Education</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#intro" aria-disabled="true">Job</a>

                        </li>
                        <li className="nav-item">
                        
                            
                        </li>
                        <li className="nav-item">
                        
                       
                       

                        </li>
                        </ul>
                    </div>
                </div>
            </nav>

            </div>
            <button type="button" className="btn btn-light writepost">Write a Post <i className="fas fa-caret-down postarrow"></i></button>
            <button type="button" className="btn btn-primary joinbutton" data-bs-toggle="modal" data-bs-target="#exampleModal2"><i class="fas fa-users user"></i>Join Group</button>
            <p className="mainlocation"><i class="fas fa-map-marker-alt"></i> Noida, India<i class="fas fa-pen"></i></p>
            <small><i class="fas fa-exclamation-circle"></i>Your location will help us serve better and extend a personalised experience.</small>
            
{/* 
            '''''''''''''''' */}
            
<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
  
    <div class="modal-content">
    <div class="alert alert-success" role="alert" style={{'font-size': '14px'}}>
Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
</div>
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Sign In</h5>
        <p className="accp">Don’t have an account yet? <h10 className="acch"> Create new for free!</h10> </p>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form class="joingrpform">
<input className= "grpemail"type="email" placeholder="Email"></input><br></br>
<input className= "grppass"type='text' placeholder="Password"></input><br></br>
<button type="button" class="btn btn-primary grpbtn">Sign In</button><br></br>
<button type="button" class="btn btn-light fbbtn"><img  src={fblogo} alt="A" className="letterD" />Sign In With Facebook</button><br></br>
<button type="button" class="btn btn-light gbtn"><i class="fab fa-google"></i>Sign up with Google</button><br></br>
<p className="forgot">Forgot Password?</p>
</form>
<img class="img-fluid accbg" src={accountbg} alt="A" />

        
      </div>
    </div>
  </div>
</div>
            
  
        </div>
    )
     
  }
  
  export default Intro;
  