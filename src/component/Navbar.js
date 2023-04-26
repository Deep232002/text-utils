import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (
    <nav className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <a className="navbar-brand" href="/about">TextUtil</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="home">Home <span className="sr-only"></span></a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li> */}
        
        
      </ul>
     
{/* <div className="d-flax">
<div className="btn bg-primary rounded mx-2" style={{height:'30px',width:'30px'}} name='deepak' value='red'  id='red'  onClick={()=>{props.togglemode('primary')}}></div>


<div className="btn bg-success rounded mx-2" style={{height:'30px',width:'30px'}} name='deepak' value='skyblue' id='skyblue' onClick={()=>{props.togglemode('success')}}></div>

<div className="btn bg-danger rounded mx-2" style={{height:'30px',width:'30px'}} name='deepak' value='green' id='green' onClick={()=>{props.togglemode('danger')}}></div>

<div className="btn bg-dark rounded mx-2" style={{height:'30px',width:'30px'}} name='deepak' value='yellow' id='yellow' onClick={()=>{props.togglemode('dark')}}></div>

<div className="btn bg-light rounded mx-2" style={{height:'30px',width:'30px', border:'1px solid black'}} name='deepak' value='dark' id='dark' onClick={()=>{props.togglemode('light')}}></div>

</div> */}

<div className={`custom-control custom-switch text-${props.mode==='dark' ? 'light':'dark'}`}>
  <input type="checkbox" className="custom-control-input" id="customSwitch1" onClick={props.togglemode}/>
  <label className="custom-control-label" htmlFor="customSwitch1" >On dark mode</label> 
  
 </div>
    </div>
  </nav>
  )
}
// Navbar.propTypes={
//     title:PropTypes.string.isRequired
// }

// Navbar.defaultProps={
//     title: "set title first"
// };