import React, {useState} from 'react';
import './Component2.css';
const Component2 = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [isValid, setISValid] = useState(true);
    const [dob, setDob] = useState('');

    const handleLoginDetails = (event) => {
        event.preventDefault()
        console.log(name,address)
        const emailRegex = /^\S+@\S+$/;
        if(emailRegex.test(email) && phone.length===10){
            setISValid(true)
        }
        else{
            setISValid(false)
        }
        

    }
    const handleUserInput = (event) =>{
        const value = event.target.value
        const name = event.target.name

        if(name==='name'){
            setName(value)
        
        }
        if(name==='address'){
            setAddress(value)
        }
    
        if(name==='email'){
            setEmail(value)
        }
        if(name==='dob'){
            setDob(value)
        }
        if(name==='phone' && value.length<10){
            setPhone(value)
        }
    }


    return (
        <div className="table">
            <div className="subhead">
                    <h3><strong>Edit Patient Details</strong></h3>
                </div> 

                <form className="login-form" onSubmit={handleLoginDetails}>
                                    <div className="form-group p-1">
                                    <div className="form-group p-1">
                                        <label htmlFor="Email" className="text-uppercase">Email</label>
                                        <input type="email" name="email" className="form-control"
                                            value={email} placeholder="Enter the mail address" required
                                            onChange={handleUserInput} />
                                    </div>
                                    <label htmlFor="name" className="text-uppercase"> Name</label>
                                        <input type="text" name="name" className="form-control"
                                            value={name} placeholder="Enter your name" required
                                            onChange={handleUserInput} />
                                    </div>
                                    <div className="form-group p-1">
                                        <label htmlFor="Phone" className="text-uppercase">Phone</label>
                                        <input type="number" name="phone" className="form-control"
                                            value={phone} placeholder="mobile number" required
                                            onChange={handleUserInput} />
                                    </div>
                                    <div className="form-group p-1">
                                        <label htmlFor="Dob" className="text-uppercase">DOB</label>
                                        <input type="date" name="dob" className="form-control"
                                            value={dob} placeholder="dob" required
                                            onChange={handleUserInput} />
                                    </div>

                                    <div className="form-group p-1">
                                        <label htmlFor="address" className="text-uppercase">Address</label>
                                        <textarea name="address" className="form-control" value={address}
                                            placeholder="Enter your address" required
                                            onChange={handleUserInput} />
                                    </div>

                                    <div className="form-check p-1 text-center">
                                        <button type="submit" className="btn btn-primary">save</button>
                                    </div>
                                </form>
                                   

                </div>
    );
}
export default Component2;