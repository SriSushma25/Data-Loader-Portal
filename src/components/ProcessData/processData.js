import {useState,useEffect} from 'react';
import './processData.css';

const Component3 = () => {
    const [data,setData]= useState([]);
    const [editValue,setEditValue]= useState('')
    const [filterData,setFilterData]=useState('');
    const [editShow,setEditShow]= useState(false);

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
                    {status}</td>
                    <td>{status==='Inducted'&&<div className='d-flex justify-content-center align-items-center'>
                 <button type="button" className="btn btn-primary btn-edit" onClick={()=>onApprove(items,'Approved')}>Approve</button>
                 <button type="button" className="btn btn-primary btn-edit" onClick={()=>onApprove(items,'Rejected')}>Reject</button>
                    </div>}</td>
              </tr>
           )
        })
     }

     const onSelectName = e =>{
        const value = e.target.value;
        setEditValue(value);
     }

     const onSearch = () => {
        setEditShow(true);
        const newData = data.filter(items=>items.name.includes(editValue));
        setFilterData(newData);
     }

    return (
        <div className="w-100">
                <div className='section'>
            <div className="subhead">
            <h3 className='pb-3'><strong>Process Patient Data</strong></h3>
                </div> 
                <div className='select d-flex justify-content-between align-items-center'>
                    <input type="text" name="selectName" className="form-control"
                                            value={editValue} placeholder="Search by Patient name"
                                            onChange={(e)=>onSelectName(e)} />
                        <button type="button" className="btn btn-primary btn-edit" onClick={onSearch}>Search</button>
                    </div>
                {editShow&& <table className="table table-bordered">
                    <thead className='thead'>
                        <tr>
                        <th>Sl.No</th>
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
                       {filterData&&filterData.length>0?renderTableData(data):<tr className='text-center w-100'>No records found</tr>}
                    </tbody>
                </table>}
                </div>
                </div>
      
    );
}
export default Component3;