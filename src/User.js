import Header from './components/Header';
import './App.css';
import Intro from './components/Intro';
import Posts from './components/Posts';
import Other from './components/Other';
import Job from './components/Job';
import post1 from './images/post1.png';
import user1 from './images/user1.png';
import post2 from './images/post2.png';
import user2 from './images/user2.png';
import post3 from './images/post3.png';
import user3 from './images/user3.png';
import user4 from './images/user4.png';


function User() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
      <Header></Header><br></br><br></br>
      <Intro></Intro>
      <div className="Post"><Posts className="Post1" position='Post1' category='✍️ Article'
       title='What if famous brands had regular fonts? Meet RegulaBrands!'
       content= 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…'
        username='Sarthak Kamra' userlogo={user1}
        bgimg={post1}></Posts>
        <Posts className="Post2" position='Post2' category='🔬️ Education'
       title='Tax Benefits for Investment under National Pension Scheme launched by Government'
       content= 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…'
        username='Sarah West' userlogo={user2}
        bgimg={post2}></Posts>
        
          <Other color="#E56135"position="Other1" category="🗓️ Meetup"
           title="Finance & Investment Elite Social Mixer @Lujiazui" 
           date="Fri, 12 Oct, 2018"
            location="Ahmedabad, India"
            button="Visit Website"
            username="Ronal Jones"
            userlogo={user3}
        bgimg={post3} ></Other>
        <Job color="#02B875"position="Other2" category="💼️ Job"
           title="Software Developer" 
           date="Innovaccer Analytics Private Ltd."
            location="Noida, India"
            button="Apply on Timesjobs"
            username="Joseph Gray"
            userlogo={user4}
         ></Job>
         <br></br>
         </div> 
        
      
        
      
  
    </div>
  );
}

export default User;