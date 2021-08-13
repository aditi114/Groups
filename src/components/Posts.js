import React from 'react'
import '../App.css';

function Posts(props) {
    // Import result is the URL of your image
    return (
        
        
            <div className={props.position}>
             <img src={props.bgimg} alt="fail"></img>
             <div className="card-body">
             <h9>{props.category}</h9><br></br>
             <h7>{props.title}</h7>
             <div className="dropdown">
  <a className="btn btn-light dropdown-toggle bg-light" href="#Intro" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
...
  </a>

  <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a className="dropdown-item" href="#Intro">Edit</a></li>
    <li><a className="dropdown-item" href="#Intro">Report</a></li>
    <li><a className="dropdown-item" href="#Intro">Option 3</a></li>
  </ul>
</div>
             <p>{props.content}</p><br></br>
             
             <span> <img src={props.userlogo} alt="fail"></img>{props.username}</span>
             
             <h11><i class="far fa-eye"></i>1.4k views</h11>
             <h10><i class="fad fa-share-alt-square"></i></h10>



        </div>
        </div>
    )
     
  }
  
  export default Posts;
