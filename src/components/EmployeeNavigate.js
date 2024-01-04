import { useState } from "react";
import { BrowserRouter, Route, Routes, Link, useLocation, useNavigate } from "react-router-dom";

const AddEmployee = () => {
    const [empID, setEmpID] = useState('');
    const [empName, setEmpName] = useState('');
    const [company, setCompany] = useState('');
    const [salary, setSalary] = useState('');
    const navigate = useNavigate();

    const employeeOnSubmit = (event) => {
        event.preventDefault();
        navigate("/EmployeeResult", { state: { empID, empName, company,salary } });
    };
    return (
        <div>
            <form onSubmit={employeeOnSubmit}>
                Employee ID   :<input type="text" value={empID} onChange={(e) => setEmpID(e.target.value)} /> <br/>
                Employee Name :<input type="text" value={empName} onChange={(e) => setEmpName(e.target.value)} /> <br/>
                Company       :<input type="text" value={company} onChange={(e) => setCompany(e.target.value)} /> <br/>
                Salary        :<input type="text" value={salary} onChange={(e) => setSalary(e.target.value)} /> <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
const EmployeeResult = () => {
    const location = useLocation();    
    return (<div>
        Employee ID   : {location.state.empID} <br />
        Employee Name : {location.state.empName} <br />
        Company       : {location.state.company} <br />
        Salary        : {location.state.salary} <br />
    </div>);
}
const EmployeeNavigate = () => {
    return (
        <div>
            <BrowserRouter>
                <div><ul> <li> <Link to="/">Form</Link></li></ul><hr />
                    <Routes>
                        <Route path="/" Component={AddEmployee}></Route>
                        <Route path="/EmployeeResult" Component={EmployeeResult}></Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}
export default EmployeeNavigate;