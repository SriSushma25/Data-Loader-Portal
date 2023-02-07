import {useState,useEffect} from 'react';
import './Component3.css';

const Component3 = () => {
    const [data,setData]= useState([]);

    useEffect(()=>{
        getData()
    },[])

    const getData = () => {
        if(localStorage.getItem('data')){
            const newData = JSON.parse(localStorage.getItem('data'));
            setData(newData);
        }
    }

    const onApprove = (items,val) => {
        const newData = data;
        newData.map(item=>{
            if(item.name===items.name&&item.email===items.email){
                item.status=val;
            }
            return item;
        });
        localStorage.setItem('data',JSON.stringify(newData));
        getData();
    }

    const renderTableData=(data)=>{
        return data.map((items, index) => {
           const { name, dob, email,phone,address,status } = items //destructuring
           return (
              <tr key={index}>
                 <td>{index+1}</td>
                 <td>{name}</td>
                 <td>{email}</td>
                 <td>{phone}</td>
                 <td>{dob}</td>
                 <td>{address}</td>
                 <td>
                    {status==='Inducted'?<div className='d-flex justify-content-center align-items-center'>
                {status}
                 <button type="button" className="btn btn-primary btn-edit" onClick={()=>onApprove(items,'Approved')}>Approve</button>
                 <button type="button" className="btn btn-primary btn-edit" onClick={()=>onApprove(items,'Rejected')}>Reject</button>
                    </div>:status}</td>
              </tr>
           )
        })
     }

    return (
        <div className="w-100">
            <div className="subhead">
                    <h3><strong>Process Patient Data</strong></h3>
                </div> 
                <div className='section'>
                {data&&data.length>0&& <table className="table table-bordered">
                    <thead className='thead'>
                        <tr>
                        <th>Sl.No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone No</th>
                        <th>DOB</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody className='tbody'>
                       {renderTableData(data)}
                    </tbody>
                </table>}
                </div>
                </div>
      
    );
}
export default Component3;