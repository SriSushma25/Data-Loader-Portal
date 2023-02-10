import React, { useState,useEffect } from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import './Dashboard.css';


function Dashboard(){
  const navigate = useNavigate();
  const [currentUser,setCurrentUser] =useState('');
  const [selectedComponent,setSelectedComponent]= useState('');

  const toggleDropdownHandler = (event) => {
    if (event.target.nextElementSibling !== null) {
      let element = event.target.nextElementSibling.classList;
      (element != null && element.contains('show')) ? element.remove('show') : element.add('show');
    }
  }
  useEffect(()=>{ 
    if(localStorage.getItem('userName')){
      setCurrentUser(localStorage.getItem('userName'));
    }
    else{
      navigate('/');
    }
  },[currentUser, navigate]);

  const menuClickHandler = (name) => {
    setSelectedComponent(name)
    navigate(`/dashboard/${name}`);
  }

    return (
      
        <div className="d-flex" id="wrapper">
          <div id="page-content-wrapper">
            <nav className="navbar navbar-expand-lg navbar-light border-bottom header" id="nav-bar">
              <h5>Data Loader Portal</h5>
              <ul className='d-flex navData'>
              <li onClick={()=>menuClickHandler('addPatient')} name="component1" className={`list-style ${selectedComponent==='addPatient'?'highlight':''}`}>Add Patient</li>
              <li onClick={()=>menuClickHandler('editPatient')} name="component2" className={`list-style ${selectedComponent==='editPatient'?'highlight':''}`}>Edit Patient</li>
              <li onClick={()=>menuClickHandler('processPatient')} name="component3" className={`list-style ${selectedComponent==='processPatient'?'highlight':''}`}>Process Data</li>
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
                      <Link to="/" className="dropdown-item" onClick={()=>localStorage.removeItem('userName')}>Logout</Link>
                    </div>
                  </li>
                </ul>
              </div>
              </div>
            </nav>
            <div className="container-fluid background">
              <Outlet />
            </div>
          </div>
        </div>
      
    )
  }

export default Dashboard;