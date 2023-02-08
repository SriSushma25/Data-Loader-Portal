import React, { useState,useEffect } from 'react';
import { useLocation,Link } from 'react-router-dom';
import Component1 from '../AddPatient/addPatient';
import Component2 from '../Edit/editPatient';
import Component3 from '../ProcessData/processData';
import './Dashboard.css';


function Dashboard(){
  const location =useLocation();
  const [currentUser,setCurrentUser] =useState('');
  const [selectedComponent,setSelectedComponent]= useState('component');

  const toggleDropdownHandler = (event) => {
    if (event.target.nextElementSibling !== null) {
      let element = event.target.nextElementSibling.classList;
      (element != null && element.contains('show')) ? element.remove('show') : element.add('show');
    }
  }
  useEffect(()=>{ 
   setCurrentUser(location.state.userName);
  },[location.state.userName]);

  const getCurrentState=(selectedComponent)=> {
    const currentComponent = {
      component1: <Component1 />,
      component2: <Component2 />,
      component3: <Component3 />,
      component:''
    };
    return currentComponent[selectedComponent];
  }
  const menuClickHandler = (name) => {
    setSelectedComponent(name);
  }

    return (
      
        <div className="d-flex" id="wrapper">
          <div id="page-content-wrapper">
            <nav className="navbar navbar-expand-lg navbar-light border-bottom header" id="nav-bar">
              <h5>Data Loader Portal</h5>
              <ul className='d-flex navData'>
              <li onClick={()=>menuClickHandler('component1')} name="component1" className={`list-style ${selectedComponent==='component1'?'highlight':''}`}>Add Patient</li>
              <li onClick={()=>menuClickHandler('component2')} name="component2" className={`list-style ${selectedComponent==='component2'?'highlight':''}`}>Edit Patient</li>
              <li onClick={()=>menuClickHandler('component3')} name="component3" className={`list-style ${selectedComponent==='component3'?'highlight':''}`}>Process Data</li>
              </ul>
              <div>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" onClick={toggleDropdownHandler} >
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                  <li className="nav-item dropdown">
                    <div className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" >{currentUser}</div>
                    <div className="dropdown-menu dropdown-menu-right" >
                      <Link to="/" className="dropdown-item">Logout</Link>
                    </div>
                  </li>
                </ul>
              </div>
              </div>
            </nav>
            <div className="container-fluid background">
              {getCurrentState(selectedComponent)}
            </div>
          </div>
        </div>
      
    )
  }

export default Dashboard;