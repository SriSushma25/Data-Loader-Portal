import React,{useState,useEffect} from 'react';
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
    const [data,setData]= useState([]);
    const [onedit,setOnEdit] = useState(false);
    const [editValue,setEditValue]= useState('')
    const [filterData,setFilterData]=useState('');
    const [editShow,setEditShow]= useState(false);
    const [toast, setToast] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isNameValid, setIsNameValid] = useState(true);
    const [isPhoneValid, setIsPhoneValid] = useState(true);
    const [isDobValid, setIsDobValid] = useState(true);
    const [isAddressValid, setIsAddressValid] = useState(true);

    useEffect(()=>{
        getData()
    },[])

    const getData=()=>{
        if(localStorage.getItem('data')){
            let newData = JSON.parse(localStorage.getItem('data'));
            setData(newData);
        }
    }

    const handleLoginDetails = (event) => {
        event.preventDefault()
        setIsAddressValid(true);
        setIsNameValid(true);
        setIsDobValid(true);
        setIsEmailValid(true);
        setIsPhoneValid(true);
        const emailRegex = /^\S+@\S+$/;
        if(emailRegex.test(email) && phone.length===10&& name.length>0&&dob.length>0&&address.length>0){
            const newValue = data;
            newValue.map(items=>{
                if(items.name===name){
                    items.name=name;
                    items.address=address;
                    items.phone=phone;
                    items.email=email;
                    items.dob=dob;
                }
                return items;
            });
            setOnEdit(false);
            localStorage.setItem('data',JSON.stringify(newValue));
            setToast(true);
        setTimeout(()=>{setToast(false);}, 3000);
            getData();
            
        }
        else{
            if(!emailRegex.test(email)||email.length===0){
                setIsEmailValid(false);
            }
            if(name.length===0){
                setIsNameValid(false);
            }
            if(address.length===0){
                setIsAddressValid(false);
            }
            if(dob.length===0){
                setIsDobValid(false);
            }
            if(phone.length!==10){
                setIsPhoneValid(false);
            }
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
    
    const onEditIconClick =(newData) => {
        setName(newData.name)
          setEmail(newData.email)
          setDob(newData.dob)
          setPhone(newData.phone)
          setAddress(newData.address)
       setOnEdit(true)
    }

    const renderTableData=()=>{
        return filterData.map((items, index) => {
           const { name, dob, email,phone,address,status } = items; //destructuring
           return (
              <tr key={index}>
                 <td>{name}</td>
                 <td>{email}</td>
                 <td>{phone}</td>
                 <td>{dob}</td>
                 <td>{address}</td>
                 <td>{status}</td>
                 <td><div className='d-flex justify-content-center align-items-center'>
                 <button type="button" className="btn btn-primary btn-edit" onClick={()=>onEditIconClick(items)}>Edit</button>
                    </div></td>
              </tr>
           )
        })
     }

     const onSelectName = e =>{
        const value = e.target.value;
        setEditValue(value);
     }

     const onEditButtonClick = () => {
        if(editValue.length>0){
        setEditShow(true);
        const newData = data.filter(items=>items.name.includes(editValue));
        setFilterData(newData);
        }else{
            setFilterData([])
            setEditShow(false);
        }
     }

    return (
           <div className="w-100">
                <div className='section'>
                <div className="subhead">
                    <h3 className='pb-3'><strong>Edit Patient</strong></h3>
                </div> 
                    <div className='select d-flex justify-content-between align-items-center'>
                    <input type="text" name="selectName" className="form-control"
                                            value={editValue} placeholder="Search by Patient name"
                                            onChange={(e)=>onSelectName(e)} />
                    {/* <select name="selectName" id="editPatient" onChange={(e)=>onSelectName(e)} placeholder='Select by name' value={editValue} className='selector'>
                    <option value="" selected disabled hidden>Choose here</option>
                        {data&&data.length>0&&data.map(items=>{
                                return <option value={items.name}>{items.name}</option>
                        })}
                        </select> */}
                        <button type="button" className="btn btn-primary btn-edit" onClick={onEditButtonClick}>Search</button>
                    </div>
                {editShow&&<table className="table table-bordered">
                    <thead className='thead'>
                        <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone No</th>
                        <th>DOB</th>
                        <th>Address</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody className='tbody'>
                       {filterData&& filterData.length>0 ?renderTableData():<tr className='text-center w-100 p-1'>No Editable Data Found</tr>}
                    </tbody>
                </table>}
                {onedit&&<div className='d-flex justify-content-center align-items-center pt-2'>
<div className="containers">
                <form className="form d-flex flex-sm-column justify-content-center" onSubmit={handleLoginDetails}>
                                        <label htmlFor="Email" className="text-uppercase pl-2">Email</label>
                                        <div className = 'd-flex w-100 p-0'>
                                    <div className="form-group p-1 w-75">
                                        <input type="email" name="email" className="form-control"
                                            value={email} placeholder="Enter the mail address" required
                                            onChange={handleUserInput} disabled={emailEdit}/>
                                            <p className="alert-danger m-0 " hidden={isEmailValid}>Invalid email id!!Please enter a valid email id</p>
                                            </div>
                                        <button className='btn btn-primary pt-1 pb-1 pl-4 pr-4 m-1' type="button" onClick={()=>onEditClick('email')} disabled={!emailEdit}>Edit</button>
                                    </div>
                                        <label htmlFor="name" className="text-uppercase pl-2"> Name</label>
                                    <div className = 'd-flex w-100 p-0'>
                                    <div className="form-group p-1 w-75">
                                        <input type="text" name="name" className="form-control"
                                            value={name} placeholder="Enter your name" required
                                            onChange={handleUserInput} disabled={nameEdit}/>
                                            <p className="alert-danger m-0 " hidden={isNameValid}>Invalid name!!Please enter patient name</p>
                                            </div></div>
                                        <label htmlFor="Phone" className="text-uppercase pl-2">Phone</label>
                                    <div className = 'd-flex w-100 p-0'> 
                                    <div className="form-group p-1 w-75">
                                        <input type="number" name="phone" className="form-control"
                                            value={phone} placeholder="mobile number" required
                                            onChange={handleUserInput} disabled={phoneEdit}/>
                                            <p className="alert-danger m-0 " hidden={isPhoneValid}>Invalid phone number!!Please enter a valid phone no</p>
                                    </div>
                                    <button className='btn btn-primary pt-1 pb-1 pl-4 pr-4 m-1' type="button" onClick={()=>onEditClick('phone')} disabled={!phoneEdit}>Edit</button>
                                    </div>
                                    <div className = 'd-flex w-100 p-0'> 
                                    <div className="form-group p-1 w-75">
                                        <label htmlFor="Dob" className="text-uppercase pl-2">DOB</label>
                                        <input type="date" name="dob" className="form-control"
                                            value={dob} placeholder="dob" required
                                            onChange={handleUserInput} disabled={dobEdit} max={new Date().toISOString().split("T")[0]}/>
                                            <p className="alert-danger m-0 " hidden={isDobValid}>Invalid date!!Please enter a valid date</p>
                                    </div>
                                    <button className='btn btn-primary pt-1 pb-1 pl-4 pr-4 m-1' type="button" onClick={()=>onEditClick('dob')} disabled={!dobEdit}>Edit</button>
                                    </div>

                                        <label htmlFor="address" className="text-uppercase pl-2">Address</label>
                                        <div className = 'd-flex w-100 p-0'> 
                                    <div className="form-group p-1 w-75">
                                        <textarea name="address" className="form-control" value={address}
                                            placeholder="Enter your address" required
                                            onChange={handleUserInput} disabled={addressEdit}/>
                                            <p className="alert-danger m-0 " hidden={isAddressValid}>Invalid address!!Please enter a valid address</p>
                                    </div>
                                    <button className='btn btn-primary pt-1 pb-1 pl-4 pr-4 m-1' type="button" onClick={()=>onEditClick('address')} disabled={!addressEdit}>Edit</button>
                                    </div>

                                    <div className="form-check p-1 text-center">
                                        <button type="submit" className="btn btn-primary">Update</button>
                                    </div>
                                </form>
                                </div>
                                <div id="snackbar" className={toast?'show':''}>Patient Edited Successfully</div>
                                </div>}
                </div>
            </div>
        
    );
}
export default Component2;