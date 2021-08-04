import {Link} from 'react-router-dom';
import './Employee.css';
const Employee = ({id,employee_name,company_name,contact_no,username})=>{
    return(
        <div className='employee' style={{color:'black'}}>
            <h3>Employee Name:{employee_name}</h3>
            <p>Company Name:{company_name}</p>
            <p>Contact No:{contact_no}</p>
            <p>User Name:{username}</p>
            <button>Delete </button>
            <Link to={`/edit/${id}`}> Edit </Link>

        </div>
    )
}
export default Employee;