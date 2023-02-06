import {useState,useEffect} from 'react';
import './Component3.css';

const Component3 = () => {
    const [data,setData]= useState([]);

    useEffect(()=>{
        if(localStorage.getItem('data')){
            const newData = JSON.parse(localStorage.getItem('data'));
            setData(newData);
        }
    },[])
    const renderTableData=()=>{
        return data.map((items, index) => {
           const { name, dob, email,phone,address } = items //destructuring
           return (
              <tr key={index}>
                 <td>{index+1}</td>
                 <td>{name}</td>
                 <td>{email}</td>
                 <td>{phone}</td>
                 <td>{dob}</td>
                 <td>{address}</td>
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
                <table className="table table-bordered">
                    <thead className='thead'>
                        <tr>
                        <th>Sl.No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone No</th>
                        <th>DOB</th>
                        <th>Address</th>
                    </tr>
                    </thead>
                    <tbody className='tbody'>
                       {renderTableData()}
                    </tbody>
                </table>
                </div>
                </div>
      
    );
}
export default Component3;