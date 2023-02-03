import React,{useState} from 'react';


import './editPatient.css';
const Component2 = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [address, setAddress] = useState('');
    const [nameEdit, setNameEdit] = useState(true);
    const [phoneEdit, setPhoneEdit] = useState(true);
    const [emailEdit, setEmailEdit] = useState(true);
    const [dobEdit, setDobEdit] = useState(true);
    const [addressEdit, setAddressEdit] = useState(true);
    const [drugEdit, setDrugEdit] = useState(true);
    const [drugListEdit, setDrugList] = useState([]);
    const [isValid, setISValid] = useState(true);

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

    const onEditClick= (name) =>{
        if(name==='name'){
            setNameEdit(!nameEdit)
        
        }
        if(name==='address'){
            setAddressEdit(!addressEdit)
        }
        if(name==='email'){
            setEmailEdit(!emailEdit)
        }
        if(name==='dob'){
            setDobEdit(!dobEdit)
        }
        if(name==='phone'){
            setPhoneEdit(!phoneEdit)
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
                    <h3><strong>Edit Patient</strong></h3>
                </div> 
<div className="containers">
                <form className="form d-flex flex-sm-column justify-content-center" onSubmit={handleLoginDetails}>
                                        <label htmlFor="Email" className="text-uppercase pl-2">Email</label>
                                    <div className = 'd-flex w-100 p-0'>
                                    <div className="form-group p-1 w-75">
                                        <input type="email" name="email" className="form-control"
                                            value={email} placeholder="Enter the mail address" required
                                            onChange={handleUserInput} disabled={emailEdit}/>
                                            </div>
                                        <button className='btn btn-primary pt-1 pb-1 pl-4 pr-4 m-1' type="button" onClick={()=>onEditClick('email')} disabled={!emailEdit}>Edit</button>
                                    </div>
                                        <label htmlFor="name" className="text-uppercase pl-2"> Name</label>
                                    <div className = 'd-flex w-100 p-0'>
                                    <div className="form-group p-1 w-75">
                                        <input type="text" name="name" className="form-control"
                                            value={name} placeholder="Enter your name" required
                                            onChange={handleUserInput} disabled={nameEdit}/>
                                            </div></div>
                                        <label htmlFor="Phone" className="text-uppercase pl-2">Phone</label>
                                    <div className = 'd-flex w-100 p-0'> 
                                    <div className="form-group p-1 w-75">
                                        <input type="number" name="phone" className="form-control"
                                            value={phone} placeholder="mobile number" required
                                            onChange={handleUserInput} disabled={phoneEdit}/>
                                    </div>
                                    <button className='btn btn-primary pt-1 pb-1 pl-4 pr-4 m-1' type="button" onClick={()=>onEditClick('phone')} disabled={!phoneEdit}>Edit</button>
                                    </div>
                                    <div className = 'd-flex w-100 p-0'> 
                                    <div className="form-group p-1 w-75">
                                        <label htmlFor="Dob" className="text-uppercase pl-2">DOB</label>
                                        <input type="date" name="dob" className="form-control"
                                            value={dob} placeholder="dob" required
                                            onChange={handleUserInput} disabled={dobEdit}/>
                                    </div>
                                    <button className='btn btn-primary pt-1 pb-1 pl-4 pr-4 m-1' type="button" onClick={()=>onEditClick('dob')} disabled={!dobEdit}>Edit</button>
                                    </div>

                                        <label htmlFor="address" className="text-uppercase pl-2">Address</label>
                                        <div className = 'd-flex w-100 p-0'> 
                                    <div className="form-group p-1 w-75">
                                        <textarea name="address" className="form-control" value={address}
                                            placeholder="Enter your address" required
                                            onChange={handleUserInput} disabled={addressEdit}/>
                                    </div>
                                    <button className='btn btn-primary pt-1 pb-1 pl-4 pr-4 m-1' type="button" onClick={()=>onEditClick('address')} disabled={!addressEdit}>Edit</button>
                                    </div>

                                    <div className="form-check p-1 text-center">
                                        <button type="submit" className="btn btn-primary">Update</button>
                                    </div>
                                </form>
                                </div>
            </div>


        
    );
}
export default Component2;