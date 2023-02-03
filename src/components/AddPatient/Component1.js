import React,{useState} from 'react';


import './Component1.css';
const Component1 = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [address, setAddress] = useState('');
    const [drug, setDrug] = useState('');
    const [drugList, setDrugList] = useState([]);
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
        if(name==='phone' && value.length<10){
            setPhone(value)
        }
    }
    return (
        
           <div className="table">
                <div className="subhead">
                    <h3><strong>Add Patient</strong></h3>
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
                                    <div className = 'd-flex justify-space-between w-100'> 
                                    <div className="form-group p-1 w-50">
                                        <label htmlFor="Phone" className="text-uppercase">Phone</label>
                                        <input type="number" name="phone" className="form-control"
                                            value={phone} placeholder="mobile number" required
                                            onChange={handleUserInput} />
                                    </div>

                                    <div className="form-group p-1 w-50">
                                        <label htmlFor="Dob" className="text-uppercase">DOB</label>
                                        <input type="date" name="dob" className="form-control"
                                            value={dob} placeholder="dob" required
                                            onChange={handleUserInput} />
                                    </div>
                                    </div>

                                    <div className="form-group p-1 ">
                                        <label htmlFor="address" className="text-uppercase">Address</label>
                                        <textarea name="address" className="form-control" value={address}
                                            placeholder="Enter your address" required
                                            onChange={handleUserInput} />
                                    </div>

                                    <div className = 'd-flex justify-space-between w-100'>
                                    <div className="form-group p-1 w-50">
                                        <label htmlFor="drug" className="text-uppercase">Drug</label>
                                        <input type="text" name="drug" className="form-control"
                                            value={drug} placeholder="Drug name" required
                                            onChange={handleUserInput} />

                                        <button className='form-group p-1 w-25' type="button" onClick={onAddClick}>Add</button>
                                    </div>
                                    </div>


                                    <div> DRUGS
                                        <ul> {drugList && drugList.length>0 && drugList.map((items,index) => {
                                            
                                            return(<li key={index}>{items}</li>) 
                                        })} </ul>

                                         </div>

                                    <div className="form-check p-1 text-center">
                                        <button type="submit" className="btn btn-primary">submit</button>
                                    </div>
                                </form>


            </div>


        
    );
}
export default Component1;