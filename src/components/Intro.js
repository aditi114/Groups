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
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container-fluid navbar" >
                
                    <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        Filter: All <i className="fas fa-caret-down headarrow"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item activeitem">
                            <a className="nav-link active" aria-current="page" href="#intro">All Posts(32)</a>
                        </li>
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
                        <button type="button" className="btn btn-light writepost">Write a Post <i className="fas fa-caret-down postarrow"></i></button>
                            
                        </li>
                        <li className="nav-item">
                        <button type="button" className="btn btn-primary joinbutton" data-bs-toggle="modal" data-bs-target="#staticBackdrop2"><i class="fas fa-users user"></i><p>Join Group</p></button>
                        <div class="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
    <div class="alert alert-success" role="alert" style={{'font-size': '14px'}}>
        Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
    </div><br></br>
      <div class="modal-header">
        
        <h5 class="modal-title acctitle" id="staticBackdropLabel">Sign In</h5> 
        <p className="accsign">Don’t have an account yet?<button type="button" className="btn btn-primary sgbtn">Create!</button></p>
        <br></br><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form class="joinform">

          <input className= "accemail"type="email" placeholder="Email"></input><br></br>
          <input className= "accpass"type='text' placeholder="Password"></input><br></br>
          <button type="button" class="btn btn-primary accbtn">
<a href="/User">Sign In</a></button><br></br>
          <button type="button" class="btn btn-light accfbtn"><img  src={fblogo} alt="A" className="letterD" />Sign In With Facebook</button><br></br>
          <button type="button" class="btn btn-light accgbtn"><i class="fab fa-google"></i>Sign up with Google</button><br></br>
          <p class="accp">Forgot Password?</p>

      </form>
      <img class="bgimg" src={accountbg} alt="A" />
      
      </div>
      {/* <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
      </div> */}
    </div>
  </div>
</div>
                       

                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <p className="mainlocation"><i class="fas fa-map-marker-alt"></i> Noida, India<i class="fas fa-pen"></i></p><hr></hr>
            <small><i class="fas fa-exclamation-circle"></i>Your location will help us serve better and extend a personalised experience.</small>
            

            {/* --------- */}
            
  
        </div>
    )
     
  }
  
  export default Intro;
  