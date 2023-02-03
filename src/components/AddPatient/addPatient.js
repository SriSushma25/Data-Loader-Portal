import React,{useState} from 'react';


import './addPatient.css';
const Component1 = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [address, setAddress] = useState('');
    const [drug, setDrug] = useState('');
    const [drugList, setDrugList] = useState([]);
    const [isValid, setISValid] = useState(true);
    const [errorData, setErrorData]=useState('');

    const handleLoginDetails = (event) => {
        event.preventDefault()
        const emailRegex = /^\S+@\S+$/;
        if(emailRegex.test(email) && phone.length===10){
            setISValid(true)
        
        const patientValue={
            name:name,
            address:address,
            phone:phone,
            email:email,
            drugs:drugList,
            dob:dob
        }
        console.log(patientValue);
    }
        else{
            setISValid(false);
            if(!emailRegex.test(email) && phone.length!==10){
                alert('Invalid email id and phone no');
            }
            else if(!emailRegex.test(email)){
               alert('Invalid email id,please enter a valid mail id')
            }
            else if(phone.length!==10){
                alert('Invalid phone no,please enter a valid phone no')
            }
        }
        

    }

    const onAddClick = () =>{
        const value = drugList;
        value.push(drug)
        console.log(value)
        setDrugList(value)
        setDrug('')
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
        if(name==='drug'){
            setDrug(value)
        }
        if(name==='email'){
            setEmail(value)
        }
        if(name==='dob'){
            setDob(value)
        }
        if(name==='phone' && value.length<=10){
            setPhone(value)
        }
    }
    return (
        
           <div className="table">
                <div className="subhead">
                    <h3><strong>Add Patient</strong></h3>
                </div> 
<div className="containers">
                <form className="login-form" onSubmit={handleLoginDetails}>
                                    <div className="form-group p-1">
                                    <div className="form-group p-1">
                                        <label htmlFor="Email" className="text-uppercase pl-2">Email</label>
                                        <input type="email" name="email" className="form-control"
                                            value={email} placeholder="Enter the mail address" required
                                            onChange={handleUserInput} />
                                    </div>

                                        <label htmlFor="name" className="text-uppercase pl-2"> Name</label>
                                        <input type="text" name="name" className="form-control"
                                            value={name} placeholder="Enter your name" required
                                            onChange={handleUserInput} />
                                    </div>
                                    <div className = 'd-flex w-100 p-0'> 
                                    <div className="form-group p-1 w-50">
                                        <label htmlFor="Phone" className="text-uppercase pl-2">Phone</label>
                                        <input type="number" name="phone" className="form-control"
                                            value={phone} placeholder="mobile number" required
                                            onChange={handleUserInput} />
                                    </div>

                                    <div className="form-group p-1 w-50">
                                        <label htmlFor="Dob" className="text-uppercase pl-2">DOB</label>
                                        <input type="date" name="dob" className="form-control"
                                            value={dob} placeholder="dob" required
                                            onChange={handleUserInput} />
                                    </div>
                                    </div>

                                    <div className="form-group p-1 ">
                                        <label htmlFor="address" className="text-uppercase pl-2">Address</label>
                                        <textarea name="address" className="form-control" value={address}
                                            placeholder="Enter your address" required
                                            onChange={handleUserInput} />
                                    </div>

                                        <label htmlFor="drug" className="text-uppercase p-0">Drug</label>
                                    <div className = 'd-flex w-100 p-0'>
                                    <div className="form-group p-1 w-50">
                                        <input type="text" name="drug" className="form-control"
                                            value={drug} placeholder="Drug name"
                                            onChange={handleUserInput} />

                                    </div>
                                        <button className='btn btn-primary pt-1 pb-1 pl-4 pr-4 m-1' type="button" onClick={onAddClick}>Add</button>
                                    </div>


                                    <div> DRUG LIST
                                        <ul> {drugList && drugList.length>0 && drugList.map((items,index) => {
                                            
                                            return(<li key={index}>{items}</li>) 
                                        })} </ul>

                                         </div>

                                    <div className="form-check p-1 text-center">
                                        <button type="submit" className="btn btn-primary">submit</button>
                                    </div>
                                </form>
                                </div>
            </div>


        
    );
}
export default Component1;