import React,{useState,useEffect} from 'react';


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
    const [toast, setToast] = useState(false);
    const [errorData, setErrorData]=useState('');
    const [data,setData]= useState([]);

    useEffect(()=>{
        if(localStorage.getItem('data')){
            const newData = JSON.parse(localStorage.getItem('data'));
            setData(newData);
        }
    },[])

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
            dob:dob,
            status:'Inducted'
        }
        const newValue = data;
            newValue.push(patientValue);
            let valueData = newValue.filter((newValue, index, self) =>
            index === self.findIndex((t) => (t.name === newValue.name && t.email === newValue.email)))
        setData(valueData);
        localStorage.setItem('data',JSON.stringify(valueData));
        setToast(true);
        setTimeout(()=>{setToast(false);}, 3000);

        setName('');
        setDrugList([]);
        setEmail('');
        setDob('');
        setAddress('');
        setPhone('');
    }
        else{
            setISValid(false);
            if(!emailRegex.test(email) && phone.length!==10){
                setErrorData('Invalid Email id and Phone no !!');
            }
            else if(!emailRegex.test(email)){
                setErrorData('Invalid email id,Please enter a valid mail id')
            }
            else if(phone.length!==10){
                setErrorData('Invalid phone number!!Please enter a valid phone no')
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
        
           <div className="d-flex justify-content-center align-items-center flex-sm-column">
                <div className="subhead">
                    <h3 className='pb-3 pt-3'><strong>Add Patient</strong></h3>
                </div> 
<div className="containers">
<div role="alert" className="alert alert-danger" hidden={isValid}>
                                    {errorData}
                                </div>
                <form className="login-form" onSubmit={handleLoginDetails}>
                                    <div className="form-group p-1">
                                    <div className="form-group p-1 pb-3">
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
                                    <div className = 'd-flex w-100 p-0 pb-2 pt-2'> 
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
                                            onChange={handleUserInput} max={new Date().toISOString().split("T")[0]}/>
                                    </div>
                                    </div>

                                    <div className="form-group p-1 pb-3 ">
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
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                                <div id="snackbar" className={toast?'show':''}>Patient Added Successfully</div>
                                </div>
            </div>


        
    );
}
export default Component1;