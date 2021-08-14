import React from 'react'
import Path963 from '../../src/images/Path963.png'
import Path964 from '../../src/images/Path964.png'
import Path965 from '../../src/images/Path965.png'
import Path966 from '../../src/images/Path966.png'
import Path967 from '../../src/images/Path967.png'
import Path968 from '../../src/images/Path968.png'
import Path969 from '../../src/images/Path969.png'
import Path970 from '../../src/images/Path970.png'
import Union1 from '../../src/images/Union1.png'
import accountbg from '../../src/images/accountbg.png'
import fblogo from '../../src/images/fblogo.png'
import toggle from '../../src/images/toggle.png'

function Header() {
    // Import result is the URL of your image
    return (
        <div className="Header">
            
            <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
  <p class="navbar-brand" href="#">
  <div class="cname">
                <img  src={Path963} alt="A" className="letterA" />
            
                <img  src={Path964} alt="A" className="letterT" />
                <img  src={Path965} alt="A" className="letterG" />
                <img  src={Path966} alt="A" className="letterdot" />
                <img  src={Path967} alt="A" className="letterw" />
                <img  src={Union1} alt="A" className="letterO" />
                <img  src={Path968} alt="A" className="letterR" />
                <img  src={Path969} alt="A" className="letterL" />
                <img  src={Path970} alt="A" className="letterD" />
            </div>
  </p>
    
    <button class="navbar-toggler one" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler" style={{border: 'none'}}><img  src={toggle} alt="A" /></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#Intro">.</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Intro"><button type="button" class="btn btn-light searchbutton"><i class="fal fa-search search">
          </i>Search your favorite groups in ATG
        </button></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Intro"><p className="account">Create account <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal">It's free</button><i className="fas fa-caret-down headarrow"></i></p></a>

 
        </li>
      </ul>
    </div>
  </div>
</nav>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
  
    <div class="modal-content">
    <div class="alert alert-success" role="alert" style={{'font-size': '14px'}}>
Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
</div>
      <div class="modal-header">
        <h5 class="modal-title acctitle" id="exampleModalLabel">Create Account</h5>
        <p className="accp">Already have an account? <h10 className="acch">Sign In</h10> </p>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form class="joingrpform">

<input className= "grpname" type='text' placeholder="First Name      |        Last Name  "></input><br></br>
<input className= "grpemail"type="email" placeholder="Email"></input><br></br>
<input className= "grppass"type='text' placeholder="Password"></input><br></br>
<input className= "grpconpass"type="text"  placeholder="Confirm Password"></input><br></br>
<button type="button" class="btn btn-primary grpbtn">Create Account</button><br></br>
<button type="button" class="btn btn-light fbbtn"><img  src={fblogo} alt="A" className="letterD" />Sign In With Facebook</button><br></br>
<button type="button" class="btn btn-light gbtn"><i class="fab fa-google"></i>Sign up with Google</button><br></br>
<p className="tc">By signing up, you agree to our Terms & conditions, Privacy policy</p>
</form>
<img class="img-fluid accbg" src={accountbg} alt="A" />

        
      </div>
    </div>
  </div>
</div>
           

        </div>
        
    )
     
  }
  
  export default Header;

  