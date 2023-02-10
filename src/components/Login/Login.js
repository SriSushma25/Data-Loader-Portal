import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const navigate = useNavigate();
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isValid, setISValid] = useState(true);

    useEffect(()=>{
        if(localStorage.getItem('userName')){
            navigate('/dashboard');
        }
    },[navigate])

    const handleUserInput = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        if (name === 'username') {
            setUserName(value);
        }
        else {
            setPassword(value);
        }
        setISValid(true);
    }

    const handleLoginDetails = (event) => {
        event.preventDefault();
        const emailRegex = /^\S+@\S+$/;
        const passwordRegex = /^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%@&? "]).*$/;
        if (emailRegex.test(username) && passwordRegex.test(password)) 
        {
            setISValid(true);
            localStorage.setItem('userName',username);
            navigate('/dashboard')
        } 
        else {
            setISValid(false);
        }
    }
    return (
        <React.Fragment>
            <div className="frontpage background1">
                <section className="login-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 banner-sec">
                                <div id="carouselExampleIndicators" className="carousel slide" >
                                </div>
                            </div>
                            <div className="col-md-4 login-sec">
                                <h2 className="text-center">Data Loader Portal</h2>
                                <form className="login-form" onSubmit={handleLoginDetails}>
                                    <div className="form-group p-1">
                                        <label htmlFor="Email" className="text-uppercase">User Name</label>
                                        <input type="email" name="username" className="form-control"
                                            value={username} placeholder="Enter your user name" required
                                            onChange={handleUserInput} />
                                    </div>
                                    <div className="form-group p-1">
                                        <label htmlFor="Password" className="text-uppercase">Password</label>
                                        <input type="password" name="password" className="form-control" value={password}
                                            placeholder="Enter your password" required
                                            onChange={handleUserInput} />
                                    </div>
                                    <div className="form-check p-1 text-center">
                                        <button type="submit" className="btn btn-primary">Login</button>
                                    </div>
                                </form>
                                <div role="alert" className="alert alert-danger alert-padding" hidden={isValid}>
                                    Invalid Username/Password.Please try again
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </React.Fragment>
    )
}

export default Login;