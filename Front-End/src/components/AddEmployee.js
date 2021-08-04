
import { useState } from 'react';
import { useHistory } from 'react-router-dom';


const AddEmployee = ({status})=>{
    const [employee, setUser] = useState({employee_name: '', company_name:'', contact_no:'', username:'',password:''});
    const history = useHistory();
    const change = (e)=>{
        const attr = e.target.name;
        const val = e.target.value;
        setUser({...employee, [attr] : val});
    }


    const onSubmit = (e)=>{
        e.preventDefault();
        fetch('http://127.0.0.1:8000/api/add/employee', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(employee)
        })
        history.push('/emplist');
    }

    return(
        <div>
           <form onSubmit={onSubmit}>
               <table>
                   <tr>
                       <td>Employee Name</td>
                       <td><input type='text' name='employee_name' value={employee.employee_name} onChange={change}/></td>
                   </tr>
                   <tr>
                       <td>Company Name</td>
                       <td><input type='text' name='company_name' value={employee.company_name} onChange={change}/></td>
                   </tr>
                   <tr>
                       <td>Contact No</td>
                       <td><input type='text' name='contact_no' value={employee.contact_no} onChange={change}/></td>
                   </tr>
                   <tr>
                       <td>User Name</td>
                       <td><input type='text' name='username' value={employee.username} onChange={change}/></td>
                   </tr>
                   <tr>
                       <td>Password</td>
                       <td><input type='text' name='password' value={employee.password} onChange={change}/></td>
                   </tr>
                   <tr>
                       <td></td>
                       <td><input type='submit' name='submit' value={status}/></td>
                   </tr>
               </table>
           </form>
        </div> 
    );
}

export default AddEmployee;

