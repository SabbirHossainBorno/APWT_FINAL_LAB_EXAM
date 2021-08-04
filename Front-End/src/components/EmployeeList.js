import Employee from './Employee';
const EmployeeList=({list})=>{
    //console.log(list);
    return(
        <div>
            {
                list.map((employee)=>{
                   return <Employee  key={employee.id} {...employee}/>
                })
            }
            
        </div>
    )
}
export default EmployeeList;